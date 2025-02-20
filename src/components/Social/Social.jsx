import { social } from "../../mocks/links/social";

import Link from "../../elements/Link";

export function Social() {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-4">
            {social.map((link) => (
                <div key={link.id}>
                    <div className="hidden md:block">
                        <Link {...link}>{link.title}</Link>
                    </div>
                    <div className="block md:hidden">
                        <Link {...link}>{link.icon ?? link.title}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Social;
