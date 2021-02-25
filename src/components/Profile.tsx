import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";

export function Profile() {
    const { level } = useContext(challengesContext);
    return (
        <div>
            <img src="https://github.com/claudioantonio.png" alt="Cláudio Silva" />
            <div>
                <strong>Cláudio Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    {level}
                </p>
            </div>
        </div>
    );
}