import _React from 'react';
import { Flex, Modal, Title, Text, Group, Badge, Button, Anchor } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import ImageSlider from './utils/image-slider';
import HoverImage from './utils/hover-image';
import NavMenu from './nav-menu';
import SocialGroup from './social-group';
import { routes } from '../../constants/routes';

function NavBar() {
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Modal
                size="xl"
                withCloseButton={false}
                opened={modalOpened}
                onClose={closeModal}
                styles={{ content: { background: 'none' } }}
            >
                <ImageSlider images={[window.location.origin + '/headshot.jpg', window.location.origin + '/disney-headshot.jpg']} />
            </Modal>
            <Flex
                direction={isMobile ? 'column' : 'row'}
                justify="space-between"
                align={isMobile ? 'flex-start' : 'center'}
                wrap="wrap"
                style={{ minHeight: '4em', width: '100%', gap: isMobile ? '0.75rem' : '1rem' }}
            >
                <Group spacing="md">
                    <HoverImage
                        src={window.location.origin + '/headshot.jpg'}
                        hoverSrc={window.location.origin + '/disney-headshot.jpg'}
                        onClick={openModal}
                        width='3.4em'
                        radius="xl"
                    />
                    <div>
                        <Group spacing="xs">
                            <Title order={4} mb={-4}>Matthew Bowler</Title>
                            <Badge size="sm" variant="gradient">Savannah, GA</Badge>
                        </Group>
                        <Text size="sm" c="dimmed">Senior Full-Stack Engineer - React, TypeScript, Geospatial</Text>
                    </div>
                </Group>
                <Flex
                    align="center"
                    gap={12}
                    wrap="wrap"
                    style={{ width: isMobile ? '100%' : 'auto', justifyContent: isMobile ? 'space-between' : 'flex-end' }}
                >
                    {!isMobile && (
                        <Group spacing="md">
                            {routes.map(route => (
                                <Anchor key={route.id} underline={false} href={route.path !== '/' ? '#' + route.path : route.path} c="dimmed" fw={600}>
                                    {route.id}
                                </Anchor>
                            ))}
                        </Group>
                    )}
                    {isMobile && <NavMenu />}
                    <Button
                        variant="light"
                        size="sm"
                        component="a"
                        href={window.location.origin + '/matthew-bowler-resume.pdf'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </Button>
                    <SocialGroup />
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar
