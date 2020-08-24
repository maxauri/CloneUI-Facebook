import React from 'react';
import { Tema } from '../../App';

import Header from '../components/header';
import Content from '../components/main';
import Menu from '../components/menu';
import Feed from '../components/feed';
import AmigosOnline from '../components/online';

import { Container } from './styles';

interface HomeProps {
  toggle(): void;
  Theme: Tema;
}

const Home: React.FC<HomeProps> = ({ toggle, Theme }) => {
  return (
    <Container>
      <Header Theme={Theme} toggle={toggle} />
      <Content>
        <Menu />
        <Feed Theme={Theme} />
        <AmigosOnline />
      </Content>
    </Container>
  );
}

export default Home;