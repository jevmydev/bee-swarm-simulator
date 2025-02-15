import Nav from "./Nav";
import Link from "../../elements/Link";
import Social from "../Social/Social";

export function Header() {
    return (
        <header className="bg-honey relative shadow-xl">
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex flex-col gap-4">
                        <img className="hidden md:block md:max-w-72 object-cover rounded-lg" src="/assets/images/portrait.webp" alt="Logo de Bee Swarm Simulator Winter" decoding="async" />
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
                <div className="pt-8">
                    <Nav />
                </div>
            </div>
        </header>
    );
}

export default Header;
