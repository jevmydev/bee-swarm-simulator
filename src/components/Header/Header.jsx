import { useState } from "react";

import Nav from "./Nav";
import NavResponsive from "./NavResponsive";
import Link from "../../elements/Link";
import Social from "../Social/Social";

export function Header() {
    const [navMenu, setNavMenu] = useState(false);
    const toggleNavMenu = () => setNavMenu(!navMenu);

    return (
        <header className="bg-honey relative shadow-xl">
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <div className="flex flex-col md:flex-row justify-between gap-4 pt-10 pb-4 md:p-0">
                    <div className="flex flex-col gap-4">
                        <img className="max-h-24 md:max-h-max md:max-w-72 object-cover rounded-lg" src="/assets/images/portrait.webp" alt="Logo de Bee Swarm Simulator Winter" decoding="async" />
                        <h1 className="font-title tracking-wider text-4xl">Bee Swarm Simulator</h1>
                    </div>
                    <div className="flex gap-2 flex-col justify-between">
                        <div className="flex md:justify-end">
                            <Social />
                        </div>
                        <div className="flex md:justify-end">
                            <Link title="!Juega ya!" target="_blank" href="https://www.roblox.com/games/1537690962/Bee-Swarm-Simulator" isActive>
                                !Juega ya!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`${navMenu ? "block" : "hidden md:block"} fixed z-[9999] left-0 top-0 w-screen h-screen md:pt-8 md:static md:h-auto md:w-auto`}>
                    <Nav />
                </div>
                <NavResponsive toggleNavMenu={toggleNavMenu} />
            </div>
        </header>
    );
}

export default Header;
