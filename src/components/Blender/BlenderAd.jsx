import LinkAd from "../../elements/LinkAd";

export function BlenderAd() {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <LinkAd title="¡Usa el Simulador de Blender!" href="/blender" imageUrl="/assets/images/dataset/mechanics/blender.webp" textClass="bg-blue-900 text-light" />
            </div>
        </section>
    );
}

export default BlenderAd;
