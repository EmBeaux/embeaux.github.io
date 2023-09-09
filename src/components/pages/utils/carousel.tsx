import React, { useState } from 'react'
import { Flex, ActionIcon } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowBigRightLine, IconArrowBigLeftLine } from '@tabler/icons-react'
import Carousel from 'react-spring-3d-carousel'

interface CarouselComponentProps {
    slides: Array<{ key: number, content: React.ReactElement}>
}

function CarouselComponent(props: CarouselComponentProps) {
    const [index, setIndex] = useState(0)
    const matches = useMediaQuery('(max-width: 900px)');
    return (
        <div
            style={{
                width: '100%',
                height: '40em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Carousel
                slides={props.slides}
                showNavigation={false}
                offsetRadius={matches ? 1 : 2}
                goToSlide={index}
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
    
export default CarouselComponent
    
    
    
    