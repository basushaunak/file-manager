import "./Departments.css";

export default function Departments() {
  // 	"departmentID"	INTEGER,
  // "departmentCode"	TEXT NOT NULL UNIQUE,
  // "departmentDescription"	TEXT NOT NULL,
  // "departmentComments"	TEXT,
  // "isRootDepartment"	INTEGER NOT NULL CHECK("isRootDepartment" IN (0, 1)),
  // "lastUpdate"	TEXT,
  // "userID"	INTEGER,
  const departmentList = [
    {
      departmentID: 1,
      departmentCode: "FIN",
      departmentDescription: "Finance/Accounts",
      departmentComments: "Finance / Accounts Department under FC & CAO",
    },
    {
      departmentID: 1,
      departmentCode: "FIN",
      departmentDescription: "Finance/Accounts",
      departmentComments: "Finance / Accounts Department under FC & CAO",
    },
    {
      departmentID: 2,
      departmentCode: "DE",
      departmentDescription: "District Engineer",
      departmentComments: "District Engineer's Office",
    },
    {
      departmentID: 3,
      departmentCode: "GEN",
      departmentDescription: "General Section",
      departmentComments: "General Section",
    },
    {
      departmentID: 4,
      departmentCode: "AEO",
      departmentDescription: "AEO/ ADM (ZP)",
      departmentComments: "AEO/ ADM (ZP)'s Office",
    },
  ];
  return (
    <div className="department-manager">
      <form action="" className="department">
        <label htmlFor="department-code">Department Code: </label>
        <input type="text" id="department-code" />
        <label htmlFor="department-description">Description: </label>
        <input type="text" id="department-description" />
        <label htmlFor="department-comments">Comments</label>
        <textarea name="" id="department-comments" rows="3"></textarea>
        {/* <div class="checkbox alert-input">
          <label htmlFor="isCancelled" class="alert-input-label">
            Cancelled
          </label>
          <input type="checkbox" id="isCancelled" />
        </div> */}
      </form>
      <form action="" id="department-list">
        <select size={10} style={{ fontSize: "var(--menu-font-size)" }}>
          {departmentList.map((department) => (
            <option
              key={department.departmentID}
              value={department.departmentID}
            >
              {`${department.departmentCode} : ${department.departmentDescription}`}
            </option>
          ))}
        </select>
      </form>
      <div class="btn-departments-div">
        <button className="btn-departments">Add</button>
        <button className="btn-departments">Edit</button>
        <button className="btn-departments">Delete</button>
      </div>
    </div>
  );
}
