import { v4 as uuid } from "uuid";
import { DiscordIcon, InstagramIcon, TwitterIcon } from "../../elements/Icons";

export const social = [
    {
        id: uuid(),
        title: "Twitter",
        href: "https://x.com/OnettDev",
        target: "_blank",
        icon: <TwitterIcon />
    },
    {
        id: uuid(),
        title: "Instagram",
        href: "https://www.instagram.com/beeswarmsimulator",
        target: "_blank",
        icon: <InstagramIcon />
    },
    {
        id: uuid(),
        title: "Discord",
        href: "https://discord.com/invite/bee",
        target: "_blank",
        icon: <DiscordIcon />
    },
    {
        id: uuid(),
        title: "Merch",
        href: "https://shop.beeswarm.com/",
        target: "_blank"
    }
];
