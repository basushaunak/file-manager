import "./ResetPassword.css";

export default function ResetPassword() {
  return (
    <div className="reset-password-dialogue">
      <form action="" className="reset-password">
        <label htmlFor="user-current-password">Current Password: </label>
        <input type="password" id="user-current-password" />
        <label htmlFor="user-password">Password: </label>
        <input type="password" id="user-password" />
        <label htmlFor="confirm-user-password">Confirm Password: </label>
        <input type="password" id="confirm-user-password" />
      </form>
      <div class="btn-chpwd-div">
        <button className="btn-chpwd">Save</button>
        <button className="btn-chpwd">Cancel</button>{" "}
      </div>
    </div>
  );
}
