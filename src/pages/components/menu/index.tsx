import React from 'react';

import { Container, MenuLimite, Profile, UserImage, UserNome, Item, ItemImage, ItemLabel, MostrarMais, Icon, Borda, Group, Anuncio } from './styles';

const Menu: React.FC = () => {
    const Dados = [
        {
            title: 'COVID-19: Central de Informações',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png'
        },
        {
            title: 'Paginas',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png'
        },
        {
            title: 'Amigos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
        },
        {
            title: 'Messenger',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/SeXJIAlf_z-.png'
        },
        {
            title: 'Marketplace',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png'
        },
        {
            title: 'Videos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png'
        },
        {
            title: 'Campanhas de Arrecadação de fundos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png'
        },
        {
            title: 'Grupos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png'
        },
        {
            title: 'Eventos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png'
        },
        {
            title: 'Salvos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png'
        },
        {
            title: 'Lista de amigos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png'
        },
        {
            title: 'Lembranças',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png'
        },
        {
            title: 'Messenger Kids',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png'
        },
        {
            title: 'Mais Recentes',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png'
        },
        {
            title: 'Ativades de anúncios recentes',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png'
        },
        {
            title: 'Clima',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png'
        },
        {
            title: 'Ofertas',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png'
        },
        {
            title: 'Sugerir edições',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/02Dy4soPWIa.png'
        },
        {
            title: 'Recursos para Situações de Emergência',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png'
        },
        {
            title: 'Jogos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/5EU1wNhLmR6.png'
        },
        {
            title: 'Grupos de compra e venda',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/AzoqGSvagcH.png'
        },
        {
            title: 'Videos ao vivo',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png'
        },
        {
            title: 'Empregos',
            urlImage: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png'
        }
    ]

    const Groups = [
        {
            Image: 'https://images.unsplash.com/photo-1597877794942-ee2e9381c87c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            Title: 'Atalho aleatorio 1'
        }, 
        {
            Image: 'https://images.unsplash.com/photo-1597877794942-ee2e9381c87c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            Title: 'Atalho aleatorio 2'
        }, 
        {
            Image: 'https://images.unsplash.com/photo-1597877794942-ee2e9381c87c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            Title: 'Atalho aleatorio 3'
        }, 
        {
            Image: 'https://images.unsplash.com/photo-1597877794942-ee2e9381c87c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            Title: 'Atalho aleatorio 4'
        }, 
        {
            Image: 'https://images.unsplash.com/photo-1597877794942-ee2e9381c87c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            Title: 'Atalho aleatorio 5'
        }, 
    ]

    return (
        <Container>
            <MenuLimite>
                <Profile>
                    <UserImage src={'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg'} />
                    <UserNome>Nome Aleatorio Qualquer Ai</UserNome>
                </Profile>
            
                {
                    Dados.map((item, index) => (
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
                    Groups.map((item, index) => (
                        <Item key={index * 1}>
                            <ItemImage 
                                src={item.Image} 
                                className="grupo"
                            />
                            <ItemLabel>{item.Title}</ItemLabel>
                        </Item>
                    ))
                }
            </Group>
        </Container>
    );
}

export default Menu;