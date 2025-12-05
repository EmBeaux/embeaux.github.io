import _React from 'react';
import { Flex, Modal, Title, Text, Group, Badge, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ImageSlider from './utils/image-slider';
import HoverImage from './utils/hover-image';
import NavMenu from './nav-menu';
import SocialGroup from './social-group';
function NavBar() {
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
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
            <Flex direction='row' justify="space-between" align="center" style={{ height: '4em' }}>
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
                        <Text size="sm" c="dimmed">Senior Full-Stack Engineer — React, TypeScript, Geospatial</Text>
                    </div>
                </Group>
                <Flex direction='row' align="center" gap={12}>
                    <Button
                        variant="light"
                        size="xs"
                        component="a"
                        href={window.location.origin + '/matthew-bowler-resume.pdf'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </Button>
                    <SocialGroup />
                    <NavMenu />
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar
