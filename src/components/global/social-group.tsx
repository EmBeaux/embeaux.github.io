import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import HoverImage from "./utils/hover-image"
import ContactInfo from './contact-info'
import LinkedInLogo from '../../assets/LI-In-Bug.png';
import GitHubLogo from '../../assets/gitHub-mark-white.png';
import Mailbox from '../../assets/mailbox.svg';
function SocialGroup() {
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
    return (
        <>
            <Modal
                size="xl"
                opened={modalOpened}
                onClose={closeModal}
                title="Contact Info"
            >
                <ContactInfo />
            </Modal>
            <HoverImage
                src={Mailbox}
                width="2em"
                onClick={openModal}
            />
            <HoverImage
                src={LinkedInLogo}
                width="2em"
                onClick={() => window.open(
                    'https://www.linkedin.com/in/matthew-bowler-emb/',
                    '_blank'
                )}
            />
            <HoverImage
                src={GitHubLogo}
                width="2em"
                onClick={() => window.open(
                    'https://github.com/EmBeaux',
                    '_blank'
                )}
            />
        </>
    )
}

export default SocialGroup
