import "./Login.css";
export default function Login() {
  return (
    <div className="login-dialogue">
      <label htmlFor="user-name">User Name:</label>
      <input type="text" id="user-name" />
      <label htmlFor="user-password">Password :</label>
      <input type="password" id="password" />
    </div>
  );
}
