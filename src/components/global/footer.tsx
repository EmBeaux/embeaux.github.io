import _React from 'react';
import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import SocialGroup from './social-group';

function Footer() {
    const matches = useMediaQuery('(max-width: 900px)');
    return (
        <Flex direction="row" gap={9} justify="flex-end" align="center" style={{ width: '100%', marginTop: matches ? '4em' : '5em' }}>
            <SocialGroup />
        </Flex>
    )
}

export default Footer
