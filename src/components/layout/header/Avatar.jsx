import {
  Avatar as FBAvatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  NavbarToggle,
} from "flowbite-react";

export default function Avatar({isAdm}) { // Bool fixado apenas para teste
    return (
        <div className="flex md:order-2">
            <Dropdown
            arrowIcon={false}
            inline
            label={
                <FBAvatar alt="User settings" img={isAdm ? "../../../../public/AdmIcon.png" : "../../../../public/UserIcon.png"} rounded />
            }
            >
                <DropdownHeader>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                </DropdownHeader>
                <DropdownItem href="/perfil">Perfil</DropdownItem>
                <DropdownDivider/>
                <DropdownItem>Sair</DropdownItem>
            </Dropdown>
            <NavbarToggle />
        </div>
    )
}