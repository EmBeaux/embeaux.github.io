import React from 'react';
import { Image, Flex, Title, Text, Space } from '@mantine/core'
import Carousel from '../utils/carousel'
import Celeste from '../../../assets/celeste.jpg'
import SoxKarma from '../../../assets/sox-karma.jpg'
import Karma from '../../../assets/karma.jpg'
import MattDad from '../../../assets/matt-dad.jpg'
import Matt from '../../../assets/matt.jpg'
import JaydeMatt from '../../../assets/jayde-matt.jpeg'

function AboutMe() {
    return (
        <>
            <Carousel
                slides={[
                    {
                        key: 1,
                        content: <Image className="image left one" maw={240} mx="auto" radius="md" src={Celeste} alt="My Cat Celeste" />
                    },
                    {
                        key: 2,
                        content: <Image className="image left two" maw={240} mx="auto" radius="md" src={SoxKarma} alt="My Cat Sox and Dog Karma" />
                    },
                    {
                        key: 3,
                        content: <Image className="image right one" maw={240} mx="auto" radius="md" src={Karma} alt="My Dog Karma" />
                    },
                    {
                        key: 4,
                        content: <Image className="image right two" maw={240} mx="auto" radius="md" src={MattDad} alt="Me and my Dad" />
                    },
                    {
                        key: 5,
                        content: <Image className="image center one" maw={240} mx="auto" radius="md" src={Matt} alt="Me with an ice sculpture" />
                    },
                    {
                        key: 6,
                        content: <Image className="image center two" maw={240} mx="auto" radius="md" src={JaydeMatt} alt="Me and my Wife Jayde" />
                    }
                ]}
            />
            <Flex direction="column" justify="flex-start" align="center" mt="xl">
                <Title order={1}>About Me</Title>
                <Text fz="xl">
                    Hey there! I'm a Software Developer hailing from the lovely Savannah, Georgia. Currently, I'm with Altman Solon, contributing to their incredible product, Arrow. Our tool aids major internet providers in tasks like fiber routing, tower planning, and so much more.

                    I have a knack for simplifying complex datasets, making them easier for everyone to grasp. While I'm deeply immersed in coding, I also love collaborating with clients to understand their needs and leading teams. Throughout my 5-year journey in the tech world, I've discovered that my passions extend beyond coding. Now, I'm eager to dive deeper into the realms of management and leadership.
                </Text>
                <Space h='xl' />
                <Text fz="xl">
                    My journey into the world of professional development isn't quite the storybook tale. At the young age of 12, I was already tinkering with video game modifications. My love for software development ebbed and flowed, and when inspiration struck, I found myself diving into languages like Java, HTML, Python, and many others.

                    Come my 17th birthday, I took a bold step: college wasn't for me. Instead, I wanted to leap straight into the working world. So, I enrolled in Launch Academy, a coding bootcamp in Boston, and before I knew it, I was deep in the software universe. Alongside my growing development skills, I've earned certifications like AI/ML from IBM, UX Design from Google, and I'm not stopping there. My journey is all about growth and lifelong learning! 
                </Text>
                <Space h='xl' />
                <Text fz="xl">
                    Outside of my professional life, there's a lot more to me! I'm a loving husband and a proud parent to our fur babies – both cats and dogs. I'm a hardcore gamer at heart, a tech geek, and absolutely love rock climbing and snowboarding.
                    When I'm not doing all that, I'm juggling a range of personal projects. Not just the website you're currently on, but also unity games (where I hone my C# prowess) and several website prototypes that may or may not see the digital dawn. What I cherish most about software development is that, even in my free time, it never feels like a chore. I genuinely relish every moment of coding!
                </Text>
            </Flex>
        </>
    )
}
    
export default AboutMe
    
    
    
    