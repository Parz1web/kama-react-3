import { NavLink } from "react-router-dom";

const Navbar = () => {
  let navData = [
    {
      img: "https://www.svgrepo.com/show/255192/profile.svg",
      to: "/profile",
      text: "Profile",
    },
    {
      img: "https://www.svgrepo.com/show/29527/mail.svg",
      to: "/dialogs",
      text: "Dialogs",
    },
    {
      img: "https://www.svgrepo.com/show/287756/newspaper-news.svg",
      to: "/news",
      text: "News",
    },
    {
      img: "https://www.svgrepo.com/show/93067/music.svg",
      to: "/music",
      text: "Music",
    },
    {
      img: "https://www.svgrepo.com/show/20868/settings.svg",
      to: "/settings",
      text: "Settings",
    },
  ];
  return (
    <nav className="navbar">
      <div className="flex flex-col">
        {navData.map((elem) => {
          return (
            <NavLink
              to={elem.to}
              className={({ isActive }) => {
                const linkClasses = ["navLink"];
                if (isActive) linkClasses.push("bg-gray-300");
                return linkClasses.join(" ");
              }}
            >
              <img src={elem.img} alt="" className="w-5 mr-1" />
              <span>{elem.text}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
