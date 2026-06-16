import _React from 'react';
import { Text } from '@mantine/core';
import SocialGroup from './social-group';

function Footer() {
    return (
        <footer
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                marginTop: 64,
                paddingTop: 24,
                borderTop: '1px solid var(--border)',
                flexWrap: 'wrap',
            }}
        >
            <Text size="xs" c="dimmed">
                © {new Date().getFullYear()} Matthew Bowler · Savannah, GA
            </Text>
            <SocialGroup />
        </footer>
    );
}

export default Footer;
