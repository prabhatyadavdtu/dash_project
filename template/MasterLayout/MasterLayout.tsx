import { AppShell, Box, Burger } from "@mantine/core";
import NavbarMinimal from "./NavbarMinimal";
import NavHeader from "./NavHeader";

type MastrLayourProps = {
    children: React.ReactElement | React.ReactElement[]
}


const MasterLayout = ({ children }: MastrLayourProps) => {


    return <Box>
        <AppShell
            //   header={{ height: 0 }}
            navbar={{
                width: 65,
                breakpoint: 'sm',
                // collapsed: { mobile: !opened },
            }}
            padding="md"
            styles={{
                main: {
                    paddingTop: 5
                    
                }
            }}
        >


            <AppShell.Navbar h="100%" pt={10}>

                <NavbarMinimal />
            </AppShell.Navbar>

            <AppShell.Main>
                <NavHeader />

                <Box p="sm" >{children}</Box>
            </AppShell.Main>
        </AppShell>
    </Box>

}


export default MasterLayout;