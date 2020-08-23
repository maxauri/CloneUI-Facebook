import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';

export const Container = styled.header`
    width: 100%;
    height: 55px;

    background-color: ${props => props.theme.colors.headerColor};

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    z-index: 10;
`; 

export const Left = styled.div`
    display: flex;
    flex-direction: row;

    width: 30%;
`;

export const Logo = styled.img`
    margin: 0px 10px 0px 15px;
`;

export const SeparatorIcon = styled.div`
    width: 250px;
    height: 40px;

    margin-top: 5px;

    border: 0;
    border-radius: 100px;

    padding-left: 15px;

    display: flex;
    align-items: center;

    background-color: ${props => props.theme.colors.backgroundInput};
`;
 
export const Search = styled(BsSearch)`
    width: 30px;
    height: 15px;

    color: ${props => props.theme.colors.colorInput};

    margin: 0px 10px 0px -2px;

    cursor: pointer;
`;

export const Pesquisar = styled.input`
    border: 0;
    outline: 0;

    background-color: transparent;
    color: ${props => props.theme.colors.colorInput};

    padding-top: 2.5px;

    width: 220px;
    height: 40px;
`;

export const Center = styled.div`
    width: 40%;
`;

export const Right = styled.div`
    width: 30%;

    margin-right: -33px;
    padding-left: 33px;

    display: flex;
    flex-direction: row;
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;

    margin-left: -12px;
`;

export const NavItem = styled.li`
    list-style: none;

    cursor: pointer;

    &.active {
        border-bottom: 3px solid ${props => props.theme.colors.iconsNavActive};
    }

    &.desactive:hover{
        background-color: ${props => props.theme.colors.backgroundIcon};

        padding: -1px -5px;
        
        border-radius: 10%;
    }
`;

export const NavIcon = styled.img`
    object-fit: scale-down;

    width: 30px; 
    height: 30px;

    padding: 8.5px 42px;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
`;

export const UserImage = styled.img`
    width: 30px;
    height: 30px;

    border-radius: 15px;
`;

export const UserNome = styled.h3`
    color: ${props => props.theme.colors.label};

    margin: 0px 15px 0px 10px;
`;

export const UserIcons = styled.div`
    display: flex;
    flex-direction: row;
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

    & + & {
        margin-left: 10px;
    }

    &:last-child{
        margin-right: 5px;
    }
`;

export const Mais = styled(GoPlus)`
    color: ${props => props.theme.colors.headerIcon};

    object-fit: scale-down;

    width: 25px;
`;

export const Messeger = styled(FaFacebookMessenger)`
    color: ${props => props.theme.colors.headerIcon};
    
    object-fit: scale-down;

    width: 25px;
`;

export const Notificacao = styled.img``;

export const MostrarConfig = styled(AiFillCaretDown)`
    color: ${props => props.theme.colors.headerIcon};

    object-fit: scale-down;

    width: 25px;
`;
