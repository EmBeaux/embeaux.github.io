import { Image } from '@mantine/core'
import Carousel from '../utils/carousel'
import Celeste from '../../../assets/celeste.jpg'
import SoxKarma from '../../../assets/sox-karma.jpg'
import Karma from '../../../assets/karma.jpg'
import MattDad from '../../../assets/matt-dad.jpg'
import Matt from '../../../assets/matt.jpg'
import JaydeMatt from '../../../assets/jayde-matt.jpeg'

function AboutMe() {
    return (
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
    )
}
    
export default AboutMe
    
    
    
    