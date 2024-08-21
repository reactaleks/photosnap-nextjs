'use client'
import { useEffect, useState } from "react"
import NavMenuIcon from "./images/Nav_Menu_Icon_Component"
import NavMenuItems from "./Nav_Menu_Items_Component"
export default function NavMenu() {
    const [navMenuOpen, setNavMenuOpen] = useState(false)

    useEffect(() => {
        setNavMenuOpen(false);
    }, [])

    const openNavMenu = () => {
        setNavMenuOpen(!navMenuOpen)
    }

    return (
        <div className="md:flex">
            <NavMenuIcon navMenuOpen={navMenuOpen} openNavMenu={openNavMenu}/>
            <NavMenuItems  navMenuOpen={navMenuOpen}/>
        </div>
    )
}