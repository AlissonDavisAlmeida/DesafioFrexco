import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  { ProdutoProvider } from '../src/context/ProdutosContexto'

function MyApp({ Component, pageProps }: AppProps) {
  

  
  return (

    
    
    <ProdutoProvider>

  <Component {...pageProps} />
    </ProdutoProvider>
  
    )
}

export default MyApp
