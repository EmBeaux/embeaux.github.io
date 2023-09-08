import { useState } from 'react'
import Carousel from 'react-spring-3d-carousel'
import { ActionIcon, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import ProjectCard from './project-card'
import { IconArrowBigRightLine, IconArrowBigLeftLine } from '@tabler/icons-react'
import Arrow from '../../../assets/Arrow.gif'
import Telenursing from '../../../assets/telenursing.png'
import Censinet from '../../../assets/censinet.webp'
import Unity from '../../../assets/unity.svg'
function Projects() {
    const [index, setIndex] = useState(0)
    const matches = useMediaQuery('(max-width: 900px)');

    return (
        <div style={{
            width: '100%',
            height: '35em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Carousel
                slides={[
                    {
                        key: 1,
                        content: (
                            <ProjectCard
                                name="Arrow"
                                company="Altman Solon"
                                skills={["React", "Typescript", "Java", "Postgres"]}
                                timeFrame={{ start: "Oct 2021", end: "Present" }}
                                image={Arrow}
                                description="I modernized and transitioned Altman Solon's codebase from Angular to React, driving efficiency through architectural improvements, enhancing data visualization, and fostering collaborations for product flow optimization."
                            />
                        ),
                    },
                    {
                        key: 2,
                        content: (
                            <ProjectCard
                                name="Treatment Adherence"
                                company="Human Care Systems"
                                skills={["VueJS", "Typescript", "NodeJS", "NextJS", "MongoDB"]}
                                timeFrame={{ start: "Nov 2019", end: "Oct 2021" }}
                                image={Telenursing}
                                description="At Human Care Systems, I co-led a significant overhaul of the front-end using VueJS, introduced innovative application features, and played a key role in onboarding, streamlining the integration of new hires with customized lesson plans."
                            />
                        ),
                    },
                    {
                        key: 3,
                        content: (
                            <ProjectCard
                                name="Third-Party Risk Management"
                                company="Censinet"
                                skills={["React", "Typescript", "Ruby on Rails", "Postgres"]}
                                timeFrame={{ start: "Jan 2019", end: "Nov 2019" }}
                                image={Censinet}
                                description="With Censinet, I helped with the creation of a novel SaaS application for third-party vetting in healthcare, optimized assessment algorithms, introduced a rigorous vendor questionnaire system, and promoted best coding practices through stand-up meetings and reviews."
                            />
                        ),
                    },
                    {
                        key: 4,
                        content: (
                            <ProjectCard
                                name="Planet Renderer"
                                company="Hobby Project"
                                skills={["C#", "Unity", "Perlin Noise", "Shaders"]}
                                image={Unity}
                                description="Utilizing C# and the Unity engine, I've intricately designed a procedural planet simulation with Perlin noise, allowing users to fine-tune terrain features through intuitive sliders. To enhance realism, I've integrated a hue calculator that dynamically adjusts coloration based on elevation, crafting vivid terrains that reflect topographical nuances."
                            />
                        ),
                    },
                    {
                        key: 5,
                        content: (
                            <ProjectCard
                                name="Tower Defense"
                                company="Hobby Project"
                                skills={["C#", "Unity", "A*", "Pathfinding"]}
                                image={Unity}
                                description="Using C#, Unity, and the A* algorithm, I've developed a dynamic tower defense game with a unique twist: a randomly generated map whose size and enemy pathing can be reshuffled at will. With a JSON/spreadsheet-driven dictionary, I've enabled intricate enemy formations to spawn, while the towers are strategically designed with distinct ranges and attack speeds, all governed by a customizable wave and difficulty system derived from the same dictionary."
                            />
                        ),
                    },
                ]}
                showNavigation={false}
                goToSlide={index}
                offsetRadius={matches ? 1 : 2}
            />
            <Flex
                align="center"
                justify="space-between"
                style={{ width: '100%' }}
            >
                <ActionIcon
                    onClick={() => {
                        setIndex(index - 1);
                    }}
                >
                    <IconArrowBigLeftLine />
                </ActionIcon>
                <ActionIcon
                    onClick={() => {
                        setIndex(index + 1);
                    }}
                >
                    <IconArrowBigRightLine />
                </ActionIcon>
            </Flex>
        </div>
    )
}

export default Projects