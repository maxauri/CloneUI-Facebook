import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs'

export const Container = styled.div`
    width: 29%;
    height: 94vh;
    
    background-color: ${props => props.theme.colors.main};

    position: fixed;
    top: 55px;

    overflow: hidden;
    
    &:hover{
        overflow: auto;
    }

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.main};
    }

    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.title === 'light'? '#3A3B3C' : props.theme.colors.backgroundIcon};
    }
`;

export const MenuLimite = styled.ul`
    list-style: none;
`;

export const Borda = styled.div`
    padding: 10px 0px 0px 0px;
    margin-left: 20px;

    width: calc(100% - 92.5px);

    border-bottom: 4px solid ${props =>  props.theme.colors.headerColor};
`;

export const Profile = styled.li`
    margin: 10px 5px 0px;

    display: flex;
    align-items: center;

    cursor: pointer;

    width: calc(100% - 105px);

    font-size: 17px;

    padding: 7.5px 15px;

    &:hover{
        background-color: ${props => props.theme.colors.backgroundIcon};

        border-radius: 10px;
    }
`;

export const UserImage = styled.img`
    width: 35px;
    height: 35px;

    border-radius: 25px;
`;

export const UserNome = styled.h4`
    color: ${props => props.theme.colors.label};

    margin-left: 16px;

    font-weight: normal;
`;

export const Item = styled.li`
    margin: 0px 5px;

    display: flex;
    align-items: center;

    cursor: pointer;

    width: calc(100% - 105px);

    font-size: 17px;

    padding: 7.5px 15px;

    &:hover{
        background-color: ${props => props.theme.colors.backgroundIcon};

        border-radius: 10px;
    }

    &.hide {
        display: none;
    }
`;

export const ItemImage = styled.img`
    &.grupo{
        width: 45px;
        height: 45px;

        border-radius: calc(36px / 2);
    }
`;

export const ItemLabel = styled.h4`
    color: ${props => props.theme.colors.label};

    margin-left: 16px;
    padding-right: 16px;

    font-weight: normal;

    cursor: pointer;
`;

export const MostrarMais = styled(BsChevronDown)`
    width: 20px;
    height: 20px;

    color: ${props => props.theme.colors.label};

    cursor: pointer;
`;

export const Icon = styled.div`
    background-color: ${props => props.theme.colors.backgroundIcon};
    
    width: 40px;
    height: 40px;

    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 400ms;

    &.virar {
        transform: rotate(180deg);
    }
`;

export const Group = styled.ul`
    list-style: none;
`;

export const Anuncio = styled.h3`
    color: ${props => props.theme.colors.headerIcon};

    font-weight: normal;

    margin: 20px 20px 10px;
`;
