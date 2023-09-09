import _React from 'react';
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import HoverImage from "./utils/hover-image"
import ContactInfo from './contact-info'

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
                src={window.location.origin + '/address-book.svg'}
                width="2em"
                onClick={openModal}
            />
            <HoverImage
                src={window.location.origin + '/li-in-bug.png'}
                width="2em"
                onClick={() => window.open(
                    'https://www.linkedin.com/in/matthew-bowler-emb/',
                    '_blank'
                )}
            />
            <HoverImage
                src={window.location.origin + '/github-mark-white.png'}
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
