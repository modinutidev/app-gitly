import React, { createContext, useState } from 'react';

interface NextContextProps {
    connected: boolean;
    onUpdateConnected(connected: boolean): void;
};

export const NetContext = createContext({} as NextContextProps);
const NetProvider: React.FC = ({ children }) => {
    const [connected, setConnected] = useState<boolean>(false);
    const handleUpdateState = (connected: boolean) => {
        setConnected(connected);
    };

    return (
        <NetContext.Provider value={{ 
            connected,
            onUpdateConnected: handleUpdateState
        }}>
            { children }
        </NetContext.Provider>
    );
}

export default NetProvider;