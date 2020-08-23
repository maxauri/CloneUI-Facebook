import React from 'react';

import { Container, Stores, CreateStore, UserImage, Icon, PlusIcon, Label, Store, UserAccount, StoreImage, StoreNome, MostrarMais, Mais } from './styles';

const Feed: React.FC = () => {
    const repetir = [1, 2, 3, 4];

    return (
        <Container>
            <Stores>
                <CreateStore>
                    <UserImage src="https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg" />
                    <Icon>
                        <PlusIcon />
                    </Icon>
                    <Label>Criar um story</Label>
                </CreateStore>
                
                {
                    repetir.map((item) => (
                        <Store key={item * 4}>
                            <UserAccount src="https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg" />
                            <StoreImage src="https://images.unsplash.com/photo-1597840943307-f02a5235f795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <StoreNome>Amigo Aleatorio {item}</StoreNome>
                        </Store>
                    ))
                }

                <MostrarMais>
                    <Mais />
                </MostrarMais>
            </Stores>
            

        </Container>
    );
}

export default Feed;