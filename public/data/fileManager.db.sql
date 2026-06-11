BEGIN TRANSACTION;
DROP TABLE IF EXISTS "bankBranchTable";
CREATE TABLE "bankBranchTable" (
	"branchID"	INTEGER,
	"bankID"	INTEGER,
	"branchName"	TEXT NOT NULL,
	"branchAddress"	INTEGER,
	"lastUpdated"	TEXT,
	"userID"	INTEGER,
	PRIMARY KEY("branchID" AUTOINCREMENT),
	FOREIGN KEY("bankID") REFERENCES "bankTable"("BankID")
);
DROP TABLE IF EXISTS "bankTable";
CREATE TABLE "bankTable" (
	"BankID"	INTEGER,
	"BankName"	TEXT NOT NULL,
	"lastUpdated"	TEXT,
	"UserID"	INTEGER NOT NULL,
	PRIMARY KEY("BankID" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "chequeTable";
CREATE TABLE "chequeTable" (
	"chequeID"	INTEGER,
	"branchID"	INTEGER NOT NULL,
	"chequeNumber"	TEXT NOT NULL,
	"chequeDate"	TEXT NOT NULL,
	"chequeDrawnTo"	TEXT NOT NULL,
	"chequeAmount"	INTEGER NOT NULL,
	"chequeTreasuryToDate"	TEXT,
	"chequeTreasuryReturnDate"	TEXT,
	"chequeDispatchDate"	TEXT,
	"chequeComments"	TEXT NOT NULL,
	"isCancelled"	INTEGER DEFAULT 0,
	"userID"	INTEGER NOT NULL,
	"lastUpdated"	TEXT,
	PRIMARY KEY("chequeID" AUTOINCREMENT),
	FOREIGN KEY("branchID") REFERENCES "bankBranchTable"("branchID"),
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
DROP TABLE IF EXISTS "departmentTable";
CREATE TABLE "departmentTable" (
	"departmentID"	INTEGER,
	"departmentCode"	TEXT NOT NULL UNIQUE,
	"departmentDescription"	TEXT NOT NULL,
	"departmentComments"	TEXT,
	"isRootDepartment"	INTEGER NOT NULL CHECK("isRootDepartment" IN (0, 1)),
	"lastUpdate"	TEXT,
	"userID"	INTEGER,
	PRIMARY KEY("departmentID" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "fileMovementTable";
CREATE TABLE "fileMovementTable" (
	"movementID"	INTEGER,
	"fileID"	INTEGER NOT NULL,
	"moveDate"	TEXT NOT NULL DEFAULT CURRENT_DATE,
	"moveTime"	TEXT DEFAULT CURRENT_TIME,
	"fromDepartmentID"	INTEGER NOT NULL,
	"toDepartmentID"	INTEGER NOT NULL,
	"priority"	TEXT NOT NULL DEFAULT 'N' CHECK("priority" IN ('L', 'N', 'H', 'I')),
	"isProcessed"	INTEGER NOT NULL DEFAULT 0 CHECK("isProcessed" IN (0, 1)),
	"isLocked"	INTEGER NOT NULL DEFAULT 0 CHECK("isLocked" IN (0, 1)),
	"userID"	INTEGER NOT NULL,
	"lastUpdate"	TEXT,
	"movementComments"	TEXT,
	PRIMARY KEY("movementID" AUTOINCREMENT),
	FOREIGN KEY("fileID") REFERENCES "fileTable"("fileID"),
	FOREIGN KEY("fromDepartmentID") REFERENCES "departmentTable"("departmentID"),
	FOREIGN KEY("toDepartmentID") REFERENCES "departmentTable"("departmentID"),
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
DROP TABLE IF EXISTS "fileTable";
CREATE TABLE "fileTable" (
	"fileID"	INTEGER,
	"fileNumber"	TEXT NOT NULL,
	"fileDescription"	TEXT NOT NULL,
	"fileComments"	TEXT NOT NULL,
	"fileOwner"	INTEGER NOT NULL,
	"schemeID"	INTEGER NOT NULL,
	"lastUpdate"	TEXT,
	"userID"	INTEGER,
	PRIMARY KEY("fileID" AUTOINCREMENT),
	FOREIGN KEY("fileOwner") REFERENCES "departmentTable"("departmentID"),
	FOREIGN KEY("schemeID") REFERENCES "schemeTable"("schemeID")
);
DROP TABLE IF EXISTS "schemeTable";
CREATE TABLE "schemeTable" (
	"schemeID"	INTEGER NOT NULL UNIQUE,
	"schemeNumber"	TEXT NOT NULL UNIQUE,
	"schemeDetails"	TEXT NOT NULL,
	"userID"	INTEGER NOT NULL,
	PRIMARY KEY("schemeID" AUTOINCREMENT),
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
DROP TABLE IF EXISTS "userTable";
CREATE TABLE "userTable" (
	"userID"	INTEGER,
	"userName"	TEXT NOT NULL,
	"userDepartmentID"	INTEGER NOT NULL,
	"userPassword"	TEXT NOT NULL,
	"userComments"	TEXT NOT NULL,
	"userIsAdmin"	INTEGER NOT NULL DEFAULT 0 CHECK("userIsAdmin" IN (0, 1)),
	"isSuperAdmin"	INTEGER NOT NULL DEFAULT 0 CHECK("isSuperAdmin" IN (0, 1)),
	"lastUpdate"	TEXT DEFAULT CURRENT_DATE,
	"isDeleted"	INTEGER,
	"updatedByID"	INTEGER,
	PRIMARY KEY("userID" AUTOINCREMENT),
	FOREIGN KEY("userDepartmentID") REFERENCES "departmentTable"("departmentID")
);
COMMIT;
