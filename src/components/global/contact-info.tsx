import _React from 'react';
import { Flex, Title, Text, Space, Anchor, Button } from "@mantine/core"

function ContactInfo() {
    return (
        <Flex direction="column" justify="flex-start">
            <Flex direction="column" justify="flex-start">
                <Text c="dimmed">Name</Text>
                <Title order={5}>Matthew Bowler</Title>
            </Flex>
            <Space h='xl' />
            <Flex direction="column" justify="flex-start">
                <Text c="dimmed">Email</Text>
                <Title order={5}>mattrbowler@gmail.com</Title>
            </Flex>
            <Space h='xl' />
            <Flex direction="column" justify="flex-start">
                <Text c="dimmed">Phone Number</Text>
                <Title order={5}>830-388-6184</Title>
            </Flex>
            <Space h='xl' />
            <Flex direction="column" justify="flex-start">
                <Text c="dimmed">Location</Text>
                <Title order={5}>Savannah, Georgia</Title>
            </Flex>
            <Space h='xl' />
            <Flex direction="column" justify="flex-start">
                <Text c="dimmed">Resume</Text>
                <Anchor href={window.location.origin + '/matthew-bowler-resume.pdf'} download="Matthew Bowler Resume" target='_blank'>
                    <Button>Click Here To Download</Button>
                </Anchor>
            </Flex>
        </Flex>
    )
}

export default ContactInfo