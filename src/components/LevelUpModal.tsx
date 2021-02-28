import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

/**
 * Pode ser usado em qualquer página que tenha acesso a ChallengesContext
 */
export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(challengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>2</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    );
}