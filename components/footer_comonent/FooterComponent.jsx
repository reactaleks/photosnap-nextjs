import Logo from "../shared_ui_components/shared_images/Logo_Component";
import FooterNav from "./footer_ui_components.jsx/footer_nav_component";
import SocialIcons from "./footer_ui_components.jsx/footer_socials_component";
import LinkMore from "../shared_ui_components/Link_MoreComponent";

export default function Footer() {
  return (
    <footer className="w-full h-[539px] md:h-[284px] bg-black grid grid-rows-12 grid-cols-12  text-white">
      <div className="flex items-center justify-center col-span-6 col-start-4 row-start-2 md:justify-start md:row-start-4 md:col-span-3 md:col-start-2">
        <Logo darkMode={true} />
      </div>
      <div className="flex items-center justify-center col-span-6 col-start-4 row-start-3 md:justify-start md:col-start-2 md:row-start-10 md:col-span-3">
        <SocialIcons />
      </div>
      <div className="flex items-center justify-center col-span-6 col-start-4 row-start-6 md:col-start-2 md:col-span-5 ">
        <FooterNav />
      </div>

      <div className="flex items-center justify-center col-span-6 col-start-4 row-start-10 md:row-start-4 md:col-start-9 md:col-span-3">
        <LinkMore linkText={"get an invite"} />
      </div>

      <div className="flex items-center justify-center w-full col-span-8 col-start-3 opacity-50 row-start-11 md:col-start-7 md:col-span-5 md:row-start-10 md:justify-end">
        Copyright 2019. All Rights Reserved
      </div>
    </footer>
  );
}
