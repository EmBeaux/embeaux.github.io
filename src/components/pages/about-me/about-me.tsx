import _React from 'react';
import { Image, Title, Text, Space, List } from '@mantine/core';
import Carousel from '../utils/carousel';
import '../home/home.css';

const hyphenBullet = <Text component="span" fw={600} c="dimmed">-</Text>;

const slideImages = [
    { src: '/jayde-matt.jpeg', alt: 'Me and my wife Jayde' },
    { src: '/celeste.jpg', alt: 'My cat Celeste' },
    { src: '/sox-karma.jpg', alt: 'My cat Sox and dog Karma' },
    { src: '/karma.jpg', alt: 'My dog Karma' },
    { src: '/matt-dad.jpg', alt: 'Me and my dad' },
    { src: '/matt.jpg', alt: 'Me with an ice sculpture' },
];

function AboutMe() {
    return (
        <div className="page">
            <div className="announcement">
                <span className="announcement-dot" />
                <p className="announcement-text">
                    <strong>Personal news:</strong> Jayde and I are expecting our first baby. Biggest project of the year by far.
                </p>
            </div>

            <div style={{ marginBottom: 48 }}>
                <Carousel
                    slides={slideImages.map((img, idx) => ({
                        key: idx + 1,
                        content: (
                            <Image
                                maw={260}
                                mx="auto"
                                radius="sm"
                                src={window.location.origin + img.src}
                                alt={img.alt}
                            />
                        ),
                    }))}
                />
            </div>

            <section className="section">
                <div className="section-label">About</div>
                <Title order={1} style={{ fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                    A bit about me
                </Title>
                <Text c="dimmed" size="md" style={{ lineHeight: 1.7, maxWidth: 760 }}>
                    I&apos;m a software engineer based in Savannah, Georgia. For the last few
                    years I&apos;ve been with Altman Solon, first leading the modernization
                    of Arrow, a fiber-network planning platform, and now focused on AI
                    engineering: building internal platforms that let consultants stand up
                    production-grade applications from a plain-English prompt, and encoding
                    our engineering standards into multi-agent Claude Code teams.
                </Text>
                <Space h="sm" />
                <Text c="dimmed" size="md" style={{ lineHeight: 1.7, maxWidth: 760 }}>
                    I have a knack for simplifying complex datasets and bridging the gap
                    between deep technical work and the people who depend on it. After
                    7+ years in the field, I&apos;m as interested in shaping teams and
                    process as I am in shipping code.
                </Text>
            </section>

            <section className="section">
                <div className="section-label">How I got here</div>
                <Text style={{ lineHeight: 1.7, maxWidth: 760 }}>
                    My path into software wasn&apos;t the storybook version. At 12 I was
                    modding video games. The interest grew on and off through high school
                    as I picked up Java, HTML, Python, and whatever else caught my eye.
                    At 17 I decided college wasn&apos;t for me and enrolled at Launch
                    Academy, a coding bootcamp in Boston, and that was the start. Since
                    then I&apos;ve added certifications in AI/ML from IBM and UX Design
                    from Google, and I&apos;m not stopping there.
                </Text>
            </section>

            <section className="section">
                <div className="section-label">Beyond the job</div>
                <Text style={{ lineHeight: 1.7, maxWidth: 760 }}>
                    Outside of work there&apos;s a lot more to me. My wife Jayde and I are
                    expecting our first baby, so the next chapter is going to look pretty
                    different (and pretty great). We&apos;ve already got a full household
                    of fur babies. I&apos;m a hardcore gamer, a tech geek, and I love rock
                    climbing and snowboarding. When I&apos;m not doing all that I&apos;m
                    usually deep in a side project, whether that&apos;s this website, Unity games, or
                    whatever else catches my attention.
                </Text>
            </section>

            <section className="section">
                <div className="section-label">What motivates me now</div>
                <List spacing="sm" icon={hyphenBullet} styles={{ itemWrapper: { lineHeight: 1.6 } }}>
                    <List.Item>Building tools that compress weeks of engineering work into a single prompt, responsibly.</List.Item>
                    <List.Item>Simplifying complex datasets so teams and clients can make decisions quickly.</List.Item>
                    <List.Item>Partnering closely with people, not just code, to understand needs and lead projects.</List.Item>
                    <List.Item>Growing into management and leadership while staying hands-on with the work.</List.Item>
                    <List.Item>Being a great dad to our soon-to-arrive little one.</List.Item>
                </List>
            </section>
        </div>
    );
}

export default AboutMe;
