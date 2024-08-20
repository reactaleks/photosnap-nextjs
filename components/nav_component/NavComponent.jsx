import NavLogo from "./nav_component_ui_elements/images/Nav_Logo_Component"
import NavMenu from "./nav_component_ui_elements/Nav_Menu_Component"
export default function Navigation() {
    return (
        <nav className="w-full h-[72px] flex justify-between items-center px-6 relative">
            <NavLogo/>
            <NavMenu/>
        </nav>
    )
}