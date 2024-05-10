import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { PlayButton } from '../PlayButton/PlayButton';
import { PauseButton } from '../PauseButton/PauseButton';
import { SettingsButton } from '../SettingsButton/SettingsButton';
import { Wrap } from './Pomodoro.styled';

const red = '#813408';
const green = '#676127';
const black = '#141414';

export const Pomodoro = () => {
    return (
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                rotation: 1,
                strokeLinecap: 'butt',
                textColor: black,
                pathColor: red,
                trailColor: 'rgba(255, 255, 255, 0.8)',
            })} />
            <Wrap>
                <PlayButton />
                <PauseButton />
            </Wrap>
            <Wrap>
                <SettingsButton />
            </Wrap>
        </div>
    )
}