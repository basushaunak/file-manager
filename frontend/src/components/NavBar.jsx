import "./NavBar.css";
import { getImageUrl } from "../utilities/Utilities";
export default function NavBar() {
  let isSuperUser = true;
  const menuArray = [
    {
      menuItem: "IMG",
      link: "../assets/logo.svg",
      visible: true,
      subMenu: false,
    },
    { menuItem: "Login", link: "#", visible: true, subMenu: false },
    { menuItem: "Cheques", link: "#", visible: true, subMenu: false },
    { menuItem: "File Movement", link: "#", visible: true, subMenu: false },
    { menuItem: "Reports", link: "#", visible: true, subMenu: false },
    {
      menuItem: "Masters",
      link: "#",
      visible: true,
      subMenu: [
        { menuItem: "Files", link: "#", visible: true, subMenu: false },
        { menuItem: "Schemes", link: "#", visible: true, subMenu: false },
        {
          menuItem: "Departments",
          link: "#",
          visible: isSuperUser,
          subMenu: false,
        },
        { menuItem: "Users", link: "#", visible: true, subMenu: false },
        {
          menuItem: "Change Password",
          link: "#",
          visible: isSuperUser,
          subMenu: false,
        },
      ],
    },
    { menuItem: "About", link: "#", visible: true, subMenu: false },
  ];
  return (
    <div className="nav-bar">
      <ul className="nav-bar-list">
        {menuArray.map((item) => (
          <li key={item.menuItem.toLowerCase()}>
            {/* 1. Ternary Operator & 2. Strict Equality Check (===) */}
            {item.menuItem === "IMG" ? (
              <img src={getImageUrl(item.link)} className="logo" alt="Logo" />
            ) : (
              <>
                <a href={item.link}>{item.menuItem}</a>

                {item.subMenu && (
                  <ul className="sub-menu-list">
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.menuItem.toLowerCase()}>
                        <a href={subItem.link}>{subItem.menuItem}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
