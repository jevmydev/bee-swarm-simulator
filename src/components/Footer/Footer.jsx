import Link from "../../elements/Link";
import Social from "../Social/Social";

export function Footer() {
    return (
        <footer className="bg-honey">
            <div className="max-w-screen-lg mx-auto px-4 pt-8 mt-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-title tracking-wider text-4xl">Bee Swarm Simulator</h2>
                        <Social />
                    </div>
                    <div>
                        <strong>¡Importante!</strong>
                        <p>
                            Este sitio utiliza contenido de la{" "}
                            <Link href="https://bee-swarm-simulator.fandom.com/wiki/Bee_Swarm_Simulator_Wiki" target="_blank">
                                Bee Swarm Simulator Wiki
                            </Link>
                            , disponible bajo la licencia{" "}
                            <Link href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank">
                                CC-BY-SA
                            </Link>
                            .
                        </p>
                        <p>
                            Esta página no es oficial y ha sido creada por un fan de{" "}
                            <Link title="Bee Swarm Simulator" href="https://www.roblox.com/games/1537690962/Bee-Swarm-Simulator" target="_blank">
                                Bee Swarm Simulator
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
