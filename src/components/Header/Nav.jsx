import { nav } from "../../mocks/links/nav";

import Link from "../../elements/Link";

export function Nav() {
    return (
        <nav className="bg-honey md:bg-honey-amber p-4 rounded-lg h-full">
            <ul className="flex flex-wrap gap-4 flex-col justify-center h-full md:h-auto md:flex-row md:justify-start">
                {nav.map((link) => {
                    return (
                        <li key={link.id}>
                            <Link {...link} isFullScreen>
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Nav;
