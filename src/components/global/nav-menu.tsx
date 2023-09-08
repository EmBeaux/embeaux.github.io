import { Menu, Burger, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { routes } from '../../constants/routes';

function NavMenu() {
    const [burgerOpened, { toggle: toggleBurger }] = useDisclosure(false);

    return (
        <Menu withArrow>
            <Menu.Target>
                <Burger opened={burgerOpened} onClick={toggleBurger} />
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Navigation</Menu.Label>
                {routes.map(route => (
                    <Anchor key={route.id} underline={false} href={route.path}><Menu.Item>{route.id}</Menu.Item></Anchor>
                ))}
            </Menu.Dropdown>
        </Menu>
    )
}

export default NavMenu