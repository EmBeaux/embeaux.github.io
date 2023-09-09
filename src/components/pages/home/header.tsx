import React from 'react';
import { Title, Flex, Space } from '@mantine/core'
import ScrollingText from '../utils/scrolling-text'

function Header() {
    return (
        <Flex direction="column" align="center" className="info-text">
            <Title order={1}>Hi, I'm Matthew Bowler!</Title>
            <Space h="lg" />
            <ScrollingText
                phrases={[
                    "a Full Stack Software Developer.",
                    "specialized in the MERN stack.",
                    "utilizing C#, Python, and Java in hobby projects.",
                    "in love with finding new ways to use software.",
                    "excited for a future in management and mentorship.",
                    "always looking for ways to improve myself.",
                ]}
                prepend='I am '
            />
        </Flex>
    )
}

export default Header