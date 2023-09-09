import _React from 'react';
import { Flex, Card, Image, Text, Space, Badge, Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
interface ProjectCardProps {
    name: string;
    company: string;
    skills: string[];
    description?: string;
    image?: string;
    timeFrame?: { start: string, end: string };
}

function ProjectCard({timeFrame, name, company, skills = [], description = "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway", image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"}: ProjectCardProps) {
    const matches = useMediaQuery('(max-width: 900px)');
    return (
        <Flex direction="column" align="center" style={{ minWidth: matches ? '30em' : '40em' }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '65%' }}>
                <Card.Section>
                    <Image
                        src={image}
                        height={160}
                    />
                </Card.Section>
                <Space h={12} />
                {timeFrame && (
                    <Group>
                        <Text size="sm" color="dimmed">{timeFrame.start} - {timeFrame.end}</Text>
                    </Group>
                )}
                <Group position="apart" spacing='0' mb="xs">
                    <Text weight={700}>{company}</Text>
                    <Text weight={600}>{name}</Text>
                </Group>
                <Group position="left" spacing="xs" mb="md">
                    {skills.map((skill) => (
                        <Badge key={skill} size="xs" color="pink" variant="light">
                            {skill}
                        </Badge>
                    ))}
                </Group>

                <Text size="sm" color="dimmed">
                    {description}
                </Text>
            </Card>
        </Flex>
    )
}

export default ProjectCard