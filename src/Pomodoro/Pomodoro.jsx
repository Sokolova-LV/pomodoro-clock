import { buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { PlayButton } from '../PlayButton/PlayButton';
import { PauseButton } from '../PauseButton/PauseButton';
import { SettingsButton } from '../SettingsButton/SettingsButton';
import { StyledCircularProgressbar, Wrap } from './Pomodoro.styled';

import { useContext, useEffect, useRef, useState } from 'react';
import SettingsContext from '../SettingsContext/SettingsContext';

const red = '#813408';
const green = '#676127';
const black = '#141414';

export const Pomodoro = () => {
    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    };

    function tick() {
        secondsLeftRef.current = secondsLeftRef.current - 1;
        setSecondsLeft(secondsLeftRef.current);
    };

    function initTimer() {
        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);
    };

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = mode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <div>
            <StyledCircularProgressbar value={percentage} text={minutes + ':' + seconds} styles={buildStyles({
                rotation: 1,
                strokeLinecap: 'butt',
                textColor: black,
                pathColor: mode === 'work' ? red : green,
                trailColor: 'rgba(255, 255, 255, 0.8)',
            })} />
            <Wrap>
                {isPaused
                    ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
                    : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}    
            </Wrap>
            <Wrap>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </Wrap>
        </div>
    )
}