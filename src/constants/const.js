import L from "leaflet";

import { creatures } from "../mocks/wiki/creatures";
import { items } from "../mocks/wiki/items";
import { locations } from "../mocks/wiki/locations";
import { bears } from "../mocks/wiki/bears";
import { dataset } from "../mocks/wiki/dataset";

export const FIRST_ITEM = 0;

export const TOPICS_GRID_GALLERY = {
    0: "col-span-2",
    2: "col-span-2",
    5: "col-span-2",
    9: "col-span-3"
};

export const CATEGORIES = {
    creatures,
    items,
    locations,
    bears,
    dataset
};

export const CATEGORIES_ENTRY_NAME = {
    creatures: "mob",
    items: "item",
    locations: "location",
    bears: "bear",
    dataset: ["badge", "code", "mechanic"]
};

export const CATEGORIES_PROP_NAME = {
    creatures: "mobs",
    items: "objects",
    locations: "locations",
    bears: "bears",
    dataset: "items"
};

export const DEFAULT_AMOUNT_BLENDER = 1;

export const MAP_CONFIG = {
    className: "w-full h-full rounded-lg leaflet-container",
    center: [0, 0],
    minZoom: 0,
    zoom: 1,
    maxZoom: 4,
    maxBounds: [
        [-300, -300],
        [300, 300]
    ]
};

export const MAP_OVERLAY_CONFIG = {
    url: "/assets/images/locations/map/bssmap.webp",
    bounds: [
        [-100, -250],
        [100, 250]
    ]
};

export const DEFAULT_HIVE_NIVEL = 1;

export const DEFAULT_BOND_CONFIG = { treatsInventory: 0, bondFromTreats: 100, numberBees: 1 };

export const markerIcon = new L.Icon({
    iconUrl: "/assets/images/locations/map/gps.png",
    iconSize: [32, 32]
});
