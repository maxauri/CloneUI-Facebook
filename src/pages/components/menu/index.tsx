import React from 'react';
import Dados from '../../../Dados.json';

import { Container, MenuLimite, Profile, UserImage, UserNome, Item, ItemImage, ItemLabel, MostrarMais, Icon, Borda, Group, Anuncio } from './styles';

const Menu: React.FC = () => {
 
    return (
        <Container>
            <MenuLimite>
                <Profile>
                    <UserImage src={'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg'} />
                    <UserNome>Nome Aleatorio Qualquer Ai</UserNome>
                </Profile>
            
                {
                    Dados.MenuList.map((item, index) => (
                        <Item
                            key={index * 2}
                            className={index >= 4? 'itemMenu hide' : 'itemMenu'}
                        >
                            <ItemImage src={item.urlImage} />
                            <ItemLabel>{item.title}</ItemLabel>
                        </Item>
                    ))
                }

                <Item
                    onClick={() => {
                        const girar = document.querySelector('.girar')!;
                        const Items = document.querySelectorAll('.itemMenu')!;

                        girar.classList.toggle('virar');

                        Items.forEach((Element, index) => {
                            Items[index].classList.toggle('hide');
                        });
                    }}
                >   
                    <Icon className="girar">
                        <MostrarMais />
                    </Icon>
                    <ItemLabel>Mostrar Mais</ItemLabel>
                </Item>
            </MenuLimite>
            <Borda />
            
            <Group>
                <Anuncio>Seus atalhos</Anuncio>
                
                {
                    Dados.grupos.map((item, index) => (
                        <Item key={index * 1}>
                            <ItemImage 
                                src={item.Image} 
                                className="grupo"
                            />
                            <ItemLabel>{item.title}</ItemLabel>
                        </Item>
                    ))
                }
            </Group>
        </Container>
    );
}

export default Menu;