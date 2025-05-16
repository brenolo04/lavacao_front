import { Navbar } from "flowbite-react";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Avatar from "./Avatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header>
      <Navbar fluid rounded>
          <img src="../../../public/logo.png" width="50px" onClick={() => setIsOpen(true)}/>
          <Sidebar isOpen={isOpen} handleClose={handleClose}></Sidebar>
          <Avatar/>
      </Navbar>
    </header>
  );
}
