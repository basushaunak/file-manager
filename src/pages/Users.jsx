import "./Users.css";

export default function Users() {
  // "userID"	INTEGER,
  // "userName"	TEXT NOT NULL,
  // "userDepartmentID"	INTEGER NOT NULL,
  // "userPassword"	TEXT NOT NULL,
  // "userComments"	TEXT NOT NULL,
  // "userIsAdmin"	INTEGER NOT NULL DEFAULT 0 CHECK("userIsAdmin" IN (0, 1)),
  // "isSuperAdmin"	INTEGER NOT NULL DEFAULT 0 CHECK("isSuperAdmin" IN (0, 1)),
  // "lastUpdate"	TEXT DEFAULT CURRENT_DATE,
  const isSuperAdmin = 1;
  return (
    <div className="users-manager">
      <form action="" className="users">
        <label htmlFor="user-name">User Name: </label>
        <input type="text" id="user-name" />
        <label htmlFor="user-password">Password: </label>
        <input type="password" id="user-password" />
        <label htmlFor="user-comments">Comments: </label>
        <input type="text" id="user-comments" />
        {isSuperAdmin ? (
          <div class="checkbox alert-input">
            <label htmlFor="user-is-admin" class="alert-input-label">
              Admin User
            </label>
            <input type="checkbox" id="user-is-admin" />
          </div>
        ) : (
          ""
        )}
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
      <div class="btn-users-div">
        <button className="btn-users">Add</button>
        <button className="btn-users">Edit</button>
        <button className="btn-users">Delete</button>
      </div>
    </div>
  );
}
