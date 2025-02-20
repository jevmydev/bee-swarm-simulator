import LinkAd from "../../elements/LinkAd";

export function MapAd() {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <LinkAd title="¡Mira el Mapa de BSS!" href="/map" imageUrl="/assets/images/locations/map/gps.png" textClass="bg-red-800 text-light" />
            </div>
        </section>
    );
}

export default MapAd;
