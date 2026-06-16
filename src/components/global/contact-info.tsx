import React from 'react';
import { Anchor, Button, Stack, Text, Title } from '@mantine/core';

const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderTop: '1px solid var(--border)',
    fontSize: 14,
};

function ContactInfo() {
    return (
        <Stack spacing={0}>
            <Title order={4} mb="sm" style={{ letterSpacing: '-0.01em' }}>
                Contact
            </Title>
            <div style={{ ...rowStyle, borderTop: 'none' }}>
                <Text c="dimmed">Name</Text>
                <Text>Matthew Bowler</Text>
            </div>
            <div style={rowStyle}>
                <Text c="dimmed">Email</Text>
                <Anchor href="mailto:mattrbowler@gmail.com">mattrbowler@gmail.com</Anchor>
            </div>
            <div style={rowStyle}>
                <Text c="dimmed">Phone</Text>
                <Text>830-388-6184</Text>
            </div>
            <div style={rowStyle}>
                <Text c="dimmed">Location</Text>
                <Text>Savannah, GA</Text>
            </div>
            <div style={{ marginTop: 16 }}>
                <Button
                    component="a"
                    href={window.location.origin + '/matthew-bowler-resume.pdf'}
                    download="Matthew Bowler Resume"
                    target="_blank"
                    rel="noreferrer"
                    fullWidth
                >
                    Download résumé
                </Button>
            </div>
        </Stack>
    );
}

export default ContactInfo;
