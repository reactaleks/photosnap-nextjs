import Logo from "../shared_ui_components/shared_images/Logo_Component"
import NavMenu from "./nav_component_ui_elements/Nav_Menu_Component"
import Link from "next/link"
export default function Navigation() {
    return (
        <nav className="w-full h-[72px] flex justify-between items-center px-6 relative">
            <Link href={'/'} aria-label="home">
            <Logo darkMode={false}/>

            </Link>
            <NavMenu/>
        </nav>
    )
}