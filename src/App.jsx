import { Pomodoro } from './Pomodoro/Pomodoro';
import { Settings } from './Settings/Settings';

import { useState } from 'react';
import SettingsContext from './SettingsContext/SettingsContext';

export const App = () => {
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState('45');
    const [breakMinutes, setBreakMinutes] = useState('15');

    return (
        <div>
            <SettingsContext.Provider value={{
                showSettings,
                setShowSettings,
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