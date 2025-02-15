import { v4 as uuid } from "uuid";

export const locations = [
    {
        classification: "Tiendas",
        locations: [
            {
                id: uuid(),
                name: "Basic Egg Shop",
                href: "?location=basic-egg-shop",
                description: "Tienda donde los jugadores pueden comprar huevos básicos para obtener nuevas abejas.",
                imageUrl: "/assets/images/locations/shops/basic-egg-shop.webp"
            },
            {
                id: uuid(),
                name: "Dapper Bear Shop",
                href: "?location=dapper-bear-shop",
                description: "Tienda especializada en artículos avanzados para apicultores experimentados.",
                imageUrl: "/assets/images/locations/shops/dapper-bear-shop.webp"
            },
            {
                id: uuid(),
                name: "Gummy Bears Lair",
                href: "?location=gummy-bears-lair",
                description: "Ubicación secreta donde se pueden adquirir objetos relacionados con el Gummy Bear.",
                imageUrl: "/assets/images/locations/shops/gummy-bears-lair.webp"
            }
        ]
    },
    {
        classification: "Campos",
        locations: [
            {
                id: uuid(),
                name: "Sunflower Field",
                href: "?location=sunflower-field",
                description: "Campo de flores de girasol, ideal para recolectar polen amarillo.",
                imageUrl: "/assets/images/locations/fields/sunflower-field.webp"
            },
            {
                id: uuid(),
                name: "Mushroom Field",
                href: "?location=mushroom-field",
                description: "Campo de setas que proporciona polen rojo.",
                imageUrl: "/assets/images/locations/fields/mushroom-field.webp"
            },
            {
                id: uuid(),
                name: "Blue Flower Field",
                href: "?location=blue-flower-field",
                description: "Campo de flores azules, fuente principal de polen azul.",
                imageUrl: "/assets/images/locations/fields/blue-flower-field.webp"
            },
            {
                id: uuid(),
                name: "Clover Field",
                href: "?location=clover-field",
                description: "Campo de tréboles que ofrece una mezcla equilibrada de polen.",
                imageUrl: "/assets/images/locations/fields/clover-field.webp"
            },
            {
                id: uuid(),
                name: "Bamboo Field",
                href: "?location=bamboo-field",
                description: "Campo de bambú con alta concentración de polen azul.",
                imageUrl: "/assets/images/locations/fields/bamboo-field.webp"
            },
            {
                id: uuid(),
                name: "Strawberry Field",
                href: "?location=strawberry-field",
                description: "Campo de fresas que proporciona polen rojo.",
                imageUrl: "/assets/images/locations/fields/strawberry-field.webp"
            }
        ]
    },
    {
        classification: "Zonas",
        locations: [
            {
                id: uuid(),
                name: "Zone 5 Bees",
                href: "?location=zone-5-bees",
                description: "Área que requiere al menos 5 tipos de abejas para acceder, contiene campos y tiendas básicas.",
                imageUrl: "/assets/images/locations/zones/zone-5-bees.webp"
            },
            {
                id: uuid(),
                name: "Zone 10 Bees",
                href: "?location=zone-10-bees",
                description: "Área que requiere al menos 10 tipos de abejas, ofrece acceso a campos de nivel medio y desafíos adicionales.",
                imageUrl: "/assets/images/locations/zones/zone-10-bees.webp"
            },
            {
                id: uuid(),
                name: "Zone 15 Bees",
                href: "?location=zone-15-bees",
                description: "Área que requiere 15 tipos de abejas, incluye campos avanzados y tiendas especializadas.",
                imageUrl: "/assets/images/locations/zones/zone-15-bees.webp"
            }
        ]
    },
    {
        classification: "Otras Ubicaciones",
        locations: [
            {
                id: uuid(),
                name: "Ant Field",
                href: "?location=ant-field",
                description: "Campo donde se lleva a cabo el desafío de las hormigas, enfrentando oleadas de enemigos para obtener recompensas.",
                imageUrl: "/assets/images/locations/other/ant-field.webp"
            },
            {
                id: uuid(),
                name: "Wind Shrine",
                href: "?location=wind-shrine",
                description: "Santuario donde los jugadores pueden ofrecer elementos para recibir bendiciones y mejoras temporales.",
                imageUrl: "/assets/images/locations/other/wind-shrine.webp"
            },
            {
                id: uuid(),
                name: "Coconut Cave",
                href: "?location=coconut-cave",
                description: "Cueva que alberga al Coconut Crab, un jefe que los jugadores pueden desafiar para obtener recompensas.",
                imageUrl: "/assets/images/locations/other/coconut-cave.webp"
            }
        ]
    }
];
