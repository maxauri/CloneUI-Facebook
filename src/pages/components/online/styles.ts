import styled from 'styled-components';

export const Container = styled.div`
    width: 28.5%;
    height: 94vh;

    padding-left: 40px;

    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.label};

    position: fixed;
    top: 55px;
    right: 0;
`;