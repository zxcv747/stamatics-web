import PillNav from "./PillNav";
import logo from "../../assets/logo.svg"; // adjust if your logo is elsewhere

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Competitions", href: "/competitions" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <header>
      <PillNav
        logo={logo}
        logoAlt="Statamatics Logo"
        items={navItems}
        activeHref="/"          // later you can sync with actual route
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </header>
  );
}

export default Navbar;
