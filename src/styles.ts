import { createGlobalStyle } from 'styled-components'

const Cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ACB4'
}

export const GlobalCss = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}


body{
    background-color: ${Cores.preta};
    color: ${Cores.branca};
}

`
