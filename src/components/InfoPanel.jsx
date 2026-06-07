import "./InfoPanel.css";
export default function InfoPanel() {
  const user = [0, "Shaunak Basu"];
  const department = [1, "Finance"];
  return (
    <>
      <p>
        User: {user[1]}, Department: {department[1]}
      </p>
    </>
  );
}
