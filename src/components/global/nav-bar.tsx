import { Flex, Avatar, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
function NavBar() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';
    return (
        <Flex
            direction='row'
            justify="space-between"
            align="center"
            style={{ }}
        >
            <Avatar src="https://avatars.githubusercontent.com/u/10047034?v=4" radius="xl" />
            <Flex direction='row' align="center">
                <Avatar src="https://avatars.githubusercontent.com/u/10047034?v=4" radius="xl" />
                <Avatar src="https://avatars.githubusercontent.com/u/10047034?v=4" radius="xl" />
                <Burger opened={opened} onClick={toggle} aria-label={label} />
            </Flex>
        </Flex>
    )
}

export default NavBar
