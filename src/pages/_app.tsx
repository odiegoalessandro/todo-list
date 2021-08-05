import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../themes/theme'
import Head from 'next/head'
import { Global, css } from '@emotion/react'
import { CSSReset } from '@chakra-ui/css-reset'
import React from 'react'
import { TodoProvider } from '../contexts/TodoContext'

const GlobalStyles: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        ::-webkit-scrollbar{
          display: none;
        }
      `} />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <ChakraProvider theme={customTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChakraProvider>
    </TodoProvider>
  )
}

export default MyApp
