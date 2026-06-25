import "./Footer.css";
import InfoPanel from "./InfoPanel";
import LiveClock from "./LiveClock";

export default function Footer() {
  return (
    <div className="footer">
      <InfoPanel />
      <LiveClock />
      <p className="footer-text">Designed and Developed by Shaunak Basu</p>
    </div>
  );
}
