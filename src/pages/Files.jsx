import "./Files.css";

export default function Files() {
  // "fileID"	INTEGER,
  // "fileNumber"	TEXT NOT NULL,
  // "fileDescription"	TEXT NOT NULL,
  // "fileComments"	TEXT NOT NULL,
  // "fileOwner"	INTEGER NOT NULL,
  // "schemeID"	INTEGER NOT NULL,
  // "lastUpdate"	TEXT,
  // "userId"	INTEGER,
  const filesList = [
    {
      fileID: 1,
      fileNumber: "DE/SCH/197/2026-2027",
      fileDescription: "Blah blah blah blah, some more blah",
      departmentCode: "DE",
    },
    {
      fileID: 2,
      fileNumber: "ACCT/01/2025-26",
      fileDescription: "Blabber blabber blabber",
      departmentCode: "ACCT",
    },
    {
      fileID: 3,
      fileNumber: "GEN/CON/1/WG/25-26",
      fileDescription: "Wages for Contractual Workers",
      departmentCode: "GEN",
    },
  ];
  return (
    <div className="files-manager">
      <form action="" className="files">
        <label htmlFor="file-number">File No.: </label>
        <input type="text" id="file-number" />
        <label htmlFor="file-description">Description: </label>
        <input type="text" id="file-description" />
        <label htmlFor="file-owner">Owner Dept. : </label>
        <input type="text" id="file-owner" />
        <label htmlFor="scheme">Scheme: </label>
        <input type="text" id="scheme" />
        <label htmlFor="file-comments">Comments:</label>
        <textarea name="" id="file-comments" rows="3"></textarea>
        {/* <div class="checkbox alert-input">
          <label htmlFor="isCancelled" class="alert-input-label">
            Cancelled
          </label>
          <input type="checkbox" id="isCancelled" />
        </div> */}
      </form>
      <form action="" id="files-list">
        <select size={10} style={{ fontSize: "var(--menu-font-size)" }}>
          {filesList.map((file) => (
            <option key={file.fileID} value={file.fileID}>
              {`${file.fileNumber} : ${file.fileDescription} (${file.departmentCode})`}
            </option>
          ))}
        </select>
      </form>
      <div class="btn-files-div">
        <button className="btn-files">Add</button>
        <button className="btn-files">Edit</button>
        <button className="btn-files">Delete</button>
      </div>
    </div>
  );
}
