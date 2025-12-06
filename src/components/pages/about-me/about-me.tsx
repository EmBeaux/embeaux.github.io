import _React from 'react';
import { Image, Flex, Title, Text, Space, Card, Grid, List } from '@mantine/core';
import Carousel from '../utils/carousel';

const hyphenBullet = <Text component="span" fw={700}>-</Text>;

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
                <Title order={1}>About Me</Title>
                <Text c="dimmed" mt="sm">
                    Hey there! I'm a Software Developer hailing from the lovely Savannah, Georgia. Currently, I'm with Altman Solon, contributing to their incredible product, Arrow. Our tool aids major internet providers in tasks like fiber routing, tower planning, and so much more.
                </Text>
                <Text c="dimmed" mt="sm">
                    I have a knack for simplifying complex datasets, making them easier for everyone to grasp. While I'm deeply immersed in coding, I also love collaborating with clients to understand their needs and leading teams. Throughout my 7-year journey in the tech world, I've discovered that my passions extend beyond coding. Now, I'm eager to dive deeper into the realms of management and leadership.
                </Text>
                <Space h="md" />
                <Grid gutter="lg">
                    <Grid.Col span={12} md={6}>
                        <Title order={4} mb="xs">How I got here</Title>
                        <Text>
                            My journey into the world of professional development isn't quite the storybook tale. At the young age of 12, I was already tinkering with video game modifications. My love for software development ebbed and flowed, and when inspiration struck, I found myself diving into languages like Java, HTML, Python, and many others. Come my 17th birthday, I took a bold step: college wasn't for me. Instead, I wanted to leap straight into the working world. So, I enrolled in Launch Academy, a coding bootcamp in Boston, and before I knew it, I was deep in the software universe. Alongside my growing development skills, I've earned certifications like AI/ML from IBM, UX Design from Google, and I'm not stopping there. My journey is all about growth and lifelong learning!
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <Title order={4} mb="xs">Beyond the job</Title>
                        <Text>
                            Outside of my professional life, there's a lot more to me! I'm a loving husband and a proud parent to our fur babies - both cats and dogs. I'm a hardcore gamer at heart, a tech geek, and absolutely love rock climbing and snowboarding. When I'm not doing all that, I'm juggling a range of personal projects. Not just the website you're currently on, but also Unity games (where I hone my C# prowess) and several website prototypes that may or may not see the digital dawn. What I cherish most about software development is that, even in my free time, it never feels like a chore. I genuinely relish every moment of coding!
                        </Text>
                    </Grid.Col>
                </Grid>
                <Space h="md" />
                <Title order={4} mb="xs">What motivates me now</Title>
                <List spacing="sm" icon={hyphenBullet}>
                    <List.Item>Simplifying complex datasets so teams and clients can make decisions quickly.</List.Item>
                    <List.Item>Partnering closely with people - not just code - to understand needs and lead projects.</List.Item>
                    <List.Item>Growing into management and leadership while staying hands-on with the work.</List.Item>
                </List>
            </Card>
        </Flex>
    )
}

export default AboutMe
