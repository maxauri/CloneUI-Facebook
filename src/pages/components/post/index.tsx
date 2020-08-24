import React, { useState } from 'react';
import { Tema } from '../../../App';

import { Container, Header, UserImage, UserNome, Hora, Separator, Story, Mundo, TresPonto, Main, Conteudo, Feedback, Options, OptionsImg, Label, PhotoUser, Mais } from './styles';

import { LikeDarkAtivo, LikeDarkDesativado, LikeLightAtivo, LikeLightDesativado, ChatDark, ChatLight, ShareDark, ShareLight } from './imagens';

interface Props {
  userName: string;
  userImage: string;
  tempo: string;
  postagem: string;
  Theme: Tema;
}

const Post: React.FC<Props> = ({ userName, userImage, tempo, postagem, Theme }) => {
  const LikeAtivo = Theme.title === 'light'? LikeLightAtivo : LikeDarkAtivo;
  const LikeDesativado = Theme.title === 'light'? LikeLightDesativado : LikeDarkDesativado;
  const [isLike, setisLike] = useState(false);

  return (
    <Container>
      <Header>
        <Separator>
          <Story>
            <UserImage src={userImage} />
          </Story>

          <Separator className="user">
            <UserNome>{userName}</UserNome>

            <Separator>
              <Hora>{tempo}</Hora>
              <Mundo />
            </Separator>

          </Separator>
        </Separator>

        <TresPonto />
      </Header>

      <Main>
        <Conteudo src={postagem} />
      </Main>

      <Feedback>
        <Options onClick={() => setisLike(!isLike)} >
          <OptionsImg src={isLike? LikeAtivo : LikeDesativado } />
          <Label className={isLike? 'ativo' : ''}>Curtir</Label>
        </Options>

        <Options>
          <OptionsImg src={Theme.title === 'light'? ChatLight : ChatDark} />
          <Label>Comentar</Label>
        </Options>

        <Options>
          <OptionsImg src={Theme.title === 'light'? ShareLight : ShareDark} />
          <Label>Compartilhar</Label>
        </Options>

        <Options className="Photo" >
          <PhotoUser src="https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg" />
          <Mais />
        </Options>
      </Feedback>
    </Container>
  );
}

export default Post;