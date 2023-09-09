import _React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Image } from '@mantine/core'
import './image-slider.css'

interface ImageSliderProps {
    images: string[]
}

function ImageSlider(props: ImageSliderProps) {

    return (
        <div className="image-slider">
            <ImgComparisonSlider hover>
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
        </div>
    )
}

export default ImageSlider