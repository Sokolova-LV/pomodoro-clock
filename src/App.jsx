import { Pomodoro } from './Pomodoro/Pomodoro';
import { Settings } from './Settings/Settings';

import { useState } from 'react';
import SettingsContext from './SettingsContext/SettingsContext';

export const App = () => {
    const [showSettings, setShowSettings] = useState(true);
    const [workMinutes, setWorkMinutes] = useState('45');
    const [breakMinutes, setBreakMinutes] = useState('15');

    return (
        <div>
            <SettingsContext.Provider value={{
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes,
            }}>
                {showSettings ? <Settings /> : <Pomodoro />}
            </SettingsContext.Provider>
        </div>
    );
};