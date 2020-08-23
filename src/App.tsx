import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { ThemeProvider } from 'styled-components';
import { Dark, Light } from './styles/theme'

import Contexto from './pages/context';
import { useTheme } from './pages/context';

import Home from './pages/home';

export interface Tema {
  title: string;

  colors: {
    headerColor: string;
    headerIcon: string;
    backgroundIcon: string;
    main: string;
    label: string;
    iconsNavActive: string;
    iconsNavDesactive: string;
    backgroundInput: string;
    colorInput: string;
    scrollColor: string;
    stores: string;
    borderStores1: string;
    borderStores2: string;
  }
}

const App: React.FC = () => {
  const [Theme, setTheme] = useState<Tema>(Dark);
  const { Change, setChange } = useTheme();
  const store = localStorage;

  const ToggleTheme = () => {
    function dark(){
      store.setItem('theme', 'dark');
      setTheme(Dark);
    }

    function light() {
      setTheme(Light);
      store.setItem('theme', 'light');
    }

    Theme!.title === 'light'? dark() : light();    
  }

  const PageHome = () => {
    return <Home toggle={ToggleTheme} Theme={Theme} />
  }

  useEffect(() => {
    const tema = store.getItem('theme');

    if(tema === null){
      store.setItem('theme', 'light');

      setTheme(Light);

      return;
    }

    if(Change?.length! > 2){
      Change === 'light'? setTheme(Light) : setTheme(Dark)
      
      setChange('');

      return;
    }

    tema === 'dark'? setTheme(Dark) : setTheme(Light)
  }, [Change]);
 
  return (
    <Contexto>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Route path="/" exact component={PageHome} />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </Contexto>
  );
}

export default App;