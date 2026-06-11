CREATE TABLE transactionTable_History AS SELECT * FROM transactionTable WHERE 1=0 ;
ALTER TABLE transactionTable_History ADD COLUMN isDeleted INTEGER;
