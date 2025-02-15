import { v4 as uuid } from "uuid";

export const dataset = [
    {
        classification: "Insignias",
        items: [
            {
                id: uuid(),
                name: "Honey Cadet",
                href: "?badge=honey-cadet",
                description: "Produce 1 millón de miel para obtener esta insignia. Otorga un aumento permanente de x1.3 en la tasa de conversión y 5 tickets.",
                imageUrl: "/assets/images/dataset/badges/honey-cadet.webp"
            },
            {
                id: uuid(),
                name: "Honey Hotshot",
                href: "?badge=honey-hotshot",
                description: "Produce 10 millones de miel para obtener esta insignia. Otorga un aumento permanente de x1.6 en la tasa de conversión y 10 tickets.",
                imageUrl: "/assets/images/dataset/badges/honey-hotshot.webp"
            },
            {
                id: uuid(),
                name: "Honey Ace",
                href: "?badge=honey-ace",
                description: "Produce 100 millones de miel para obtener esta insignia. Otorga un aumento permanente de x1.9 en la tasa de conversión y 15 tickets.",
                imageUrl: "/assets/images/dataset/badges/honey-ace.webp"
            },
            {
                id: uuid(),
                name: "Honey Master",
                href: "?badge=honey-master",
                description: "Produce 1 billón de miel para obtener esta insignia. Otorga un aumento permanente de x2.2 en la tasa de conversión y 25 tickets.",
                imageUrl: "/assets/images/dataset/badges/honey-master.webp"
            },
            {
                id: uuid(),
                name: "Honey Grandmaster",
                href: "?badge=honey-grandmaster",
                description: "Produce 20 billones de miel para obtener esta insignia. Otorga un aumento permanente de x2.5 en la tasa de conversión y 40 tickets.",
                imageUrl: "/assets/images/dataset/badges/honey-grandmaster.webp"
            }
        ]
    },
    {
        classification: "Códigos",
        items: [
            {
                id: uuid(),
                name: "BUZZ",
                href: "?code=buzz",
                description: "Redime este código para obtener 500 miel."
            },
            {
                id: uuid(),
                name: "38217",
                href: "?code=38217",
                description: "Redime este código para obtener 5 tickets."
            },
            {
                id: uuid(),
                name: "BOPMASTER",
                href: "?code=bopmaster",
                description: "Redime este código para obtener 5 tickets."
            },
            {
                id: uuid(),
                name: "COG",
                href: "?code=cog",
                description: "Redime este código para obtener 5 tickets."
            },
            {
                id: uuid(),
                name: "CONNOISSEUR",
                href: "?code=connoisseur",
                description: "Redime este código para obtener 5 tickets."
            }
        ]
    },
    {
        classification: "Mecánicas",
        items: [
            {
                id: uuid(),
                name: "Pollen Collection",
                href: "?mechanic=pollen-collection",
                description: "Los jugadores utilizan sus abejas y herramientas para recolectar polen de diversos campos, que luego se convierte en miel.",
                imageUrl: "/assets/images/dataset/mechanics/pollen-collection.webp"
            },
            {
                id: uuid(),
                name: "Quests",
                href: "?mechanic=quests",
                description: "NPCs como los osos ofrecen misiones que, al completarse, otorgan recompensas y ayudan a progresar en el juego.",
                imageUrl: "/assets/images/dataset/mechanics/quests.webp"
            },
            {
                id: uuid(),
                name: "Badges",
                href: "?mechanic=badges",
                description: "Logros que los jugadores pueden obtener al cumplir ciertos criterios, proporcionando mejoras y recompensas.",
                imageUrl: "/assets/images/dataset/mechanics/badges.webp"
            },
            {
                id: uuid(),
                name: "Promo Codes",
                href: "?mechanic=promo-codes",
                description: "Códigos que los jugadores pueden redimir para obtener recompensas como miel, tickets y potenciadores.",
                imageUrl: "/assets/images/dataset/mechanics/promo-codes.webp"
            },
            {
                id: uuid(),
                name: "Seasonal Events",
                href: "?mechanic=seasonal-events",
                description: "Eventos especiales que ocurren durante períodos festivos, ofreciendo misiones y recompensas únicas.",
                imageUrl: "/assets/images/dataset/mechanics/seasonal-events.webp"
            }
        ]
    }
];
