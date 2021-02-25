import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext);

    return (
        <div>
            {activeChallenge ? (
                <div>
                    <header>Ganhei {activeChallenge.amount} xp</header>
                    <main>
                        <img src={'icons/${activateChallenge.type}.svg'} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" onClick={resetChallenge}>Falhei</button>
                        <button type="button" onClick={completeChallenge}>Completei</button>
                    </footer>
                </div>
            ) : (
                    <h1>Not active challenge</h1>
                )}
        </div>
    );
}