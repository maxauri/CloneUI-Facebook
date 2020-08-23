import React, { createContext, useContext, useState } from 'react';

type Props = {
    Change: string;
    setChange: any;
}

const Context = createContext<Partial<Props>>({});

const Contexto: React.FC = ({ children }) => {
    const [Change, setChange] = useState('');

    return (
        <Context.Provider
            value={{
                Change, setChange
            }}
        >
            {children}
        </Context.Provider>
    );
}

export function useTheme(){
    const context = useContext(Context);
    const { Change, setChange } = context;

    return { Change, setChange }
}

export default Contexto;