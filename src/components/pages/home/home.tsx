import _React from 'react';
import { Anchor, Badge, Button, Card, Container, Divider, Group, List, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconMapSearch, IconRefresh, IconRocket, IconArrowUpRight, IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import ContactMeForm from './contact-me-form.tsx';
import './home.css';

const hyphenBullet = <Text component="span" fw={700}>-</Text>;

const metrics = [
    { label: '7+ years', detail: 'Building enterprise-grade web applications.' },
    { label: 'Legacy -> Modern', detail: 'AngularJS and Vue migrations to React/TypeScript.' },
    { label: '60%+ faster', detail: 'Reduced UI latency by batching geospatial workflows.' },
];

const focusAreas = [
    {
        title: 'Geospatial Systems & Vector Tiles',
        description: 'Advanced Google Maps API work: lasso selection, bulk edits, telecom network overlays, and vector-tile rendering tuned for massive datasets.',
        icon: IconMapSearch,
    },
    {
        title: 'Front-End Modernization',
        description: 'Architecting React/TypeScript front-ends, lifting legacy AngularJS/Vue to component-driven systems with stronger state management and predictable performance.',
        icon: IconRefresh,
    },
    {
        title: 'Product & Team Leadership',
        description: 'Bridging engineering and product, running discovery with stakeholders, mentoring onboarding cohorts, and translating complex data into actionable UX.',
        icon: IconRocket,
    },
];

const engagements = [
    {
        company: 'Altman Solon',
        role: 'Product Consultant / Senior Software Engineer',
        timeframe: 'Oct 2021 - Present',
        summary: 'Leading an AngularJS -> React migration and architecting telecom network visualization + editing for a flagship planning platform.',
        highlights: [
            'Converted sequential "Lasso" calls into bulk operations, cutting UI latency by 60%+.',
            'Redesigned fault-tree data structures to handle very large JSON payloads without jank.',
            'Enabled engineers to visualize and refine planning outputs like Flowerpot and Microduct designs.',
        ],
        tags: ['React', 'TypeScript', 'Google Maps API', 'Vector tiles', 'Java', 'PostgreSQL'],
    },
    {
        company: 'Human Care Systems',
        role: 'Software Engineer / Onboarding Lead',
        timeframe: 'Nov 2019 - Oct 2021',
        summary: 'Co-led a Vue/Vuex rewrite and shipped automation for patient communications across SMS, print, and digital.',
        highlights: [
            'Built automated communication triggers, including SMS and physical mail integrations.',
            'Reduced new-hire ramp-up time by 30% as onboarding team lead.',
            'Defined reusable UI patterns to speed feature delivery across squads.',
        ],
        tags: ['Vue', 'Vuex', 'TypeScript', 'Node.js', 'Next.js', 'MongoDB'],
    },
    {
        company: 'Censinet',
        role: 'Software Engineer',
        timeframe: 'Jan 2019 - Nov 2019',
        summary: 'Helped build a third-party risk management SaaS with React/TypeScript and Ruby on Rails.',
        highlights: [
            'Enhanced automated scoring algorithms and vendor questionnaire flows.',
            'Implemented federated SSO via OAuth to streamline enterprise onboarding.',
            'Partnered with product to validate compliance workflows with healthcare customers.',
        ],
        tags: ['React', 'TypeScript', 'Ruby on Rails', 'PostgreSQL', 'OAuth'],
    },
];

const toolbox = {
    'Frontend & UX': ['React', 'TypeScript', 'Redux', 'Vue', 'Vuex', 'Angular', 'Jest', 'Enzyme'],
    'Backend & Services': ['Node.js', 'Express', 'Ruby on Rails', 'MoleculerJS', 'PostgreSQL', 'MongoDB', 'SQL'],
    'DevOps & Delivery': ['AWS', 'Docker', 'CI/CD', 'Jest', 'RSpec'],
};

function Home() {
    return (
        <Container size="xl" py="xl" className="page">
            <Stack spacing="xl">
                <Card radius="xl" padding="xl" className="hero">
                    <Group position="apart" align="flex-start">
                        <Stack spacing="sm" style={{ maxWidth: '900px' }}>
                            <Title order={1}>Matthew Bowler</Title>
                            <Text size="lg" c="dimmed">
                                7+ years shipping high-performance web apps, modernizing legacy front-ends, and building complex geospatial tools with React, TypeScript, and Google Maps (vector tiles).
                            </Text>
                            <Group spacing="sm" mt="sm">
                                <Button
                                    size="md"
                                    component="a"
                                    href={window.location.origin + '/matthew-bowler-resume.pdf'}
                                    target="_blank"
                                    rightIcon={<IconArrowUpRight size={18} />}
                                >
                                    Download Resume
                                </Button>
                                <Button
                                    size="md"
                                    variant="outline"
                                    component="a"
                                    href="mailto:mattrbowler@gmail.com"
                                    rightIcon={<IconMail size={18} />}
                                >
                                    Say hello
                                </Button>
                            </Group>
                            <Group spacing="md" mt="md">
                                {metrics.map((metric) => (
                                    <Card key={metric.label} radius="md" padding="md" className="metric-card">
                                        <Text fw={700} size="lg">{metric.label}</Text>
                                        <Text size="sm" c="dimmed">{metric.detail}</Text>
                                    </Card>
                                ))}
                            </Group>
                        </Stack>
                        <Card radius="md" padding="md" className="callout-card">
                            <Text fw={600} size="sm" c="cyan">What I'm focused on</Text>
                            <List
                                mt="xs"
                                spacing="xs"
                                icon={hyphenBullet}
                            >
                                <List.Item>Geospatial editing performance for telecom planning teams.</List.Item>
                                <List.Item>React architectures that de-risk migrations and lower tech debt.</List.Item>
                                <List.Item>Data-heavy UX that stays fast, legible, and collaborative.</List.Item>
                            </List>
                        </Card>
                    </Group>
                </Card>

                <div>
                    <Group position="apart" align="center" mb="md">
                        <Title order={2}>Where I add the most value</Title>
                        <Badge variant="light" size="sm">Mantine-first UI</Badge>
                    </Group>
                    <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                        {focusAreas.map((area) => (
                            <Card key={area.title} radius="md" padding="lg" className="focus-card">
                                <Group spacing="sm">
                                    <area.icon size={22} />
                                    <Title order={4}>{area.title}</Title>
                                </Group>
                                <Text mt="sm" c="dimmed">{area.description}</Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </div>

                <Card radius="lg" padding="xl" className="section-card">
                    <Title order={2} mb="sm">Recent Work</Title>
                    <Text c="dimmed" mb="lg">Enterprise-grade platforms, geospatial visualization, and modernization stories.</Text>
                    <Stack spacing="lg">
                        {engagements.map((engagement) => (
                            <Card key={engagement.company} radius="md" padding="lg" className="engagement-card">
                                <Group position="apart" align="flex-start" mb="xs">
                                    <div>
                                        <Title order={4}>{engagement.company}</Title>
                                        <Text size="sm" c="dimmed">{engagement.role}</Text>
                                    </div>
                                    <Badge variant="outline" color="gray">{engagement.timeframe}</Badge>
                                </Group>
                                <Text mb="sm">{engagement.summary}</Text>
                                <List
                                    spacing={6}
                                    icon={hyphenBullet}
                                >
                                    {engagement.highlights.map((item) => <List.Item key={item}>{item}</List.Item>)}
                                </List>
                                <Group spacing="xs" mt="md">
                                    {engagement.tags.map((tag) => (
                                        <Badge key={tag} size="sm" color="cyan" variant="light">{tag}</Badge>
                                    ))}
                                </Group>
                            </Card>
                        ))}
                    </Stack>
                </Card>

                <Card radius="lg" padding="xl" className="section-card">
                    <Group position="apart" mb="md">
                        <Title order={2}>Toolbox</Title>
                        <Badge variant="gradient" size="sm">React - TypeScript - Geospatial</Badge>
                    </Group>
                    <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                        {Object.entries(toolbox).map(([category, skills]) => (
                            <Card key={category} radius="md" padding="lg" className="tool-card">
                                <Title order={4}>{category}</Title>
                                <Divider my="sm" />
                                <Group spacing="xs">
                                    {skills.map((skill) => (
                                        <Badge key={skill} variant="light" color="gray">{skill}</Badge>
                                    ))}
                                </Group>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Card>

                <Card radius="lg" padding="xl" className="section-card">
                    <Group position="apart" align="flex-start">
                        <div>
                            <Title order={2}>Let's build something</Title>
                            <Text c="dimmed" mt="xs">
                                Remote-first from Savannah, GA. I partner with product, data, and engineering teams to ship high-confidence features and healthier codebases.
                            </Text>
                            <Group spacing="sm" mt="md">
                                <Button component="a" href="mailto:mattrbowler@gmail.com" leftIcon={<IconMail size={18} />}>Email Matthew</Button>
                                <Button
                                    variant="subtle"
                                    component="a"
                                    href="https://www.linkedin.com/in/matthew-bowler-emb/"
                                    target="_blank"
                                    rightIcon={<IconBrandLinkedin size={18} />}
                                >
                                    LinkedIn
                                </Button>
                                <Button
                                    variant="subtle"
                                    component="a"
                                    href="https://github.com/EmBeaux"
                                    target="_blank"
                                    rightIcon={<IconBrandGithub size={18} />}
                                >
                                    GitHub
                                </Button>
                            </Group>
                        </div>
                        <Card radius="md" padding="md" className="contact-card">
                            <Title order={5} c="cyan">Contact details</Title>
                            <List spacing="xs" mt="xs" size="sm" c="dimmed" icon={hyphenBullet}>
                                <List.Item>mattrbowler@gmail.com</List.Item>
                                <List.Item>830-388-6184</List.Item>
                                <List.Item>Savannah, Georgia (remote)</List.Item>
                                <List.Item>
                                    <Anchor href={window.location.origin + '/matthew-bowler-resume.pdf'} target="_blank" rel="noreferrer">Resume (PDF)</Anchor>
                                </List.Item>
                            </List>
                        </Card>
                    </Group>
                    <Divider my="lg" />
                    <ContactMeForm />
                </Card>
            </Stack>
        </Container>
    )
}

export default Home
