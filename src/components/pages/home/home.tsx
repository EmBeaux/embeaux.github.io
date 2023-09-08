import { Flex } from '@mantine/core'
import Header from './header'
import Projects from './projects'
import './home.css'
function Home() {
    return (
        <Flex align="center" direction="column" style={{ marginTop: "10%", textAlign: "center", width: "100%", height: "60em" }}>
            <Header />
            <Projects />
        </Flex>
    )
}

export default Home
