# Python Imports
# Standard Library
import json
import csv
import time
import uuid
from datetime import datetime

"""
    Format of ServiceNow data
    {
      "application_group_id": "sample_tenant",
      "application_id": "tas",
      "timestamp": 1570221600,
      "utc_timestamp": "2019-10-04 20:40:00",
      "type": "incident",
      "incident": {
        "incident_id": "PB9MZUY",
        "title": "Unable to connect to email",
        "description": "Unable to connect to email using my laptop.",
        "created_at": "2019-09-11T06:39:48-04:00",
        "updated_at": "2019-09-11T06:39:48-04:00",
        "resolved_at": "2019-09-11T07:57:58-04:00",
        "closed_at": "2019-09-11T07:57:58-04:00",
        "started_at": "2019-09-11T07:57:58-04:00",
        "business_duration_ms": 15347,
        "severity": 1,
        "priority": 2,
        "impact": 3,
        "source": {
          "source_name": "ServiceNow",
          "source_url":"https://ibm.servicenow.com/INC0000060",
          "source_incident_id": "INC0000060",
          "source_application_id": "tokenizer124"
        },
        "comments": [
          {
            "comment_text":"Rebooted it."
          }
        ],
        "related_incidents":[
          {
            "source_incident_id":"INC0000059",
            "relationship":"parent"
          }
        ],
        "resolution": {
          "rca_id": "RCA00013547",
          "resolution_summary": "The problem was resolved by rebooting the laptop."
        },
        "features": [
        ]
      },
      "meta_features": []
    }


      "cmdb_ci": "",
"""

def convertToUTC(servicenow_time):
  if servicenow_time == "" or servicenow_time is None:
    return servicenow_time
  else:
    datetime_object = datetime.strptime(
      servicenow_time, "%Y-%m-%d %H:%M:%S")
    utc_time = datetime_object.strftime("%Y-%m-%dT%H:%M:%SZ")
    return utc_time

# base Service-Now URL with trailing slash
base_url = "https://watson.service-now.com/"
datasource = "ServiceNow"
dataset_type = "incident"

impact_sev_map = {
  "1 - High" : '1',
  "2 - Medium" : '2',
  "3 - Low" : '3',
}

priority_map = {
  "Sev - 1" : '1',
  "1 - Critical" : '1',
  "Sev - 2" : '2',
  "2 - High" : '2',
  "Sev - 3" : '3',
  "3 - Moderate" : '3',
  "4 - Low" : '4',
  "5 - Planning" : '5',
}

APPLICATION_GROUP_ID = 1
APPLICATION_ID = 1

with open('incidents.csv', mode='r') as csv_file:
  csv_reader = csv.DictReader(csv_file)
  line_count = 0
  for record in csv_reader:
    if line_count == 0:
      #print(f'Column names are {", ".join(record)}')
      line_count += 1
    
    # only closed incidents are currently processed, so change state from resolved to closed
    if record['state'].lower() == 'resolved':
      record['state'] = 'closed'
      
    if record['state'].lower() != 'closed':
      continue # only including closed incidents
    
    output = {}
    output['application_group_id'] = APPLICATION_GROUP_ID
    output['application_id'] = APPLICATION_ID
    output['timestamp'] = int(time.time())
    output['utc_timestamp'] = convertToUTC(str(datetime.fromtimestamp(output['timestamp'])))
    output['type'] = dataset_type

    output['incident'] = {}
    output['incident']['incident_id'] = str(uuid.uuid4())
    output['incident']['title'] = record['short_description']
    output['incident']['description'] = record['description']
    output['incident']['created_at'] = convertToUTC(record['sys_created_on'])
    output['incident']['updated_at'] = convertToUTC(record['sys_updated_on'])
    output['incident']['resolved_at'] = convertToUTC(record['resolved_at'])
    output['incident']['closed_at'] = convertToUTC(record['closed_at'])
    output['incident']['started_at'] = convertToUTC(record['opened_at'])
    output['incident']['business_duration_ms'] = record['business_duration']
    output['incident']['severity'] = impact_sev_map[record['severity']]
    output['incident']['priority'] = priority_map[record['priority']]
    output['incident']['impact'] = impact_sev_map[record['impact']]
    output['incident']['state'] = record['state'].lower()

    output['incident']['source'] = {}
    output['incident']['source']['source_name'] = datasource
    output['incident']['source']['source_url'] = base_url + 'incident.do?number=' + record['number']
    output['incident']['source']['source_incident_id'] = record['number']
    output['incident']['source']['source_application_id'] = record['cmdb_ci']

    # parse comments
    comments = []
    # TODO sometimes the delimeter comes through as \r\n\r\n instead of \n\n
    for comment in record['comments_and_work_notes'].split('\n20'):
      # TODO double check that comment starts with date, in case individual comment contains \r\n\r\n
      if comment:
        comments.append({ 'comment_text' : comment })
    output['incident']['comments'] = comments
    
    # create related incidents
    related_incidents = []
    if record['parent_incident']:
      related_incidents.append({ 'relationship' : 'parent', 'source_incident_id' : record['parent_incident'] })
    # TODO add child incidents, will require caching of incidents and lookups
    output['incident']['related_incidents'] = related_incidents

    output['incident']['resolution'] = {}
    output['incident']['resolution']['resolution_summary'] = record['close_notes']
    output['incident']['resolution']['rca_id'] = record['problem_id']

    output['incident']['features'] = []
    output['meta_features'] = []

    # json.dumps uses double quotes for keys and automatically escapes text fields
    print json.dumps(output)

    line_count += 1
