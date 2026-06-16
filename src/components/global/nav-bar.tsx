import _React from 'react';
import { Anchor, Button, Group, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import NavMenu from './nav-menu';
import SocialGroup from './social-group';
import { routes } from '../../constants/routes';

function NavBar() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                paddingBottom: 24,
                marginBottom: 32,
                borderBottom: '1px solid var(--border)',
                flexWrap: 'wrap',
            }}
        >
            <Group spacing={12} noWrap>
                <Image
                    src={window.location.origin + '/headshot.jpg'}
                    width={42}
                    height={42}
                    radius="sm"
                    alt="Matthew Bowler"
                />
                <div style={{ lineHeight: 1.2 }}>
                    <Text fw={600} size="sm" style={{ letterSpacing: '-0.01em' }}>
                        Matthew Bowler
                    </Text>
                    <Text size="xs" c="dimmed" mt={2}>
                        {isMobile ? 'Senior Full-Stack · AI' : 'Senior Full-Stack Engineer · AI'}
                    </Text>
                </div>
            </Group>
            <Group spacing={isMobile ? 8 : 20} align="center" style={{ flexWrap: 'nowrap' }}>
                {!isMobile && (
                    <Group spacing={20}>
                        {routes.map((route) => (
                            <Anchor
                                key={route.id}
                                underline={false}
                                href={route.path !== '/' ? '#' + route.path : '#/'}
                                c="dimmed"
                                fw={500}
                                size="sm"
                                sx={{
                                    '&:hover': { color: 'var(--text)' },
                                }}
                            >
                                {route.id}
                            </Anchor>
                        ))}
                    </Group>
                )}
                {isMobile && <NavMenu />}
                <Button
                    variant="default"
                    size="xs"
                    component="a"
                    href={window.location.origin + '/matthew-bowler-resume.pdf'}
                    target="_blank"
                    rel="noreferrer"
                >
                    Résumé
                </Button>
                <SocialGroup />
            </Group>
        </nav>
    );
}

export default NavBar;
