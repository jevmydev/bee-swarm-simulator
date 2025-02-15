import { v4 as uuid } from "uuid";

export const wiki = [
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
        title: "Ubicaciones",
        href: "/wiki/locations",
        imageUrl: "/assets/images/locations/fields/pumpkin.webp"
    },
    {
        id: uuid(),
        title: "Osos",
        href: "/wiki/bears",
        imageUrl: "/assets/images/bears/black-bear.webp"
    },
    {
        id: uuid(),
        title: "DataSet",
        href: "/wiki/dataset",
        imageUrl: "/assets/images/dataset/mechanics/system.webp"
    }
];
