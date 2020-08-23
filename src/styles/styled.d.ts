import styled from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
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
}