import "./Schemes.css";
export default function Schemes() {
  // "schemeID"	INTEGER NOT NULL UNIQUE,
  // "schemeNo"	INTEGER NOT NULL UNIQUE,
  // "schemeDetails"	TEXT NOT NULL,
  // "userID"	INTEGER NOT NULL,
  const schemesList = [
    {
      schemeID: 1,
      schemeNo: "4781",
      schemeDescription: "Own Fund",
    },
    {
      schemeID: 2,
      schemeNo: "10371",
      schemeDescription: "Pathashree Rastashree",
    },
    {
      schemeID: 3,
      schemeNo: "6741",
      schemeDescription: "Urgent repair of ZP roads",
    },
    {
      schemeID: 4,
      schemeNo: "14781",
      schemeDescription: "Booze fund",
    },
  ];
  return (
    <div className="schemes-manager">
      <form action="" className="schemes">
        <label htmlFor="scheme-no">File No.: </label>
        <input type="text" id="scheme-no" />
        <label htmlFor="scheme-details">Description: </label>
        <input type="text" id="scheme-details" />
        {/* <label htmlFor="file-owner">Owner Dept. : </label>
        <input type="text" id="file-owner" />
        <label htmlFor="scheme">Scheme: </label>
        <input type="text" id="scheme" />
        <label htmlFor="file-comments">Comments:</label>
        <textarea name="" id="file-comments" rows="3"></textarea> */}
        {/* <div class="checkbox alert-input">
          <label htmlFor="isCancelled" class="alert-input-label">
            Cancelled
          </label>
          <input type="checkbox" id="isCancelled" />
        </div> */}
      </form>
      <form action="" id="schemes-list">
        <select size={10} style={{ fontSize: "var(--menu-font-size)" }}>
          {schemesList.map((scheme) => (
            <option key={scheme.schemeID} value={scheme.schemeID}>
              {`${scheme.schemeNo} : ${scheme.schemeDescription}`}
            </option>
          ))}
        </select>
      </form>
      <div class="btn-schemes-div">
        <button className="btn-schemes">Add</button>
        <button className="btn-schemes">Edit</button>
        <button className="btn-schemes">Delete</button>
      </div>
    </div>
  );
}
