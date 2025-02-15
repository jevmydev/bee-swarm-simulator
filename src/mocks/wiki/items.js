import { v4 as uuid } from "uuid";

export const items = [
    {
        classification: "Herramientas",
        objects: [
            {
                id: uuid(),
                name: "Honey Dipper",
                href: "?item=honey-dipper",
                description: "Una herramienta avanzada que recoge 108.89 de polen por segundo, ideal para recolectar grandes cantidades de miel.",
                imageUrl: "/assets/images/items/tools/honey-dipper.webp"
            },
            {
                id: uuid(),
                name: "Bubble Wand",
                href: "?item=bubble-wand",
                description: "Recolecta 240 de polen por segundo de flores azules y 120 de flores blancas y rojas, perfecta para campos de flores azules.",
                imageUrl: "/assets/images/items/tools/bubble-wand.webp"
            },
            {
                id: uuid(),
                name: "Scythe",
                href: "?item=scythe",
                description: "Recolecta 238 de polen por segundo de flores rojas y 119 de flores blancas y azules, ideal para campos de flores rojas.",
                imageUrl: "/assets/images/items/tools/scythe.webp"
            }
        ]
    },
    {
        classification: "Mochilas",
        objects: [
            {
                id: uuid(),
                name: "Porcelain Port-O-Hive",
                href: "?item=porcelain-port-o-hive",
                description: "Una mochila que almacena 500,000 de polen y ofrece varias bonificaciones para mejorar la recolección.",
                imageUrl: "/assets/images/items/bags/porcelain-port-o-hive.webp"
            },
            {
                id: uuid(),
                name: "Coconut Canister",
                href: "?item=coconut-canister",
                description: "Una mochila avanzada que almacena grandes cantidades de polen y proporciona bonificaciones adicionales.",
                imageUrl: "/assets/images/items/bags/coconut-canister.webp"
            }
        ]
    },
    {
        classification: "Eggs",
        objects: [
            {
                id: uuid(),
                name: "Basic Egg",
                href: "?item=basic-egg",
                description: "Un huevo común que eclosiona en una abeja básica.",
                imageUrl: "/assets/images/items/eggs/basic-egg.webp"
            }
        ]
    },
    {
        classification: "Máscaras",
        objects: [
            {
                id: uuid(),
                name: "Gummy Mask",
                href: "?item=gummy-mask",
                description: "Una máscara especial que otorga habilidades únicas relacionadas con la goma y la miel.",
                imageUrl: "/assets/images/items/mask/gummy-mask.webp"
            },
            {
                id: uuid(),
                name: "Demon Mask",
                href: "?item=demon-mask",
                description: "Una máscara que proporciona bonificaciones ofensivas, ideal para enfrentarse a enemigos difíciles.",
                imageUrl: "/assets/images/items/mask/demon-mask.webp"
            }
        ]
    },
    {
        classification: "Cinturones",
        objects: [
            {
                id: uuid(),
                name: "Honey Belt",
                href: "?item=honey-belt",
                description: "Un cinturón que incrementa la capacidad de polen y ofrece bonificaciones relacionadas con la miel.",
                imageUrl: "/assets/images/items/belts/honey-belt.webp"
            },
            {
                id: uuid(),
                name: "Petal Belt",
                href: "?item=petal-belt",
                description: "Un cinturón floral que otorga habilidades especiales y aumenta la eficiencia en la recolección de polen.",
                imageUrl: "/assets/images/items/belts/petal-belt.webp"
            }
        ]
    },
    {
        classification: "Botas",
        objects: [
            {
                id: uuid(),
                name: "Gummy Boots",
                href: "?item=gummy-boots",
                description: "Botas que dejan un rastro de goma, aumentando la recolección de polen y ofreciendo habilidades únicas.",
                imageUrl: "/assets/images/items/boots/gummy-boots.webp"
            },
            {
                id: uuid(),
                name: "Coconut Boots",
                href: "?item=coconut-boots",
                description: "Botas hechas de cáscaras de coco que incrementan la velocidad y la capacidad de polen.",
                imageUrl: "/assets/images/items/boots/coconut-boots.webp"
            }
        ]
    },
    {
        classification: "Planters",
        objects: [
            {
                id: uuid(),
                name: "Paper Planter",
                href: "?item=paper-planter",
                description: "Una maceta desechable que crece rápidamente y proporciona una pequeña cantidad de recursos.",
                imageUrl: "/assets/images/items/planters/paper-planter.webp"
            },
            {
                id: uuid(),
                name: "Plastic Planter",
                href: "?item=plastic-planter",
                description: "Una maceta reutilizable que crece a una velocidad moderada y ofrece recursos decentes.",
                imageUrl: "/assets/images/items/planters/plastic-planter.webp"
            }
        ]
    },
    {
        classification: "Sprinklers",
        objects: [
            {
                id: uuid(),
                name: "Basic Sprinkler",
                href: "?item=basic-sprinkler",
                description: "Un dispositivo que permite construir aspersores básicos para acelerar el crecimiento de las flores.",
                imageUrl: "/assets/images/items/sprinklers/basic-sprinkler.webp"
            },
            {
                id: uuid(),
                name: "The Supreme Saturator",
                href: "?item=the-supreme-saturator",
                description: "El aspersor más avanzado que riega una gran área, maximizando el crecimiento de las flores.",
                imageUrl: "/assets/images/items/sprinklers/supreme-saturator.webp"
            }
        ]
    },
    {
        classification: "Amuletos",
        objects: [
            {
                id: uuid(),
                name: "Diamond Star Amulet",
                href: "?item=diamond-star-amulet",
                description: "Un amuleto obtenido al derrotar a enemigos poderosos, que otorga bonificaciones relacionadas con la recolección de polen.",
                imageUrl: "/assets/images/items/amulets/diamond-amulet.webp"
            },
            {
                id: uuid(),
                name: "Supreme Star Amulet",
                href: "?item=supreme-star-amulet",
                description: "Un amuleto exclusivo que proporciona beneficios avanzados según las estadísticas de tus abejas.",
                imageUrl: "/assets/images/items/amulets/supreme-amulet.webp"
            }
        ]
    },
    {
        classification: "Recursos",
        objects: [
            {
                id: uuid(),
                name: "Royal Jelly",
                href: "?item=royal-jelly",
                description: "Un recurso que transforma cualquier abeja común en una rara o mejor.",
                imageUrl: "/assets/images/items/resources/royal-jelly.webp"
            },
            {
                id: uuid(),
                name: "Enzymes",
                href: "?item=enzymes",
                description: "Un material especial usado para crear objetos avanzados y mejorar la producción de miel.",
                imageUrl: "/assets/images/items/resources/enzymes.webp"
            },
            {
                id: uuid(),
                name: "Glue",
                href: "?item=glue",
                description: "Un recurso pegajoso utilizado para fabricar objetos especiales relacionados con la goma.",
                imageUrl: "/assets/images/items/resources/glue.webp"
            },
            {
                id: uuid(),
                name: "Ticket",
                href: "?item=ticket",
                description: "Un objeto universal utilizado para comprar huevos especiales, objetos, y potenciadores en la tienda.",
                imageUrl: "/assets/images/items/resources/ticket.webp"
            },
            {
                id: uuid(),
                name: "Night Bell",
                href: "?item=night-bell",
                description: "Un objeto raro que invoca de inmediato a Fireflies para iluminar el campo.",
                imageUrl: "/assets/images/items/resources/night-bell.webp"
            }
        ]
    },
    {
        classification: "Eventos",
        objects: [
            {
                id: uuid(),
                name: "Festive Bean",
                href: "?item=festive-bean",
                description: "Un objeto de evento que planta un brote con recompensas especiales, disponible solo en temporadas festivas.",
                imageUrl: "/assets/images/items/events/festive-bean.webp"
            },
            {
                id: uuid(),
                name: "Snowflake",
                href: "?item=snowflake",
                description: "Un ítem temático de invierno que proporciona un aumento temporal en la recolección de polen.",
                imageUrl: "/assets/images/items/events/snowflake.webp"
            },
            {
                id: uuid(),
                name: "Gingerbread Bear",
                href: "?item=gingerbread-bear",
                description: "Un token temático de eventos que puede ser usado para interactuar con NPCs o mejorar estadísticas.",
                imageUrl: "/assets/images/items/events/gingerbread-bear.webp"
            }
        ]
    }
];
