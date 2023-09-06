import { Flex, Group, Space, Container, Text, Title } from '@mantine/core'
import './home.css'
import ScrollingText from '../utils/scrolling-text'
function Home() {


    return (
        <>
            <Flex align="center" direction="column" style={{ marginTop: "10%" }}>
                <Flex direction="column" align="center" className="info-text">
                    <Title order={1}>Hi, I'm Matthew Bowler!</Title>
                    
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
            </Flex>
        </>
    )
}

export default Home
