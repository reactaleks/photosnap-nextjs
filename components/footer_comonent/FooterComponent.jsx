import Logo from "../shared_ui_components/shared_images/Logo_Component";
import FooterNav from "./footer_ui_components.jsx/footer_nav_component";
import SocialIcons from "./footer_ui_components.jsx/footer_socials_component";
import LinkMore from "../shared_ui_components/Link_MoreComponent";

export default function Footer() {
  return (
    <footer className="w-full h-[539px] bg-black flex flex-col items-center justify-evenly text-white">
      <Logo darkMode={true} />
      <SocialIcons/>
      <FooterNav />
      <LinkMore linkText={'get an invite'}/>

      <div className="opacity-50">Copyright 2019. All Rights Reserved</div>
    </footer>
  );
}
