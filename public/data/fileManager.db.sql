BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "chequeTable" (
	"chequeID"	INTEGER,
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
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
CREATE TABLE IF NOT EXISTS "departmentTable" (
	"departmentID"	INTEGER,
	"departmentCode"	TEXT NOT NULL UNIQUE,
	"departmentDescription"	TEXT NOT NULL,
	"departmentComments"	TEXT,
	"isRootDepartment"	INTEGER NOT NULL CHECK("isRootDepartment" IN (0, 1)),
	"lastUpdate"	TEXT,
	"userID"	INTEGER,
	PRIMARY KEY("departmentID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "fileMovementTable" (
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
CREATE TABLE IF NOT EXISTS "fileTable" (
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
CREATE TABLE IF NOT EXISTS "schemeTable" (
	"schemeID"	INTEGER NOT NULL UNIQUE,
	"schemeNo"	TEXT NOT NULL UNIQUE,
	"schemeDetails"	TEXT NOT NULL,
	"userID"	INTEGER NOT NULL,
	PRIMARY KEY("schemeID" AUTOINCREMENT),
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
CREATE TABLE IF NOT EXISTS "userTable" (
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
