import _React from 'react';
import { Image, Flex, Title, Text, Space, Card, Grid, Badge, List, ThemeIcon } from '@mantine/core';
import { IconMapSearch, IconRocket, IconDeviceAnalytics, IconCheck } from '@tabler/icons-react';
import Carousel from '../utils/carousel';

function AboutMe() {
    return (
        <Flex direction="column" gap="lg">
            <Carousel
                slides={[
                    { key: 1, content: <Image className="image left one" maw={240} mx="auto" radius="md" src={window.location.origin + '/celeste.jpg'} alt="My Cat Celeste" /> },
                    { key: 2, content: <Image className="image left two" maw={240} mx="auto" radius="md" src={window.location.origin + '/sox-karma.jpg'} alt="My Cat Sox and Dog Karma" /> },
                    { key: 3, content: <Image className="image right one" maw={240} mx="auto" radius="md" src={window.location.origin + '/karma.jpg'} alt="My Dog Karma" /> },
                    { key: 4, content: <Image className="image right two" maw={240} mx="auto" radius="md" src={window.location.origin + '/matt-dad.jpg'} alt="Me and my Dad" /> },
                    { key: 5, content: <Image className="image center one" maw={240} mx="auto" radius="md" src={window.location.origin + '/matt.jpg'} alt="Me with an ice sculpture" /> },
                    { key: 6, content: <Image className="image center two" maw={240} mx="auto" radius="md" src={window.location.origin + '/jayde-matt.jpeg'} alt="Me and my Wife Jayde" /> }
                ]}
            />
            <Card radius="lg" padding="xl" shadow="lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(193,194,197,0.1)' }}>
                <Title order={1}>About Matthew</Title>
                <Text c="dimmed" mt="sm">
                    I’m a Senior Full-Stack Engineer based in Savannah, GA. I love modernizing front-end architectures and building geospatial visualization tools that help telecom engineers plan and refine complex networks.
                </Text>
                <Space h="md" />
                <Grid gutter="lg">
                    <Grid.Col span={12} md={6}>
                        <Title order={4} mb="xs">What motivates me</Title>
                        <List
                            spacing="sm"
                            icon={<ThemeIcon color="cyan" variant="light" size={22} radius="xl"><IconCheck size={14} /></ThemeIcon>}
                        >
                            <List.Item>Turning dense datasets into fast, legible experiences.</List.Item>
                            <List.Item>Partnering with product teams to reduce tech debt while shipping new capability.</List.Item>
                            <List.Item>Helping engineers visualize and trust the geospatial data behind critical decisions.</List.Item>
                        </List>
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <Title order={4} mb="xs">How I got here</Title>
                        <Text>
                            I started modding games at 12, taught myself JavaScript and Python, and took a direct path into the industry via Launch Academy in Boston. Since then I’ve led migrations from AngularJS/Vue to React, delivered vector-tile mapping experiences, and mentored onboarding cohorts.
                        </Text>
                    </Grid.Col>
                </Grid>
                <Space h="md" />
                <Grid gutter="lg">
                    <Grid.Col span={12} md={6}>
                        <Card padding="lg" radius="md" style={{ background: 'rgba(64,207,255,0.06)' }}>
                            <Badge variant="light" color="cyan" mb="xs" leftSection={<IconMapSearch size={14} />}>Geospatial</Badge>
                            <Text fw={600}>Vector tiles, lasso workflows, and high-volume map editing for telecom planning.</Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <Card padding="lg" radius="md" style={{ background: 'rgba(124,77,255,0.08)' }}>
                            <Badge variant="light" color="grape" mb="xs" leftSection={<IconRocket size={14} />}>Modernization</Badge>
                            <Text fw={600}>React + TypeScript systems that make legacy migrations safe, testable, and performant.</Text>
                        </Card>
                    </Grid.Col>
                </Grid>
                <Space h="md" />
                <Card padding="lg" radius="md" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <Badge variant="light" color="gray" mb="xs" leftSection={<IconDeviceAnalytics size={14} />}>Outside work</Badge>
                    <Text>
                        Husband, pet parent, climber, snowboarder, and gamer. I unwind by experimenting with Unity (C#), building prototypes, and learning anything that keeps me curious.
                    </Text>
                </Card>
            </Card>
        </Flex>
    )
}

export default AboutMe
