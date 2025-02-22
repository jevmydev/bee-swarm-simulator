import Button from "../../elements/Button";

export function NavResponsive({ toggleNavMenu }) {
    return (
        <div className="md:hidden fixed top-0 left-0 p-2 px-4 z-[9999] bg-honey w-full flex justify-end">
            <Button onClick={toggleNavMenu}>Menú</Button>
        </div>
    );
}

export default NavResponsive;
