import { useState, useEffect } from 'react'
import { Text } from '@mantine/core'

interface ScrollingTextProps {
    phrases: string[];
    prepend?: string;
}

function ScrollingText(props: ScrollingTextProps) {
    const [currentPhrase, setCurrentPhrase] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [direction, setDirection] = useState("forward");
    const [paused, setPaused] = useState(false);

    
    useEffect(() => {
        const timer = setInterval(() => {
            if (paused) return;
            const targetPhrase = props.phrases[phraseIndex];
            const baseText = props.prepend || "";

            if (direction === "forward") {
                setCurrentPhrase(baseText + targetPhrase.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
                
                if (charIndex + 1 === targetPhrase.length) {
                    setDirection("backward");
                }
            } else {
                setCurrentPhrase(baseText + targetPhrase.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
                
                if (charIndex - 1 === 0) {
                    setDirection("forward");
                    setPhraseIndex((phraseIndex + 1) % props.phrases.length);
                }
            }

            if (props.phrases.includes(targetPhrase.substring(0, charIndex + 1))) {
                setPaused(true);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [phraseIndex, charIndex, direction, paused]);

    useEffect(() => {
        if (paused) {
            setTimeout(() => {
                setPaused(false);
            }, 1000);
        }
    }, [paused]);

    return (
        <Text fw={700} className="changing-info"> {currentPhrase} </Text>
    )
}

export default ScrollingText