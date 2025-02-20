import LinkAd from "../../elements/LinkAd";

export function HiveAd() {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <LinkAd title="¡Construye tu hive!" href="/hive" imageUrl="/assets/images/dataset/hive/hexagon-icon.svg" textClass="bg-hive text-light" />
            </div>
        </section>
    );
}

export default HiveAd;
