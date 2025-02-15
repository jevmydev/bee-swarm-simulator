import { social } from "../../mocks/links/social";

import Link from "../../elements/Link";

export function Social() {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-4">
            {social.map((link) => (
                <Link key={link.id} {...link}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
}

export default Social;
