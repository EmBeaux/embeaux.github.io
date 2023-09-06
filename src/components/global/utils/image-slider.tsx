import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Image } from '@mantine/core'
import './image-slider.css'

interface ImageSliderProps {
    images: string[]
}

function ImageSlider(props: ImageSliderProps) {

    return (
        <ImgComparisonSlider hover className="image-slider">
            {props.images.map((image, index) => (
                <Image
                    slot={index === 0 ? 'first' : 'second'}
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    radius="xl"
                />
            ))}
        </ImgComparisonSlider>
    )
}

export default ImageSlider