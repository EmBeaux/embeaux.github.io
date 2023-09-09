import _React from 'react';
import { Flex } from '@mantine/core'
import Header from './header'
import Projects from './projects'
import ContactMeForm from './contact-me-form.tsx'
import './home.css'
function Home() {
    return (
        <Flex
            align="center"
            direction="column"
            style={{
                marginTop: "10%",
                textAlign: "center",
                width: "100%",
                height: "100%"
            }}
        >
            <Header />
            <Projects />
            <ContactMeForm />
        </Flex>
    )
}

export default Home
