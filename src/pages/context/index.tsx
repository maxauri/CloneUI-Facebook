import React, { createContext, useContext, useState } from 'react';

type Props = {
    Change: string;
    setChange: any;

    ProfileImage: string;
    setProfileImage: any;
}

const Context = createContext<Partial<Props>>({});

const Contexto: React.FC = ({ children }) => {
    const [Change, setChange] = useState('');
    const [ProfileImage, setProfileImage] = useState('https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg');

    return (
        <Context.Provider
            value={{
                Change, setChange,
                ProfileImage, setProfileImage
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

export function useProfile(){
    const context = useContext(Context);
    const { ProfileImage, setProfileImage } = context;
    
    return { ProfileImage, setProfileImage }

}

export default Contexto;