import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsImages, BsFillCameraVideoFill, BsCameraVideoFill, BsChevronRight } from 'react-icons/bs';
import { BiHappyAlt } from 'react-icons/bi';

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

    margin: 10px 7.5px 10px 0px; 
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

    &.createSala{
        text-align: none;
        font-weight: normal;

        color: ${props => props.theme.colors.borderStores2};
    }

    &.salas{
        text-align: none;

        margin-left: 10px;
    }
`;

export const Store = styled.div`
    width: 108px;
    height: 198px;

    position: relative;

    border-radius: 10px;

    cursor: pointer;

    & + &{
        margin-left: 7.5px;
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
    
    cursor: pointer;
`;

export const Mais = styled(AiOutlineArrowRight)`
    color: ${props => props.theme.title === 'light'? '#65676B' : '#B0B3B8'};

    width: 15px;
    height: 15px;
`;

export const NewPost = styled.div`
    background-color: ${props => props.theme.colors.headerColor};

    margin-bottom: 15px;

    border-radius: 10px;
`;

export const UserPhoto = styled.img`
    width: 35px;
    height: 35px;

    border-radius: calc(35px / 2);

    margin-right: 10px;
`;

export const InputText = styled.input`
    border: 1px solid ${props => props.theme.colors.backgroundInput};
    border-radius: 15px;
    outline: 0;

    width: 90%;
    height: 35px;

    padding-left: 15px;

    background-color: ${props => props.theme.colors.backgroundInput};
    color: ${props => props.theme.colors.label};

    &:focus{
        border: 1px solid #1877F2;
    }
`;

export const Divisao = styled.div`
    display: flex;
    align-items: center;

    width: 95%;

    margin: 0px 2.5%;
    padding: 10px 0px;

    border-bottom: 1px solid ${props => props.theme.colors.backgroundInput};
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Action = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    padding: 10px;

    margin-left: 25px;

    cursor: pointer;

    border-radius: 10px;

    &:hover{
        background-color: ${props => props.theme.colors.backgroundIcon};
    }
`;

export const ActionNome = styled.h4`
    margin-left: 10px;

    color: ${props => props.theme.title === 'light'? '#65676B' : '#B0B3B8'};
`;

export const AoVivo = styled(BsCameraVideoFill)`
    color: red;

    width: 20px;
    height: 20px;
`;

export const Photo = styled(BsImages)`
    color: green;

    width: 20px;
    height: 20px;
`;

export const Happy = styled(BiHappyAlt)`
    color: gold;
    
    width: 20px;
    height: 20px;
`;

export const Salas = styled.div`
    border-radius: 10px;

    background-color: ${props => props.theme.colors.headerColor};

    margin-bottom: 15px;
`;

export const Divisor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0px 15px;
`;

export const CameraIcon = styled(BsFillCameraVideoFill)`
    width: 20px;
    height: 20px;

    margin-top: 17.5px;

    color: purple;
`;

export const Users = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    overflow: hidden;

    padding: 10px;
`;

export const CreateSala = styled.div`
    position: relative;

    margin-top: 7px;

    cursor: pointer;
`;

export const User = styled.div`
    position: relative;
    
    margin-top: 7px; 

    cursor: pointer;
    
    &.online::after{
        content: '';
        
        width: 8px;
        height: 8px;

        background-color: darkgreen;

        border-radius: 4px;
        border: 1px solid ${props => props.theme.colors.headerColor};

        position: absolute;
        bottom: 3px;
        right: 12px;
    }
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;

    margin-top: -8px;
`;

export const Escurecer = styled.div`
    width: 35px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;

    border-radius: calc(35px / 2);

    background-color: rgba(0, 0, 0, .4);
`;

export const Lado = styled.div`
    width: 36px;
    height: 36px;

    background-color: ${props => props.theme.colors.backgroundInput};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 18px;

    cursor: pointer;

    position: absolute;
    right: 15px;

    &.left{
        left: 15px;
    }

    &.hide {
        display: none;
    }
`;

export const LadoIcon = styled(BsChevronRight)`
    width: 18px;
    height: 18px;

    color: ${props => props.theme.colors.colorInput};

    &.left{
        transform: rotate(180deg);
    }
`;