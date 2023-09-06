import { Flex, Modal, Burger, Image } from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';
import LinkedInLogo from '../../assets/LI-In-Bug.png';
import GitHubLogo from '../../assets/gitHub-mark-white.png';
import DisneyHeadshot from '../../assets/disney-headshot.jpg';
import Headshot from '../../assets/headshot.jpg';
import ImageSlider from './utils/image-slider';
import HoverImage from './utils/hover-image';
function NavBar() {
    const [burgerOpened, { toggle: toggleBurger }] = useDisclosure(false);
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
    const label = burgerOpened ? 'Close navigation' : 'Open navigation';
    return (
        <>
            <Modal
                size="xl"
                withCloseButton={false}
                opened={modalOpened}
                onClose={closeModal}
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
                    src={DisneyHeadshot}
                    hoverSrc={Headshot}
                    onClick={openModal}
                    width='4em'
                    radius="xl"
                />
                <Flex direction='row' align="center" gap={9}>
                    <HoverImage src={LinkedInLogo} width="2em" onClick={() => console.log("Hello linked in")} />
                    <HoverImage src={GitHubLogo} width="2em" onClick={() => console.log("Hello github")}/>
                    <Burger opened={burgerOpened} onClick={toggleBurger} aria-label={label} />
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar
