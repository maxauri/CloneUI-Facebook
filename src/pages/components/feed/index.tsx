import React from 'react';
import { Tema } from '../../../App';
import Dados from '../../../Dados.json';

import { useProfile } from '../../context';

import { 
    Container, Stores, CreateStore, UserImage, Icon, PlusIcon, Label, Store, UserAccount, StoreImage, StoreNome, MostrarMais, Mais, NewPost, UserPhoto, InputText, Actions, Action, AoVivo, Divisao, ActionNome, Photo, Happy,
    Salas, Divisor, CameraIcon, Users, CreateSala, User, Separator, Escurecer, Lado, LadoIcon 
} from './styles';

import Post from '../post';

interface Props {
    Theme: Tema;
}

const Feed: React.FC<Props> = ({ Theme }) => {
    const { ProfileImage } = useProfile();

    return (
        <Container>
            <Stores>
                <CreateStore>
                    <UserImage src={ProfileImage} />
                    <Icon>
                        <PlusIcon />
                    </Icon>
                    <Label>Criar um story</Label>
                </CreateStore>
                
                {
                    Dados.stores.map((item, index) => (
                        <Store key={index * 4}>
                            <UserAccount src={item.userImage} />
                            <StoreImage src={item.conteudo} />
                            <StoreNome>{item.userNome}</StoreNome>
                        </Store>
                    ))
                }

                <MostrarMais>
                    <Mais />
                </MostrarMais>
            </Stores>
            
            <NewPost>
                <Divisao>
                    <UserPhoto src={ProfileImage} />
                    <InputText 
                        type="text" 
                        placeholder="No que você está pensando, Nome Aleatorio?"
                    />
                </Divisao>
                
                <Actions>
                    <Action>
                        <AoVivo />
                        <ActionNome>Video ao Vivo</ActionNome>
                    </Action>

                    <Action>
                        <Photo />
                        <ActionNome>Foto/vídeo</ActionNome>
                    </Action>

                    <Action>
                        <Happy />
                        <ActionNome>Sentimento/atividade</ActionNome>
                    </Action>
                </Actions>
            </NewPost>
        
            <Salas>
                <Divisor>
                    <Separator>
                        <CameraIcon />
                        <Label className="salas">Salas</Label>
                    </Separator>

                    <Separator>
                        <Label className="createSala">Criar</Label>
                    </Separator>
                </Divisor>
                
                <Users id="UsersRef">
                    <CreateSala>
                        <UserPhoto 
                            className="create"
                            src={ProfileImage}
                        />
                        <Escurecer>
                            <PlusIcon className="create" />
                        </Escurecer>
                    </CreateSala>

                    {
                        Dados.amigos.map((item, index) => (
                            <User 
                                key={index * 10}
                                className={item.online? 'online' : ''}
                            >
                                <UserPhoto src={item.image} />
                            </User>
                        ))
                    }
                    <Lado 
                        className="left hide"
                        onClick={() => {
                            const User = document.querySelector('#UsersRef')!;
                            const left =  document.querySelector('.left')!;
                            const right =  document.querySelector('.right')!;
                            const scroll = User.scrollLeft;

                            User.scrollLeft -= 160;

                            if(scroll < 1){
                                left.classList.add('hide');
                                right.classList.remove('hide');

                                return;
                            }

                            if(scroll > 1){
                                right.classList.remove('hide');
                                left.classList.remove('hide');
                            }
                        }}
                    >
                        <LadoIcon className="left" />
                    </Lado>
                    
                    <Lado 
                        className="right"
                        onClick={() => {
                            const User = document.querySelector('#UsersRef')!;
                            const left =  document.querySelector('.left')!;
                            const right =  document.querySelector('.right')!;
                            const scroll = User.scrollLeft;
                            
                            User.scrollLeft += 150;

                            if(scroll === User.scrollLeft){
                                right.classList.add('hide');
                                left.classList.remove('hide');

                                return;
                            }

                            if(scroll !== User.scrollLeft && User.scrollLeft > 1){
                                left.classList.remove('hide');
                                right.classList.remove('hide');
                            }
                        }}
                    >
                        <LadoIcon />
                    </Lado>
                </Users>
            </Salas>
        
            {
                Dados.postagem.map((item, index) => (
                    <Post 
                        key={index * 100} 
                        Theme={Theme}
                        userName={item.userNome}
                        userImage={item.userImage}
                        tempo={item.tempo}
                        postagem={item.postagem}
                    />
                ))
            }
        </Container>
    );
}

export default Feed;