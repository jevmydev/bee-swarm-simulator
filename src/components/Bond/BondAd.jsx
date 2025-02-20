import LinkAd from "../../elements/LinkAd";

export function BondAd() {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <LinkAd title="¡Utiliza el Bond Calculator!" href="/bond" imageUrl="/assets/images/items/resources/treat.webp" textClass="bg-green-500 text-light" />
            </div>
        </section>
    );
}

export default BondAd;
