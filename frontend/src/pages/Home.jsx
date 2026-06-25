import "./Home.css";
import logo from "../assets/logo.svg";
export default function Home() {
  return (
    <div id="home">
      <img src={logo} className="logo"></img>
      <h1>Welcome to File & Cheque Tracker!</h1>
      <div></div>
      <section className="home-helper">
        <p className="intro">Please login to continue.</p>
        <p>
          If you don't have a login id and password, please ask your HOD to
          create one for you.
        </p>
        <p>
          This small system will allow you to track physical file movement
          across departments as well as store details of cheques issued.
        </p>
      </section>
    </div>
  );
}
