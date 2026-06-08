import "./FileMovement.css";
import SmartDate from "../components/SmartDate";

export default function FileMovement() {
  // "movementID"	INTEGER,
  // "fileID"	INTEGER NOT NULL,
  // "moveDate"	TEXT NOT NULL DEFAULT CURRENT_DATE,
  // "moveTime"	TEXT DEFAULT CURRENT_TIME,
  // "fromDepartmentId"	INTEGER NOT NULL,
  // "toDepartmentID"	INTEGER NOT NULL,
  // "priority"	TEXT NOT NULL DEFAULT 'N' CHECK("priority" IN ('L', 'N', 'H', 'I')),
  // "isProcessed"	INTEGER NOT NULL DEFAULT 0 CHECK("isProcessed" IN (0, 1)),
  // "isLocked"	INTEGER NOT NULL DEFAULT 0 CHECK("isLocked" IN (0, 1)),
  // "userID"	INTEGER NOT NULL,
  // "lastUpdate"	TEXT,
  // "movementComments"	TEXT,
  return (
    <div className="files-movement-manager">
      <form action="" className="files">
        <label htmlFor="file-number">File No.: </label>
        <input type="text" id="file-number" />
        <label id="file-description">File Description </label>
        <label id="scheme">Scheme#</label>
        <label htmlFor="move-date">Date:</label>
        <SmartDate id="move-date" />
        <label htmlFor="from-department">From: </label>
        <input type="text" id="from-department" />
        <label htmlFor="to-department">To: </label>
        <input type="text" id="to-department" />
        <label htmlFor="movement-omments"></label>
        <textarea id="movement-omments" rows="3"></textarea>
        <div class="checkbox">
          <label htmlFor="isProcessed">Processed</label>
          <input type="checkbox" id="isProcessed" />
        </div>
        <div class="checkbox alert-input">
          <label htmlFor="isLocked" class="alert-input-label">
            Locked
          </label>
          <input type="checkbox" id="isLocked" />
        </div>
      </form>
      <form action="" id="files-list">
        <select size={10} style={{ fontSize: "var(--menu-font-size)" }}>
          {/* {filesList.map((file) => (
            <option key={file.fileID} value={file.fileID}>
              {`${file.fileNumber} : ${file.fileDescription} (${file.departmentCode})`}
            </option>
          ))} */}
        </select>
      </form>
      <div class="btn-files-div">
        <button className="btn-files" id="movement-add">
          Add
        </button>
        <button className="btn-files" id="movement-edit">
          Edit
        </button>
        <button className="btn-files" id="movement-track">
          Track
        </button>
        <button className="btn-files warning" id="movement-delete">
          Delete
        </button>
      </div>
    </div>
  );
}
