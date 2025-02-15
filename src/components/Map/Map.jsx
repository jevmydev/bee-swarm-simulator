import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { MAP_CONFIG, MAP_OVERLAY_CONFIG } from "../../constants/const";
import { markers } from "../../mocks/map/markers";
import { markerIcon } from "../../constants/const";

import "leaflet/dist/leaflet.css";

export function Map() {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="font-title tracking-wider text-4xl md:text-5xl">Mapa de Bee Swarm Simulator</h2>
                    </div>
                    <div className="w-full h-screen">
                        <MapContainer {...MAP_CONFIG}>
                            <ImageOverlay {...MAP_OVERLAY_CONFIG} />
                            {markers.map(({ id, lat, lng, title, description }) => (
                                <Marker key={id} position={[lat, lng]} icon={markerIcon}>
                                    <Popup>
                                        <div className="font-main bg-light text-dark text-lg font-medium">
                                            <h3 className="tracking-wider text-xl font-semibold">{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;
