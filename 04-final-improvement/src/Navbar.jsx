import { Can } from "./ability-context";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "invoice",
    title: "Invoice",
  },
  {
    id: "inventory",
    title: "Inventory",
  },
  {
    id: "report",
    title: "Report",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "profiles",
    title: "Profiles",
  },
];

const Navbar = () => {
  return (
    <div className="bg-slate-800 text-white py-3 px-10">
      <ul className="flex w-full justify-around">
        {navLinks.map((link) => (
          <Can key={link.id} I={"view"} this={link.id}>
            <li>{link.title}</li>
          </Can>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
