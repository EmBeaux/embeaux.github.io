import _React from 'react';
import { Flex, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DisneyHeadshot from '../../assets/disney-headshot.jpg';
import Headshot from '../../assets/headshot.jpg';
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
                <ImageSlider images={[Headshot, DisneyHeadshot]} />
            </Modal>
            <Flex
                direction='row'
                justify="space-between"
                align="center"
                style={{ height: '4em' }}
            >
                <HoverImage
                    src={Headshot}
                    hoverSrc={DisneyHeadshot}
                    onClick={openModal}
                    width='4em'
                    radius="xl"
                />
                <Flex direction='row' align="center" gap={9}>
                    <SocialGroup />
                    <NavMenu />
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar
