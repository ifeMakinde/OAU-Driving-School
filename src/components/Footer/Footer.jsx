import React from "react";
import FooterEL from "../Footer/FooterEl";
import Logo from "@/components/Logo";

function Footer() {
  return (
    <section className="w-full">
      <div className="py-25 m-auto max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2">
        <Logo />
        <FooterEL />
      </div>
    </section>
  );
}

export default Footer;
