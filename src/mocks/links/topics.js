import { v4 as uuid } from "uuid";

export const topics = [
    {
        id: uuid(),
        title: "Creaturas",
        href: "/wiki/creatures",
        imageUrl: "/assets/images/creatures/bees/basic-bee.webp"
    },
    {
        id: uuid(),
        title: "Items",
        href: "/wiki/items",
        imageUrl: "/assets/images/items/tools/tide-pooper.webp"
    },
    {
        id: uuid(),
        title: "Osos",
        href: "/wiki/bears",
        imageUrl: "/assets/images/bears/black-bear.webp"
    },
    {
        id: uuid(),
        title: "Tiendas",
        href: "/wiki/locations?classification=tiendas",
        imageUrl: "/assets/images/locations/shops/noob-shop.webp"
    },
    {
        id: uuid(),
        title: "Badges",
        href: "/wiki/dataset?classification=insignias",
        imageUrl: "/assets/images/dataset/badges/honey-grandmaster.webp"
    },
    {
        id: uuid(),
        title: "Códigos",
        href: "/wiki/dataset?classification=códigos",
        imageUrl: "/assets/images/dataset/codes/codes.webp"
    },
    {
        id: uuid(),
        title: "Campos",
        href: "/wiki/locations?classification=campos",
        imageUrl: "/assets/images/locations/fields/pumpkin.webp"
    },
    {
        id: uuid(),
        title: "Mobs",
        href: "/wiki/creatures?classification=mobs",
        imageUrl: "/assets/images/creatures/mobs/werewolf.webp"
    },
    {
        id: uuid(),
        title: "Amuletos",
        href: "/wiki/items?classification=amuletos",
        imageUrl: "/assets/images/items/amulets/supreme-amulet.webp"
    },
    {
        id: uuid(),
        title: "Mecánicas",
        href: "/wiki/dataset?classification=mecánicas",
        imageUrl: "/assets/images/dataset/mechanics/system.webp"
    }
];
