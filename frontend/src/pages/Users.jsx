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
  const isAdmin = 1;
  return (
    <div className="users-manager">
      <form action="" className="users">
        {isSuperAdmin ? (
          <>
            <label htmlFor="user-department">Department: </label>
            <input type="text" id="user-department" />
          </>
        ) : (
          ""
        )}
        <label htmlFor="user-name">User Name: </label>
        <input type="text" id="user-name" />
        <label htmlFor="user-password">Password: </label>
        <input type="password" id="user-password" />
        <label htmlFor="confirm-user-password">Confirm Password: </label>
        <input type="password" id="confirm-user-password" />
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
      </form>
      <div class="btn-users-div">
        {isAdmin || isSuperAdmin ? (
          <>
            <button className="btn-users">Add</button>
            <button className="btn-users">Edit</button>
            <button className="btn-users">Delete</button>
          </>
        ) : (
          <>
            <button className="btn-users">Save</button>
            <button className="btn-users">Cancel</button>{" "}
          </>
        )}
      </div>
    </div>
  );
}
