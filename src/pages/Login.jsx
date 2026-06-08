import "./Login.css";
export default function Login() {
  return (
    <div className="login-dialogue">
      <div className="login-details">
        <label htmlFor="user-name">User Name:</label>
        <input type="text" id="user-name" />
        <label htmlFor="user-password">Password :</label>
        <input type="password" id="password" />
      </div>
      <div class="btn-login-div">
        <button className="btn-login">Login</button>
        <button className="btn-login">Cancel</button>{" "}
      </div>
    </div>
  );
}
