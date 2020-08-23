import React, { useState } from 'react';
import { Tema } from '../../../App';

import { Container, Left, Logo, SeparatorIcon, Search, Pesquisar, Center, Right, Nav, NavItem, NavIcon, Info, UserImage, UserNome, UserIcons, Icon, Mais, Messeger, Notificacao, MostrarConfig } from './styles';

import { ActiveHomeDark, ActiveHomeLight, ActiveFlagDark, ActiveFlagLight, ActiveTvDark, ActiveTvLight, ActiveMarketDark, ActiveMarketLight,  DesactiveHomeDark, DesactiveHomeLight, DesactiveFlagDark, DesactiveFlagLight, DesactiveTvDark, DesactiveTvLight, DesactiveMarketDark, DesactiveMarketLight } from './images';
import { GroupActiveDark, GroupDesactiveDark, GroupActiveLight, GroupDesactiveLight, BellActiveDark, BellDesactiveDark, BellActiveLight, BellDesactiveLight } from './images';
import Facebook from '../../../assets/header/facebookLogo.svg';

interface HeaderProps {
  Theme: Tema;
  toggle(): void
} 

const Header: React.FC<HeaderProps> = ({ Theme, toggle }) => {
  const [isHome, setisHome] = useState(true);
  const [isFlag, setisFlag] = useState(false);
  const [isVideo, setisVideo] = useState(false);
  const [isMarket, setisMarket] = useState(false);
  const [isGroup, setisGroup] = useState(false);
  const [isNotification, setisNotification] = useState(false);

  const HomeActive = Theme?.title === 'light'? ActiveHomeLight : ActiveHomeDark;
  const HomeDesactive = Theme?.title === 'light'? DesactiveHomeLight : DesactiveHomeDark;
  const FlagActive = Theme?.title === 'light'? ActiveFlagLight : ActiveFlagDark;
  const FlagDesactive = Theme?.title === 'light'? DesactiveFlagLight : DesactiveFlagDark;
  const TvActive = Theme?.title === 'light'? ActiveTvLight : ActiveTvDark;
  const TvDesactive = Theme?.title === 'light'? DesactiveTvLight : DesactiveTvDark;
  const MarketActive = Theme?.title === 'light'? ActiveMarketLight : ActiveMarketDark;
  const MarketDesactive = Theme?.title === 'light'? DesactiveMarketLight : DesactiveMarketDark;
  const GroupActive = Theme?.title === 'light'? GroupActiveLight : GroupActiveDark;
  const GroupDesactive = Theme?.title === 'light'? GroupDesactiveLight : GroupDesactiveDark;
  const BellActive = Theme?.title === 'light'? BellActiveLight : BellActiveDark;
  const BellDesactive = Theme?.title === 'light'? BellDesactiveLight : BellDesactiveDark;

  return (
    <Container>
      <Left>
        <Logo src={Facebook} />
        <SeparatorIcon>
          <Search />
          <Pesquisar type="text" placeholder="Pesquisar no facebook" />
        </SeparatorIcon>
      </Left>

      <Center>
        <Nav>
          <NavItem
            className={isHome ? 'active' : 'desactive'}
            onClick={() => {
              setisHome(true);
              isFlag && setisFlag(false);
              isVideo && setisVideo(false);
              isMarket && setisMarket(false);
              isGroup && setisGroup(false);
            }}
          >
            <NavIcon src={isHome? HomeActive : HomeDesactive} />
          </NavItem>

          <NavItem
            className={isFlag? 'active' : 'desactive'}
            onClick={() => {
              setisFlag(true);
              isHome && setisHome(false);
              isVideo && setisVideo(false);
              isMarket && setisMarket(false);
              isGroup && setisGroup(false);
            }}
          >
            <NavIcon src={isFlag? FlagActive : FlagDesactive} />
          </NavItem>

          <NavItem
            className={isVideo? 'active' : 'desactive'}
            onClick={() => {
              setisVideo(true);
              isHome && setisHome(false);
              isFlag && setisFlag(false);
              isMarket && setisMarket(false);
              isGroup && setisGroup(false);
            }}
          >
            <NavIcon src={isVideo? TvActive : TvDesactive} />
          </NavItem>

          <NavItem
            className={isMarket? 'active' : 'desactive'}
            onClick={() => {
              setisMarket(true);
              isHome && setisHome(false);
              isFlag && setisFlag(false);
              isVideo && setisVideo(false);
              isGroup && setisGroup(false);
            }}
          >
            <NavIcon src={isMarket? MarketActive : MarketDesactive} />
          </NavItem>

          <NavItem
            className={isGroup? 'active' : 'desactive'}
            onClick={() => {
              setisGroup(true);
              isHome && setisHome(false);
              isFlag && setisFlag(false);
              isVideo && setisVideo(false);
              isMarket && setisMarket(false);
            }}
          >
            <NavIcon 
              className={isGroup? 'active' : 'desactive'}
              src={isGroup? GroupActive : GroupDesactive} 
            />
          </NavItem>
        </Nav>
      </Center> 

      <Right>
        <Info>
          <UserImage src="https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg" />
          <UserNome>Nome Aleatorio</UserNome>
        </Info>
 
        <UserIcons>
          <Icon>
            <Mais 
              onClick={() => toggle()}
            />
          </Icon>

          <Icon>
            <Messeger />
          </Icon>
          
          <Icon>
            <Notificacao 
              onClick={() => setisNotification(!isNotification)}
              src={isNotification? BellActive : BellDesactive }
            />
          </Icon>

          <Icon>
            <MostrarConfig />
          </Icon>
        </UserIcons>
      </Right>
    </Container>
  );
}

export default Header;