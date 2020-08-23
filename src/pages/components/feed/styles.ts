import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { AiOutlineArrowRight } from 'react-icons/ai';
 
export const Container = styled.div`
    width: 39.8%;

    background-color: ${props => props.theme.colors.main};

    position: absolute;
    top: 55px;
    left: 29%;
`;

export const Stores = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    margin: 10px 0px;
`;

export const CreateStore = styled.div`
    width: 108px;
    height: 198px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.headerColor};

    position: relative;

    cursor: pointer;

    margin: 10px 5px; 
`;

export const UserImage = styled.img`
    width: 108px;
    height: 125px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: calc(36px / 2);
    border: 3px solid ${props => props.theme.colors.headerColor};

    position: absolute;
    left: 37.5px;
    bottom: 53px;

    background-color: ${props => props.theme.colors.borderStores2};
`;

export const PlusIcon = styled(GoPlus)`
    color: #FFF;
`;

export const Label = styled.h4`
    color: ${props => props.theme.colors.label};

    font-size: 17.5px;

    margin-top: 17.5px;
    text-align: center;
`;

export const Store = styled.div`
    width: 108px;
    height: 198px;

    position: relative;

    border-radius: 10px;

    cursor: pointer;

    & + &{
        margin-left: 5px;
    }
`;

export const UserAccount = styled.img`
    width: 25px;
    height: 25px;

    border-radius: 12.5px;

    border: 2px solid ${props => props.theme.colors.stores};

    position: absolute;
    top: 10px;
    left: 10px;
`;

export const StoreImage = styled.img`
    width: 108px;
    height: 198px;

    object-fit: cover;

    border-radius: 10px;
`;

export const StoreNome = styled.h4`
    position: absolute;
    bottom: 10px;
    left: 12.5px;

    color: ${props => props.theme.colors.label};
`;

export const MostrarMais = styled.div`
    background-color: ${props => props.theme.colors.headerColor};

    width: 36px;
    height: 36px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -15px;

    z-index: 6;
`;

export const Mais = styled(AiOutlineArrowRight)`
    color: ${props => props.theme.title === 'light'? '#65676B' : '#B0B3B8'};

    width: 15px;
    height: 15px;
`;
