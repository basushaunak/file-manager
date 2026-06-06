import "./InfoPanel.css";
export default function InfoPanel() {
  const userName = "Shaunak Basu";
  const department = "Finance";
  return (
    <>
      <p>
        User: {userName}, Department: {department}
      </p>
    </>
  );
}
