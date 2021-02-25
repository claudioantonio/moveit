import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: String;
    amount: number;

}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface challengesProviderProps {
    children: ReactNode;
}

// o trecho "... as ChallengeContextData" faz a interface se reconhecida nos outros módulos
// ou seja, não precisa exportar ChallengeContextData com export
export const challengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: challengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    return (
        <challengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
            }}>
            {children}
        </challengesContext.Provider>
    );
}