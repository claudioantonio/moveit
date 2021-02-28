import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";
import { CountDownContext } from "../contexts/CountDownContext";

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge, startNewChallenge } = useContext(challengesContext);
    const { resetCountdown } = useContext(CountDownContext);

    console.log(activeChallenge);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button className={styles.challengeFailedButton} type="button" onClick={handleChallengeFailed}>Falhei</button>
                        <button className={styles.challengeSucceededButton} type="button" onClick={handleChallengeSucceded}>Completei</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeBoxContainer}>
                        <div className={styles.challengeNotActive}>
                            <strong>Finalize um ciclo para receber um desafio</strong>
                            <p>
                                <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios
                        </p>
                        </div>
                    </div>
                )}
        </div>
    );
}