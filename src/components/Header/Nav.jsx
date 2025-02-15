import { nav } from "../../mocks/links/nav";

import Link from "../../elements/Link";

export function Nav() {
    return (
        <nav className="bg-honey-amber p-4 rounded-lg">
            <ul className="flex flex-wrap gap-4">
                {nav.map((link) => {
                    return (
                        <li key={link.id}>
                            <Link {...link}>{link.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Nav;
