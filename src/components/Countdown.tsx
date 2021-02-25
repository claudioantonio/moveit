import { useState } from "react";


export function Countdown() {
    const [time, setTime] = useState(25 * 60);


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {

    }

    return (
        <div>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>

            <button type="button" onClick={() => startCountdown()}>Iniciar um ciclo</button>
        </div>
    );
}