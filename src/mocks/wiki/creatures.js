import { v4 as uuid } from "uuid";

export const creatures = [
    {
        classification: "Jefes",
        mobs: [
            {
                id: uuid(),
                name: "Coconut Crab",
                href: "?mob=coconut-crab",
                description: "El Coconut Crab es un jefe de nivel 12 que defiende el campo de Coconut. Tiene 250.000 puntos de salud y se mueve por la pared trasera del sitio.",
                imageUrl: "/assets/images/creatures/mobs/coconut-crab.webp"
            },
            {
                id: uuid(),
                name: "King Beetle",
                href: "?mob=king-beetle",
                description:
                    "El King Beetle es un jefe de nivel 7 que reside en su guarida. La entrada a su guarida está en la pared entre el campo de flores azules y el campo de tréboles, sobre la flor azul más cercana al cuartel azul. Tiene 2500 puntos de salud y causa 40 puntos de daño al jugador por golpe si el jugador no tiene defensa.",
                imageUrl: "/assets/images/creatures/mobs/king-beetle.webp"
            },
            {
                id: uuid(),
                name: "Stick Bug",
                href: "?mob=stick-bug",
                description:
                    "Stick Bug es un NPC que se encuentra en el hongo más alto del campo de mushroom. Los jugadores necesitarán un traductor para hablar con Stick Bug, donde luego podrán pedirle que comience el desafío de Stick Bug.",
                imageUrl: "/assets/images/creatures/mobs/stick-bug.webp"
            },
            {
                id: uuid(),
                name: "Tunnel Bear",
                href: "?mob=tunnel-bear",
                description: "Tunnel Bear es un jefe hostil de nivel 9. El aparece en el túnel blanco dentro del convertidor instantáneo, cerca del oso científico.",
                imageUrl: "/assets/images/creatures/mobs/tunnel-bear.webp"
            },
            {
                id: uuid(),
                name: "Mondo Chick",
                href: "?mob=mondo-chick",
                description: "El Mondo Chick es un jefe de nivel 8 ubicado en el campo Mountain Top. Reaparece cada hora a un tiempo exacto.",
                imageUrl: "/assets/images/creatures/mobs/mondo-chick.webp"
            }
        ]
    },
    {
        classification: "Mini-Jefes",
        mobs: [
            {
                id: uuid(),
                name: "Commando Chick",
                href: "?mob=commando-chick",
                description:
                    "Un pollo militarizado que lanza granadas y bloquea ataques, es un minijefe que aparece en su escondite. Su escondite se encuentra a la izquierda de Brown Bear y Wealth Clock. Para cortar las enredaderas, se deben equipar las Tijeras. Una vez que se cortan las enredaderas, nunca volverán a crecer.",
                imageUrl: "/assets/images/creatures/mobs/commando-chick.webp"
            },
            {
                id: uuid(),
                name: "Stump Snail",
                href: "?mob=stump-snail",
                description:
                    "El caracol de tocón es un monstruo de nivel 6 que ocupa el campo de tocón. Con 30.000.000 de salud, se mueve sin hacer nada por la circunferencia del campo, sin representar una amenaza directa, pero inflige 30 puntos de daño al entrar en contacto.",
                imageUrl: "/assets/images/creatures/mobs/stump-snail.webp"
            },
            {
                id: uuid(),
                name: "Snow Bear",
                href: "?mob=snow-bear",
                description:
                    "El Snowbear es un minijefe que puede ser invocado cada 90 minutos en el Snowbear Summoner después de completar la misión Beesmas de Panda Bear. Cuando se lo invoca, aparece en el Spider Field y los jugadores tienen 60 segundos (1 minuto) para derrotarlo.",
                imageUrl: "/assets/images/creatures/mobs/snow-bear.webp"
            },
            {
                id: uuid(),
                name: "Wild Windy Bee",
                href: "?mob=wild-windy-bee",
                description:
                    "La Abeja Ventosa Salvaje es un minijefe que usualmente aparece en el campo de Dandelion, el campo Pineapple, el campo Pumpkin, el campo Mountain Top y el campo de Coconut.",
                imageUrl: "/assets/images/creatures/mobs/wild-windy-bee.webp"
            },
            {
                id: uuid(),
                name: "Rogue Vicious Bee",
                href: "?mob=rogue-vicious-bee",
                description:
                    "Rogue Vicious Bee es un minijefe que puede aparecer en el campo de Clover, Spider, Cactus, Rose, Mountain Top o Pepper. Rogue Vicious Bee tiene una probabilidad mucho mayor de aparecer durante la noche y está garantizado que aparecerá si se usa una campana nocturna.",
                imageUrl: "/assets/images/creatures/mobs/rogue-vicious-bee.webp"
            }
        ]
    },
    {
        classification: "Mobs",
        mobs: [
            {
                id: uuid(),
                name: "Ladybug",
                href: "?mob=ladybug",
                description: "Un pequeño insecto que aparece en varios campos y puede atacar al jugador si se acerca demasiado.",
                imageUrl: "/assets/images/creatures/mobs/ladybug.webp"
            },
            {
                id: uuid(),
                name: "Rhino Beetle",
                href: "?mob=rhino-beetle",
                description: "Un escarabajo agresivo que defiende su territorio y ataca a los jugadores que ingresan en su área.",
                imageUrl: "/assets/images/creatures/mobs/rhino-beetle.webp"
            },
            {
                id: uuid(),
                name: "Werewolf",
                href: "?mob=werewolf",
                description: "Un hombre lobo que aparece en el campo de la calabaza, atacando a los jugadores que se acercan.",
                imageUrl: "/assets/images/creatures/mobs/werewolf.webp"
            },
            {
                id: uuid(),
                name: "Mantis",
                href: "?mob=mantis",
                description: "Un insecto depredador que aparece en el campo de la mantis, ofreciendo un desafío considerable.",
                imageUrl: "/assets/images/creatures/mobs/mantis.webp"
            },
            {
                id: uuid(),
                name: "Scorpion",
                href: "?mob=scorpion",
                description: "Un escorpión venenoso que aparece en el campo desértico y puede atacar al jugador.",
                imageUrl: "/assets/images/creatures/mobs/scorpion.webp"
            },
            {
                id: uuid(),
                name: "Spider",
                href: "?mob=spider",
                description: "Una araña que aparece en el campo de la araña, ofreciendo desafíos y recompensas únicas.",
                imageUrl: "/assets/images/creatures/mobs/spider.webp"
            }
        ]
    },
    {
        classification: "Abejas Comunes",
        mobs: [
            {
                id: uuid(),
                name: "Basic Bee",
                href: "?mob=basic-bee",
                description: "Una abeja ordinaria que no posee habilidades especiales, pero es confiable en la recolección de polen.",
                imageUrl: "/assets/images/creatures/bees/basic-bee.webp"
            }
        ]
    },
    {
        classification: "Abejas Raras",
        mobs: [
            {
                id: uuid(),
                name: "Bomber Bee",
                href: "?mob=bomber-bee",
                description: "Una abeja astuta que crea bombas que recogen polen de todas las flores cercanas.",
                imageUrl: "/assets/images/creatures/bees/bomber-bee.webp"
            },
            {
                id: uuid(),
                name: "Brave Bee",
                href: "?mob=brave-bee",
                description: "Una abeja leal que hará todo lo posible para proteger a su dueño.",
                imageUrl: "/assets/images/creatures/bees/brave-bee.webp"
            },
            {
                id: uuid(),
                name: "Bumble Bee",
                href: "?mob=bumble-bee",
                description: "Una abeja tranquila que se mueve un poco lento, pero trabaja más y por más tiempo que las demás.",
                imageUrl: "/assets/images/creatures/bees/bumble-bee.webp"
            },
            {
                id: uuid(),
                name: "Cool Bee",
                href: "?mob=cool-bee",
                description: "Una abeja sarcástica que es un poco mejor que las demás. A veces aumenta el polen de flores azules.",
                imageUrl: "/assets/images/creatures/bees/cool-bee.webp"
            },
            {
                id: uuid(),
                name: "Hasty Bee",
                href: "?mob=hasty-bee",
                description: "Una abeja rápida que siempre se desplaza rápidamente. A veces incluso te hace moverte más rápido.",
                imageUrl: "/assets/images/creatures/bees/hasty-bee.webp"
            },
            {
                id: uuid(),
                name: "Looker Bee",
                href: "?mob=looker-bee",
                description: "Esta abeja silenciosa siempre está observando y obteniendo valiosas ideas.",
                imageUrl: "/assets/images/creatures/bees/looker-bee.webp"
            },
            {
                id: uuid(),
                name: "Rad Bee",
                href: "?mob=rad-bee",
                description: "Una abeja elegante con gusto por las flores rojas. Todos quieren ser esta abeja.",
                imageUrl: "/assets/images/creatures/bees/rad-bee.webp"
            },
            {
                id: uuid(),
                name: "Rascal Bee",
                href: "?mob=rascal-bee",
                description: "Una abeja traviesa que se mueve rápido y golpea fuerte. Mantén un ojo en esta.",
                imageUrl: "/assets/images/creatures/bees/rascal-bee.webp"
            },
            {
                id: uuid(),
                name: "Stubborn Bee",
                href: "?mob=stubborn-bee",
                description: "Una abeja testaruda que no puede ser mandada. Les dice a los demás a dónde ir.",
                imageUrl: "/assets/images/creatures/bees/stubborn-bee.webp"
            }
        ]
    },
    {
        classification: "Abejas Épicas",
        mobs: [
            {
                id: uuid(),
                name: "Bubble Bee",
                href: "?mob=bubble-bee",
                description: "Una abeja que crea burbujas que recogen polen de todas las flores cercanas.",
                imageUrl: "/assets/images/creatures/bees/bubble-bee.webp"
            },
            {
                id: uuid(),
                name: "Bucko Bee",
                href: "?mob=bucko-bee",
                description: "Una abeja que prefiere las flores azules y tiene habilidades que mejoran la recolección de polen azul.",
                imageUrl: "/assets/images/creatures/bees/bucko-bee.webp"
            },
            {
                id: uuid(),
                name: "Commander Bee",
                href: "?mob=commander-bee",
                description: "Una abeja que lidera a las demás con su casco distintivo.",
                imageUrl: "/assets/images/creatures/bees/commander-bee.webp"
            },
            {
                id: uuid(),
                name: "Demo Bee",
                href: "?mob=demo-bee",
                description: "Una abeja de élite que ha trabajado su camino hasta la cima. Es experta en explosivos.",
                imageUrl: "/assets/images/creatures/bees/demo-bee.webp"
            },
            {
                id: uuid(),
                name: "Exhausted Bee",
                href: "?mob=exhausted-bee",
                description: "Esta abeja sufre de insomnio. Se mueve lentamente, pero nunca tiene que dormir.",
                imageUrl: "/assets/images/creatures/bees/exhausted-bee.webp"
            },
            {
                id: uuid(),
                name: "Fire Bee",
                href: "?mob=fire-bee",
                description: "Como huevo, esta abeja fue accidentalmente dejada en el maletero de un coche en medio del verano durante más de 3 días.",
                imageUrl: "/assets/images/creatures/bees/fire-bee.webp"
            },
            {
                id: uuid(),
                name: "Frosty Bee",
                href: "?mob=frosty-bee",
                description: "Una abeja hecha de nieve. Cobró vida mágicamente después de que alguien le pusiera un sombrero de copa.",
                imageUrl: "/assets/images/creatures/bees/frosty-bee.webp"
            },
            {
                id: uuid(),
                name: "Honey Bee",
                href: "?mob=honey-bee",
                description: "Una abeja satisfecha siempre llena con la mejor miel. Si tienes suerte, compartirá algo.",
                imageUrl: "/assets/images/creatures/bees/honey-bee.webp"
            },
            {
                id: uuid(),
                name: "Rage Bee",
                href: "?mob=rage-bee",
                description: "Una abeja muy enojada que ha sido agraviada toda su vida. Aprovecha su ira para volverse más poderosa.",
                imageUrl: "/assets/images/creatures/bees/rage-bee.webp"
            },
            {
                id: uuid(),
                name: "Riley Bee",
                href: "?mob=riley-bee",
                description: "Líder de las abejas rojas, y una larga rival de la Bucko Bee. Su naturaleza ardiente la ha elevado por encima de las demás.",
                imageUrl: "/assets/images/creatures/bees/riley-bee.webp"
            },
            {
                id: uuid(),
                name: "Shocked Bee",
                href: "?mob=shocked-bee",
                description: "Esta abeja se sorprende por todo lo que encuentra. Ha aprendido talentos especiales para sobrellevarlo.",
                imageUrl: "/assets/images/creatures/bees/shocked-bee.webp"
            }
        ]
    },
    {
        classification: "Abejas Legendarias",
        mobs: [
            {
                id: uuid(),
                name: "Baby Bee",
                href: "?mob=baby-bee",
                description: "Esta pequeña abeja aún está aprendiendo las tareas de la colmena, pero su presencia siempre trae alegría y suerte.",
                imageUrl: "/assets/images/creatures/bees/baby-bee.webp"
            },
            {
                id: uuid(),
                name: "Carpenter Bee",
                href: "?mob=carpenter-bee",
                description: "Una abeja con habilidades excepcionales en construcción, capaz de crear estructuras de madera con facilidad.",
                imageUrl: "/assets/images/creatures/bees/carpenter-bee.webp"
            },
            {
                id: uuid(),
                name: "Demon Bee",
                href: "?mob=demon-bee",
                description: "Una abeja poderosa con habilidades mágicas alimentadas por pura ira.",
                imageUrl: "/assets/images/creatures/bees/demon-bee.webp"
            },
            {
                id: uuid(),
                name: "Diamond Bee",
                href: "?mob=diamond-bee",
                description: "Una abeja extremadamente rica y pomposa que posee tanto dinero como talento para justificar su actitud.",
                imageUrl: "/assets/images/creatures/bees/diamond-bee.webp"
            },
            {
                id: uuid(),
                name: "Lion Bee",
                href: "?mob=lion-bee",
                description: "Mitad león, mitad abeja. Es el rey tanto de la jungla como de la colmena.",
                imageUrl: "/assets/images/creatures/bees/lion-bee.webp"
            },
            {
                id: uuid(),
                name: "Music Bee",
                href: "?mob=music-bee",
                description: "El zumbido de esta abeja es tan hermoso que puede hacer llorar a cualquiera. Utiliza este don para motivar a los demás.",
                imageUrl: "/assets/images/creatures/bees/music-bee.webp"
            },
            {
                id: uuid(),
                name: "Ninja Bee",
                href: "?mob=ninja-bee",
                description: "Esta abeja entrenó rigurosamente durante años para convertirse en la más rápida que jamás haya existido.",
                imageUrl: "/assets/images/creatures/bees/ninja-bee.webp"
            },
            {
                id: uuid(),
                name: "Shy Bee",
                href: "?mob=shy-bee",
                description: "Esta talentosa abeja no le gusta socializar; solo quiere trabajar y ser dejada en paz.",
                imageUrl: "/assets/images/creatures/bees/shy-bee.webp"
            }
        ]
    },
    {
        classification: "Abejas Míticas",
        mobs: [
            {
                id: uuid(),
                name: "Buoyant Bee",
                href: "?mob=buoyant-bee",
                description: "Esta abeja es tan ligera que puede flotar en el aire, facilitando la recolección de polen en campos elevados.",
                imageUrl: "/assets/images/creatures/bees/buoyant-bee.webp"
            },
            {
                id: uuid(),
                name: "Fuzzy Bee",
                href: "?mob=fuzzy-bee",
                description: "Una abeja peluda que ayuda en la polinización al transferir polen de una flor a otra con su esponjoso pelaje.",
                imageUrl: "/assets/images/creatures/bees/fuzzy-bee.webp"
            },
            {
                id: uuid(),
                name: "Precise Bee",
                href: "?mob=precise-bee",
                description: "Esta abeja tiene una puntería impecable, asegurando que cada gota de polen se recoja con precisión.",
                imageUrl: "/assets/images/creatures/bees/precise-bee.webp"
            },
            {
                id: uuid(),
                name: "Spicy Bee",
                href: "?mob=spicy-bee",
                description: "Una abeja con un temperamento ardiente que añade un toque picante a la miel que produce.",
                imageUrl: "/assets/images/creatures/bees/spicy-bee.webp"
            },
            {
                id: uuid(),
                name: "Tadpole Bee",
                href: "?mob=tadpole-bee",
                description: "Una pequeña abeja anfibia que sueña con convertirse en una rana cuando crezca.",
                imageUrl: "/assets/images/creatures/bees/tadpole-bee.webp"
            },
            {
                id: uuid(),
                name: "Vector Bee",
                href: "?mob=vector-bee",
                description: "Una abeja matemática que utiliza complejas ecuaciones para optimizar la recolección de polen.",
                imageUrl: "/assets/images/creatures/bees/vector-bee.webp"
            }
        ]
    },
    {
        classification: "Abejas de Evento",
        mobs: [
            {
                id: uuid(),
                name: "Bear Bee",
                href: "?mob=bear-bee",
                description: "Una abeja amigable que transforma al jugador en diferentes osos, ofreciendo diversas ventajas y habilidades especiales.",
                imageUrl: "/assets/images/creatures/bees/bear-bee.webp"
            },
            {
                id: uuid(),
                name: "Cobalt Bee",
                href: "?mob=cobalt-bee",
                description: "Un superhéroe defensor de todo lo azul. Junto con la Crimson Bee, trabaja para unir a las abejas de todos los colores.",
                imageUrl: "/assets/images/creatures/bees/cobalt-bee.webp"
            },
            {
                id: uuid(),
                name: "Crimson Bee",
                href: "?mob=crimson-bee",
                description: "Un superhéroe defensor de todo lo rojo. Junto con la Cobalt Bee, trabaja para unir a las abejas de todos los colores.",
                imageUrl: "/assets/images/creatures/bees/crimson-bee.webp"
            },
            {
                id: uuid(),
                name: "Digital Bee",
                href: "?mob=digital-bee",
                description: "Una abeja con habilidades tecnológicas avanzadas, capaz de procesar información y optimizar la recolección de polen.",
                imageUrl: "/assets/images/creatures/bees/digital-bee.webp"
            },
            {
                id: uuid(),
                name: "Gummy Bee",
                href: "?mob=gummy-bee",
                description: "Una abeja que produce miel gomosa, ofreciendo beneficios únicos en la recolección y conversión de polen.",
                imageUrl: "/assets/images/creatures/bees/gummy-bee.webp"
            }
        ]
    }
];
