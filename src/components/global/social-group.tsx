import _React from 'react';
import { ActionIcon, Group, Modal, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconAddressBook, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
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
            <Group spacing="xs">
                <Tooltip label="Contact">
                    <ActionIcon variant="subtle" color="cyan" onClick={openModal}>
                        <IconAddressBook size={18} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="LinkedIn">
                    <ActionIcon
                        variant="subtle"
                        color="cyan"
                        component="a"
                        href="https://www.linkedin.com/in/matthew-bowler-emb/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconBrandLinkedin size={18} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label="GitHub">
                    <ActionIcon
                        variant="subtle"
                        color="cyan"
                        component="a"
                        href="https://github.com/EmBeaux"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconBrandGithub size={18} />
                    </ActionIcon>
                </Tooltip>
            </Group>
        </>
    )
}

export default SocialGroup
