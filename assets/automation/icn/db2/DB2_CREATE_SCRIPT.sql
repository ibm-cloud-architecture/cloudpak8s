-- *****************************************************************
--
-- Licensed Materials - Property of IBM
--
-- 5724-U69
--
-- Copyright IBM Corp. 2012, 2014  All Rights Reserved.
--
-- US Government Users Restricted Rights - Use, duplication or
-- disclosure restricted by GSA ADP Schedule Contract with
-- IBM Corp.
--
-- *****************************************************************
--
-- IBM Content Navigator configuration table creation script
-- for DB2 LUW

-- *****************************************************************
--  Create DB for the application to use
--
-- Tip: If you plan to create a database on a remote instance,
-- remove the comment code from the following line:
-- ATTACH TO @ECMClient_NODENAME@;

CREATE database @ECMClient_DBNAME@ AUTOMATIC STORAGE YES
ON /home/@ECMClient_DBUSER@/@ECMClient_DBNAME@/
USING CODESET UTF-8 TERRITORY US
COLLATE USING SYSTEM;