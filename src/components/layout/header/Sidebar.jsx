import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar as FBSidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react"

export default function Sidebar({isOpen, handleClose}) {

    return (
        <Drawer open={isOpen} onClose={handleClose}>
            <DrawerHeader title="MENU" titleIcon={() => <></>} />
            <DrawerItems>
                <FBSidebar
                    aria-label="Sidebar with multi-level dropdown example"
                    className="[&>div]:bg-transparent [&>div]:p-0"
                >
                    <div className="flex h-full flex-col justify-between py-2">
                        <div>
                            <form className="pb-3 md:hidden">
                            <TextInput
                                type="search"
                                placeholder="Search"
                                required
                                size={32}
                            />
                            </form>
                            <SidebarItems>
                                <SidebarItemGroup>
                                    <SidebarItem href="/"> Home </SidebarItem>
                                    <SidebarItem href="/cadastroagendamento"> Agendar </SidebarItem>
                                </SidebarItemGroup>
                                <SidebarItemGroup>
                                    <SidebarItem href="/perfil"> Perfil </SidebarItem>
                                </SidebarItemGroup>
                            </SidebarItems>
                        </div>
                    </div>
                </FBSidebar>
            </DrawerItems>
        </Drawer>
    )
}