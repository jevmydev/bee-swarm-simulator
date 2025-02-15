import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";
import { useHiveBuilder } from "../../hooks/useHiveBuilder";

export function HiveBuilder({ hiveRef, hiveNivel, isGiftedHive }) {
    const { updatedHexagons, handleDrop, handleDragOver, handleDragExit } = useHiveBuilder();

    return (
        <div className="w-full" ref={hiveRef}>
            <HexGrid className="bg-hive rounded-lg border-2 border-hive p-4" width="100%" height="100%" viewBox="-35 0 100 100">
                <Layout size={{ x: 5, y: 5 }} spacing={1.1} flat>
                    {updatedHexagons.map(({ q, r, id, pseudoId, name, imageUrl }) => {
                        const hasBee = imageUrl && name;
                        const strokeClass = isGiftedHive && hasBee ? "stroke-hive-gifted" : "stroke-hive";

                        return (
                            <g key={id} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragExit}>
                                <Hexagon className={`${strokeClass} fill-hive stroke-1/2 select-none`} q={q} r={r} data-id={pseudoId}>
                                    {hasBee && (
                                        <>
                                            <Text className="select-none text-[.2rem] fill-light stroke-dark stroke-1/6" dx="2.3" dy="3.5">
                                                {hiveNivel}
                                            </Text>
                                            <foreignObject className="pointer-events-none relative" x="-5" y="-4" width="10" height="10">
                                                <img className="w-20 object-cover" src={imageUrl} alt={name} loading="lazy" decoding="async" draggable={false} />
                                            </foreignObject>
                                        </>
                                    )}
                                </Hexagon>
                            </g>
                        );
                    })}
                </Layout>
            </HexGrid>
        </div>
    );
}

export default HiveBuilder;
