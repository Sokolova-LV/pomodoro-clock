import { Container, Label, Wrap } from './Settings.styled';
import ReactSlider from 'react-slider';
import './slider.css';
import SettingsContext from '../SettingsContext/SettingsContext';
import { useContext } from 'react';
import { BackButton } from '../BackButton/BackButton';

export const Settings = () => {
    const settingsInfo = useContext(SettingsContext);
    return (
        <Container>
            <Label>work: {settingsInfo.workMinutes}:00</Label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />
            <Label>break: {settingsInfo.breakMinutes}:00</Label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
            <Wrap>
                <BackButton />
            </Wrap>
        </Container>
    );
};