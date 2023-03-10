
"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/home"}>Home</Link>
      <Link href={"/about/founder"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  );
};

export default Navbar;
