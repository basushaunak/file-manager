BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "chequeTable" (
	"chequeId"	INTEGER,
	"chequeNumber"	TEXT NOT NULL,
	"chequeDate"	TEXT NOT NULL,
	"chequeDrawnTo"	TEXT NOT NULL,
	"chequeTreasuryToDate"	TEXT,
	"chequeTreasuryReturnDate"	TEXT,
	"chequeDispatchDate"	TEXT,
	"chequeComments"	TEXT NOT NULL,
	"userID"	INTEGER NOT NULL,
	"lastUpdated"	TEXT,
	PRIMARY KEY("chequeId" AUTOINCREMENT),
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
CREATE TABLE IF NOT EXISTS "chequeTable_History" (
	"chequeId"	INTEGER,
	"chequeNumber"	TEXT,
	"chequeDate"	TEXT,
	"chequeDrawnTo"	TEXT,
	"S"	chequeTreasuryToDate TEXT,
	"chequeTreasuryReturnDate"	TEXT,
	"chequeDispatchDate"	TEXT,
	"chequeComments"	TEXT,
	"userID"	INTEGER,
	"lastUpdated"	TEXT,
	"isDeleted"	INTEGER
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
CREATE TABLE IF NOT EXISTS "departmentTable_History" (
	"departmentID"	INTEGER,
	"departmentCode"	TEXT,
	"departmentDescription"	TEXT,
	"departmentComments"	TEXT,
	"isRootDepartment"	INTEGER,
	"lastUpdate"	TEXT,
	"userID"	INTEGER,
	"isDeleted"	INTEGER
);
CREATE TABLE IF NOT EXISTS "fileMovementTable" (
	"movementID"	INTEGER,
	"fileID"	INTEGER NOT NULL,
	"moveDate"	TEXT NOT NULL DEFAULT CURRENT_DATE,
	"moveTime"	TEXT DEFAULT CURRENT_TIME,
	"fromDepartmentId"	INTEGER NOT NULL,
	"toDepartmentID"	INTEGER NOT NULL,
	"priority"	TEXT NOT NULL DEFAULT 'N' CHECK("priority" IN ('L', 'N', 'H', 'I')),
	"isProcessed"	INTEGER NOT NULL DEFAULT 0 CHECK("isProcessed" IN (0, 1)),
	"isLocked"	INTEGER NOT NULL DEFAULT 0 CHECK("isLocked" IN (0, 1)),
	"userID"	INTEGER NOT NULL,
	"lastUpdate"	TEXT,
	"movementComments"	TEXT,
	PRIMARY KEY("movementID" AUTOINCREMENT),
	FOREIGN KEY("fileID") REFERENCES "fileTable"("fileID"),
	FOREIGN KEY("fromDepartmentId") REFERENCES "departmentTable"("departmentID"),
	FOREIGN KEY("toDepartmentID") REFERENCES "departmentTable"("departmentID"),
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
CREATE TABLE IF NOT EXISTS "fileMovementTable_History" (
	"movementID"	INTEGER,
	"fileID"	INTEGER,
	"moveDate"	TEXT,
	"moveTime"	TEXT,
	"fromDepartmentId"	INTEGER,
	"toDepartmentID"	INTEGER,
	"priority"	TEXT,
	"isProcessed"	INTEGER,
	"isLocked"	INTEGER,
	"userID"	INTEGER,
	"lastUpdate"	TEXT,
	"movementComments"	TEXT,
	"isDeleted"	INTEGER
);
CREATE TABLE IF NOT EXISTS "fileTable" (
	"fileID"	INTEGER,
	"fileNumber"	TEXT NOT NULL,
	"fileDescription"	TEXT NOT NULL,
	"fileComments"	TEXT NOT NULL,
	"fileOwner"	INTEGER NOT NULL,
	"schemeID"	INTEGER NOT NULL,
	"lastUpdate"	TEXT,
	"userId"	INTEGER,
	PRIMARY KEY("fileID" AUTOINCREMENT),
	FOREIGN KEY("fileOwner") REFERENCES "departmentTable"("departmentID"),
	FOREIGN KEY("schemeID") REFERENCES "schemeTable"("schemeID")
);
CREATE TABLE IF NOT EXISTS "fileTable_History" (
	"fileID"	INTEGER,
	"fileNumber"	TEXT,
	"fileDescription"	TEXT,
	"fileComments"	TEXT,
	"fileOwner"	INTEGER,
	"schemeID"	INTEGER,
	"lastUpdate"	TEXT,
	"isDeleted"	INTEGER
);
CREATE TABLE IF NOT EXISTS "schemeTable" (
	"schemeID"	INTEGER NOT NULL UNIQUE,
	"schemeNo"	INTEGER NOT NULL UNIQUE,
	"schemeDetails"	TEXT NOT NULL,
	"userID"	INTEGER NOT NULL,
	PRIMARY KEY("schemeID" AUTOINCREMENT),
	FOREIGN KEY("userID") REFERENCES "userTable"("userID")
);
CREATE TABLE IF NOT EXISTS "schemeTable_History" (
	"schemeID"	INTEGER,
	"schemeNo"	INTEGER,
	"schemeDetails"	TEXT,
	"userID"	INTEGER,
	"isDeleted"	INTEGER
);
CREATE TABLE IF NOT EXISTS "userTable" (
	"userID"	INTEGER,
	"userName"	TEXT NOT NULL,
	"userDepartmentID"	INTEGER NOT NULL,
	"userPassword"	TEXT NOT NULL,
	"userComments"	TEXT NOT NULL,
	"userIsAdmin"	INTEGER NOT NULL DEFAULT 0 CHECK("userIsAdmin" IN (0, 1)),
	"isSuperAdmin"	INTEGER NOT NULL DEFAULT 0 CHECK("isSuperAdmin" IN (0, 1)),
	"lastUpdate"	TEXT DEFAULT CuRRENT_DATE,
	PRIMARY KEY("userID" AUTOINCREMENT),
	FOREIGN KEY("userDepartmentID") REFERENCES "departmentTable"("departmentID")
);
CREATE TABLE IF NOT EXISTS "userTable_History" (
	"userID"	INTEGER,
	"userName"	TEXT,
	"userDepartmentID"	INTEGER,
	"userPassword"	TEXT,
	"userComments"	TEXT,
	"userIsAdmin"	INTEGER,
	"isSuperAdmin"	INTEGER,
	"lastUpdate"	TEXT,
	"isDeleted"	INTEGER
);
CREATE TRIGGER trg_chequeTable_track_delete
BEFORE DELETE ON "chequeTable"
BEGIN
    INSERT INTO "chequeTable_History" (
        "chequeId",
        "chequeNumber",
        "chequeDate",
        "chequeDrawnTo",
        "chequeTreasuryToDate",
        "chequeTreasuryReturnDate",
        "chequeDispatchDate",
        "chequeComments",
        "userID",
        "lastUpdated",
        "isDeleted"
    )
    VALUES (
        OLD."chequeId",
        OLD."chequeNumber",
        OLD."chequeDate",
        OLD."chequeDrawnTo",
        OLD."chequeTreasuryToDate",
        OLD."chequeTreasuryReturnDate",
        OLD."chequeDispatchDate",
        OLD."chequeComments",
        OLD."userID",
        OLD."lastUpdated",
        1
    );
END;
CREATE TRIGGER trg_chequeTable_track_update
BEFORE UPDATE ON "chequeTable"
BEGIN
    INSERT INTO "chequeTable_History" (
        "chequeId",
        "chequeNumber",
        "chequeDate",
        "chequeDrawnTo",
        "chequeTreasuryToDate",
        "chequeTreasuryReturnDate",
        "chequeDispatchDate",
        "chequeComments",
        "userID",
        "lastUpdated",
        "isDeleted"
    )
    VALUES (
        OLD."chequeId",
        OLD."chequeNumber",
        OLD."chequeDate",
        OLD."chequeDrawnTo",
        OLD."chequeTreasuryToDate",
        OLD."chequeTreasuryReturnDate",
        OLD."chequeDispatchDate",
        OLD."chequeComments",
        OLD."userID",
        OLD."lastUpdated",
        0
    );
END;
CREATE TRIGGER trg_departmentTable_track_delete
BEFORE DELETE ON "departmentTable"
BEGIN
    INSERT INTO "departmentTable_History" (
        "departmentID",
        "departmentCode",
        "departmentDescription",
        "departmentComments",
        "isRootDepartment",
        "lastUpdate",
        "isDeleted"
    )
    VALUES (
        OLD."departmentID",
        OLD."departmentCode",
        OLD."departmentDescription",
        OLD."departmentComments",
        OLD."isRootDepartment",
        OLD."lastUpdate",
        1
    );
END;
CREATE TRIGGER trg_departmentTable_track_update
BEFORE UPDATE ON "departmentTable"
BEGIN
    INSERT INTO "departmentTable_History" (
        "departmentID",
        "departmentCode",
        "departmentDescription",
        "departmentComments",
        "isRootDepartment",
        "lastUpdate",
        "isDeleted"
    )
    VALUES (
        OLD."departmentID",
        OLD."departmentCode",
        OLD."departmentDescription",
        OLD."departmentComments",
        OLD."isRootDepartment",
        OLD."lastUpdate",
        0
    );
END;
CREATE TRIGGER trg_fileMovementTable_track_delete
BEFORE DELETE ON "fileMovementTable"
BEGIN
    INSERT INTO "fileMovementTable_History" (
        "movementKey",
        "movementID",
        "fileID",
        "fromDepartmentId",
        "moveDate",
        "moveTime",
        "toDepartmentID",
        "priority",
        "isProcessed",
        "isLocked",
        "userID",
        "lastUpdate",
        "isDeleted"
    )
    VALUES (
        OLD."movementKey",
        OLD."movementID",
        OLD."fileID",
        OLD."fromDepartmentId",
        OLD."moveDate",
        OLD."moveTime",
        OLD."toDepartmentID",
        OLD."priority",
        OLD."isProcessed",
        OLD."isLocked",
        OLD."userID",
        OLD."lastUpdate",
        1
    );
END;
CREATE TRIGGER trg_fileMovementTable_track_update
BEFORE UPDATE ON "fileMovementTable"
BEGIN
    INSERT INTO "fileMovementTable_History" (
        "movementKey",
        "movementID",
        "fileID",
        "fromDepartmentId",
        "moveDate",
        "moveTime",
        "toDepartmentID",
        "priority",
        "isProcessed",
        "isLocked",
        "userID",
        "lastUpdate",
        "isDeleted"
    )
    VALUES (
        OLD."movementKey",
        OLD."movementID",
        OLD."fileID",
        OLD."fromDepartmentId",
        OLD."moveDate",
        OLD."moveTime",
        OLD."toDepartmentID",
        OLD."priority",
        OLD."isProcessed",
        OLD."isLocked",
        OLD."userID",
        OLD."lastUpdate",
        0
    );
END;
CREATE TRIGGER trg_fileTable_track_delete
BEFORE DELETE ON "fileTable"
BEGIN
    INSERT INTO "fileTable_History" (
        "fileID",
        "fileNumber",
        "fileDescription",
        "fileComments",
        "fileOwner",
        "schemeID",
        "lastUpdate",
        "isDeleted",
        "userID"
    )
    VALUES (
        OLD."fileID",
        OLD."fileNumber",
        OLD."fileDescription",
        OLD."fileComments",
        OLD."fileOwner",
        OLD."schemeID",
        OLD."lastUpdate",
        OLD."userID",
        1
    );
END;
CREATE TRIGGER trg_fileTable_track_update
BEFORE UPDATE ON "fileTable"
BEGIN
    INSERT INTO "fileTable_History" (
        "fileID",
        "fileNumber",
        "fileDescription",
        "fileComments",
        "fileOwner",
        "schemeID",
        "lastUpdate",
        "userID",
        "isDeleted"
    )
    VALUES (
        OLD."fileID",
        OLD."fileNumber",
        OLD."fileDescription",
        OLD."fileComments",
        OLD."fileOwner",
        OLD."schemeID",
        OLD."lastUpdate",
        OLD."userID",
        0
    );
END;
CREATE TRIGGER trg_schemeTable_track_delete
BEFORE DELETE ON "schemeTable"
BEGIN
    INSERT INTO "schemeTable_History" (
        "schemeID",
        "schemeNo",
        "schemeDetails",
        "isDeleted"
    )
    VALUES (
        OLD."schemeID",
        OLD."schemeNo",
        OLD."schemeDetails",
        1
    );
END;
CREATE TRIGGER trg_schemeTable_track_update
BEFORE UPDATE ON "schemeTable"
BEGIN
    INSERT INTO "schemeTable_History" (
        "schemeID",
        "schemeNo",
        "schemeDetails",
        "userID",
        "isDeleted"
    )
    VALUES (
        OLD."schemeID",
        OLD."schemeNo",
        OLD."schemeDetails",
        OLD."userID",
        0
    );
END;
CREATE TRIGGER trg_userTable_track_delete
BEFORE DELETE ON "userTable"
BEGIN
    INSERT INTO "userTable_History" (
        "userID",
        "userName",
        "userDepartmentID",
        "userPassword",
        "userComments",
        "userIsAdmin",
        "isSuperAdmin",
        "lastUpdate",
        "isDeleted"
    )
    VALUES (
        OLD."userID",
        OLD."userName",
        OLD."userDepartmentID",
        OLD."userPassword",
        OLD."userComments",
        OLD."userIsAdmin",
        OLD."isSuperAdmin",
        OLD."lastUpdate",
        1
    );
END;
CREATE TRIGGER trg_userTable_track_update
BEFORE UPDATE ON "userTable"
BEGIN
    INSERT INTO "userTable_History" (
        "userID",
        "userName",
        "userDepartmentID",
        "userPassword",
        "userComments",
        "userIsAdmin",
        "isSuperAdmin",
        "lastUpdate",
        "isDeleted"
    )
    VALUES (
        OLD."userID",
        OLD."userName",
        OLD."userDepartmentID",
        OLD."userPassword",
        OLD."userComments",
        OLD."userIsAdmin",
        OLD."isSuperAdmin",
        OLD."lastUpdate",
        0
    );
END;
COMMIT;
