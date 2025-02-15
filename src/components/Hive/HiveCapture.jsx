import { useHiveCapture } from "../../hooks/useHiveCapture";

import Link from "../../elements/Link";
import Button from "../../elements/Button";

export function HiveCapture({ hiveRef }) {
    const { capture, captureHive } = useHiveCapture(hiveRef);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <Button title="¡Comparte tu hive!" onClick={captureHive}>
                    ¡Comparte tu hive!
                </Button>
            </div>
            {capture && (
                <div className="flex flex-col items-start gap-2">
                    <img className="w-full max-w-sm rounded-lg" src={capture} alt="Hive capture" loading="lazy" decoding="async" />
                    <Link href={capture} title="Descargar imagen" download="hive.png" isActive>
                        Descargar imagen
                    </Link>
                </div>
            )}
        </div>
    );
}

export default HiveCapture;
