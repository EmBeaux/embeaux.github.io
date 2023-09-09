import React from 'react';
import { Image } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface MantineStyles {
    [key: string]: { [key: string]: string }
}

interface HoverImageProps {
    src: string,
    width: string,
    radius?: string,
    styles?: MantineStyles,
    onClick: () => void,
    hoverSrc?: string
}



function HoverImage(props: HoverImageProps) {
    const { hovered, ref } = useHover();
    const styles: MantineStyles = props.styles || { root: {} };

    return (
        <Image
            width={props.width}
            radius={props.radius}
            src={hovered && props.hoverSrc ? props.hoverSrc : props.src}
            ref={ref}
            styles={{
                ...styles,
                root: {
                    ...styles.root,
                    transition: 'margin 0.4s ease',
                    marginTop: hovered ? '-10px' : '0',
                    cursor: 'pointer'
                }
            }}
            onClick={props.onClick}
        />
    )
}

export default HoverImage;