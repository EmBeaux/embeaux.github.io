import { useState, useEffect } from 'react'
import { Text } from '@mantine/core'

interface ScrollingTextProps {
    phrases: string[];
    prepend?: string;
}

function ScrollingText({ phrases, prepend = "" }: ScrollingTextProps) {
    const [currentPhrase, setCurrentPhrase] = useState(prepend);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | ReturnType<typeof setTimeout>;

        if (pause) {
            timer = setTimeout(() => setPause(false), 1000);
        } else {
            timer = setInterval(() => {
                const targetPhrase = phrases[phraseIndex];
                const progress = targetPhrase.substring(0, charIndex + 1);
                setCurrentPhrase(prepend + progress);

                if (charIndex === targetPhrase.length) {
                    setPause(true);
                    setCharIndex(charIndex - 1);
                } else if (charIndex === 0 && pause === false) {
                    setPhraseIndex((phraseIndex + 1) % phrases.length);
                } else if (!pause) {
                    setCharIndex(pause ? charIndex : charIndex + (targetPhrase.length === charIndex ? -1 : 1));
                }
            }, 50);
        }

        return () => clearTimeout(timer);
    }, [phraseIndex, charIndex, pause, prepend, phrases]);

    return <Text fw={700} className="changing-info">{currentPhrase}</Text>;
}

export default ScrollingText;