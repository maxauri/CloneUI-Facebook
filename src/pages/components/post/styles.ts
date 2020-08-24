import styled from 'styled-components';
import { BiWorld, BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.div`
    height: 505px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.headerColor};

    margin-bottom: 15px; 
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 20px;
`;

export const UserImage = styled.img`
    width: 36px;
    height: 36px;

    border-radius: 18px;

    border: 2px solid ${props => props.theme.colors.headerColor};
`;

export const UserNome = styled.h4`
    color: ${props => props.theme.colors.label};

    margin-left: 10px;
`;

export const Hora = styled.p`
    color: ${props => props.theme.title === 'light'? '#65676B': '#B0B3B8'};

    margin: 5px 0px 5px 10px;

    font-size: 14px;
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;

    &.user{
        display: block;
    }    
`;

export const Story = styled.div`
    width: 40px;
    height: 40px;

    border-radius: 20px;

    border: 2px solid ${props => props.theme.colors.borderStores2};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Mundo = styled(BiWorld)`
    color: ${props => props.theme.title === 'light'? '#65676B': '#B0B3B8'};

    width: 15px;
    height: 15px;

    margin-left: 10px;
`;

export const TresPonto = styled(BiDotsHorizontalRounded)`
    color: ${props => props.theme.title === 'light'? '#65676B': '#B0B3B8'};

    width: 20px;
    height: 20px;
`;

export const Main = styled.div``;

export const Conteudo = styled.img`
    width: 100%;
    height: 385px;

    margin: 3px 0px 5px;
`;

export const Feedback = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;

    margin-left: 5%;

    border-top: 1px solid ${props => props.theme.colors.backgroundIcon};
`;

export const Options = styled.div`
    display: flex;
    align-items: center;

    padding: 8px 25px;

    border-radius: 10px;

    cursor: pointer;

    &.Photo{
        padding: 8px 5px;
    }

    &:hover{
        background-color: ${props => props.theme.colors.backgroundIcon}
    }
`;

export const OptionsImg = styled.img`
    width: 22px;
    height: 22px;

    object-fit: scale-down;
`;

export const Label = styled.h4`
    color: ${props => props.theme.title === 'light'? '#65676B': '#B0B3B8'};

    margin-left: 10px;

    font-weight: normal;

    &.ativo {
        color: #2D88FF;
    }
`;

export const PhotoUser = styled.img`
    width: 20px;
    height: 20px;

    border-radius: 10px;

    object-fit: scale-down;
`;

export const Mais = styled(AiFillCaretDown)`
    color: ${props => props.theme.title === 'light'? '#65676B': '#B0B3B8'};

    margin-left: 1.5px;
`;