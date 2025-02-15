import { v4 as uuid } from "uuid";

export const bears = [
    {
        classification: "Osos NPC",
        bears: [
            {
                id: uuid(),
                name: "Black Bear",
                href: "?bear=black-bear",
                description: "Ubicado cerca del punto de inicio, ofrece misiones centradas en la recolección de polen de diferentes campos.",
                imageUrl: "/assets/images/bears/black-bear.webp"
            },
            {
                id: uuid(),
                name: "Mother Bear",
                href: "?bear=mother-bear",
                description: "Situada detrás del Campo de Girasoles, proporciona misiones orientadas al cuidado y mejora de tus abejas.",
                imageUrl: "/assets/images/bears/mother-bear.webp"
            },
            {
                id: uuid(),
                name: "Brown Bear",
                href: "?bear=brown-bear",
                description: "Se encuentra más allá del Campo de Tréboles, ofrece misiones repetibles que otorgan jaleas reales.",
                imageUrl: "/assets/images/bears/brown-bear.webp"
            },
            {
                id: uuid(),
                name: "Panda Bear",
                href: "?bear=panda-bear",
                description: "Ubicado en el Campo de Bambú, sus misiones se centran en derrotar enemigos y mejorar las habilidades de combate.",
                imageUrl: "/assets/images/bears/panda-bear.webp"
            },
            {
                id: uuid(),
                name: "Science Bear",
                href: "?bear=science-bear",
                description: "Situado en una colina cerca del Campo de Bambú, ofrece misiones que incrementan tus habilidades científicas y recompensas tecnológicas.",
                imageUrl: "/assets/images/bears/science-bear.webp"
            },
            {
                id: uuid(),
                name: "Dapper Bear",
                href: "?bear=dapper-bear",
                description: "Se encuentra en su tienda cerca del Campo de Tocón, proporciona misiones relacionadas con la colección de néctar y el uso de planteras.",
                imageUrl: "/assets/images/bears/dapper-bear.webp"
            },
            {
                id: uuid(),
                name: "Polar Bear",
                href: "?bear=polar-bear",
                description: "Ubicado más allá del Campo de Piñas, sus misiones están orientadas a la cocina y preparación de recetas que benefician a tus abejas.",
                imageUrl: "/assets/images/bears/polar-bear.webp"
            },
            {
                id: uuid(),
                name: "Spirit Bear",
                href: "?bear=spirit-bear",
                description: "Situada cerca del Campo de Coco, ofrece misiones avanzadas con recompensas valiosas y desafíos complejos.",
                imageUrl: "/assets/images/bears/spirit-bear.webp"
            },
            {
                id: uuid(),
                name: "Robo Bear",
                href: "?bear=robo-bear",
                description: "Localizado entre el HQ Rojo y el dispensador de Jalea Real, es el anfitrión del Desafío Robo y ofrece misiones tecnológicas.",
                imageUrl: "/assets/images/bears/robo-bear.webp"
            }
        ]
    },
    {
        classification: "Osos Viajeros",
        bears: [
            {
                id: uuid(),
                name: "Sun Bear",
                href: "?bear=sun-bear",
                description: "Aparece durante eventos especiales, ubicado frente al Campo de Girasoles, ofrece misiones temporales con recompensas únicas.",
                imageUrl: "/assets/images/bears/sun-bear.webp"
            },
            {
                id: uuid(),
                name: "Gummy Bear",
                href: "?bear=gummy-bear",
                description: "Se encuentra en su guarida secreta, asociado con eventos que otorgan recompensas relacionadas con goma y pegamento.",
                imageUrl: "/assets/images/bears/gummy-bear.webp"
            },
            {
                id: uuid(),
                name: "Bee Bear",
                href: "?bear=bee-bear",
                description: "Aparece durante el evento de Beesmas, ubicado frente al Campo de Diente de León, ofrece misiones festivas con recompensas temáticas.",
                imageUrl: "/assets/images/bears/bee-bear.webp"
            }
        ]
    },
    {
        classification: "Osos de Tienda",
        bears: [
            {
                id: uuid(),
                name: "Noob Bear",
                href: "?bear=noob-bear",
                description: "Se encuentra dentro de la Tienda Noob, ofrece artículos básicos para apicultores principiantes.",
                imageUrl: "/assets/images/bears/noob-bear.webp"
            },
            {
                id: uuid(),
                name: "Pro Bear",
                href: "?bear=pro-bear",
                description: "Ubicado en la Tienda Pro, proporciona equipamiento avanzado para jugadores experimentados.",
                imageUrl: "/assets/images/bears/pro-bear.webp"
            },
            {
                id: uuid(),
                name: "Top Bear",
                href: "?bear=top-bear",
                description: "Situado en la Tienda de la Cima de la Montaña, ofrece los artículos más exclusivos y poderosos del juego.",
                imageUrl: "/assets/images/bears/top-bear.webp"
            }
        ]
    }
];
