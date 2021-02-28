import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { challengesContext } from './ChallengesContext';

interface CountDownContextData {
    minutes: string;
    seconds: string;
    startCountdown: () => void;
    isActive: boolean;
    resetCountdown: () => void;
    hasFinished: boolean;
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);


let countdownTimeout: NodeJS.Timeout;


export function CountDownProvider({ children }: CountDownProviderProps) {
    const { startNewChallenge } = useContext(challengesContext);

    const countdownDuration = 0.1 * 60;
    const [time, setTime] = useState(countdownDuration);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        console.log('startCountdown called')
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(countdownDuration);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountDownContext.Provider value={{
            minutes: String(minutes),
            seconds: String(seconds),
            startCountdown: startCountdown,
            isActive: isActive,
            resetCountdown: resetCountdown,
            hasFinished: hasFinished,
        }}>
            {children}
        </CountDownContext.Provider>
    );
}