import * as React from "react";
import Button from "../atoms/Button";

const Title = () => (
  <div className="text-xl font-medium tracking-tighter leading-5 text-sky-800 capitalize max-md:mt-10">
    ONLINE REGISTRATION <br />
    <span className="font-bold text-sky-800"> SELLING YOUR VEHICLE </span>
  </div>
);

const NavItem = ({ children }) => (
  <div className="self-stretch my-auto">{children}</div>
);

const navItems = [
  "CERFA DISPOSAL",
  "HE REPORT ON ONLINE VEHICLE SALES",
  "Actualities",
];

function Navbar() {
  return (
    <div className="py-10 pr-6 pl-10 bg-white shadow-sm max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <Title />
        </div>
        <nav className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 items-center self-stretch my-auto text-lg font-semibold text-center text-black lowercase max-md:flex-wrap max-md:mt-10">
            {navItems.map((item, index) => (
              <NavItem key={index}>{item}</NavItem>
            ))}
            <Button outlined="outlined" rounded="rounded-[57px]">
              customer area
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
