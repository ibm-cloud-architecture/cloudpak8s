#!/usr/bin/env bash

function print-help()
{
        echo "Argument error, command usage: "
        echo " -n database name"
        echo " -s schema name"
        echo " -t tablespace name"
        echo " -u db2 user"
        echo " -a navigator admin id"
        exit 1
}

if [ $# -lt 5 ]; then
    print-help
fi

while getopts ":n:s:t:u:a:" opt
do
        case $opt in
                n ) DB_NAME=$OPTARG
                    echo "ICN database name: $DB_NAME";;
                s ) SCHEMA_NAME=$OPTARG
                    echo "ICN database schema name: $SCHEMA_NAME";;
                t ) TS_NAME=$OPTARG
                    echo "ICN database table space name: $TS_NAME";;
                u ) DB2_USER=$OPTARG
                    echo "ICN database user name: $DB2_USER";;
                a ) ICN_ADMIN_ID=$OPTARG
                    echo "ICN admin ID: $ICN_ADMIN_ID";;
                ? ) print-help
                    exit 1;;
        esac
done

ICNDBDIR=/home/${DB2_USER}/${DB_NAME}

mkdir -p ${ICNDBDIR}

sed -i -e "s/@ECMClient_DBNAME@/$DB_NAME/g" DB2_CREATE_SCRIPT.sql
sed -i -e "s/@ECMClient_DBUSER@/$DB2_USER/g" DB2_CREATE_SCRIPT.sql
sed -i -e "s/@ECMClient_DBUSER@/$DB2_USER/g" DB2_ONE_SCRIPT_ICNDB.sql
sed -i -e "s/@ECMClient_SCHEMA@/$SCHEMA_NAME/g" DB2_ONE_SCRIPT_ICNDB.sql
sed -i -e "s/@ECMClient_TBLSPACE@/$TS_NAME/g" DB2_ONE_SCRIPT_ICNDB.sql
sed -i -e "s/@ECMClient_ADMINID@/$ICN_ADMIN_ID/g" DB2_ONE_SCRIPT_ICNDB.sql

db2 CONNECT RESET
db2 -tvf DB2_CREATE_SCRIPT.sql
db2 connect to $DB_NAME
db2 -tvf DB2_ONE_SCRIPT_ICNDB.sql