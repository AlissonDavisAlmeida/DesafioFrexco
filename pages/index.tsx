import type { NextPage } from 'next'

import Header from '../src/components/Layout/Header/Header'

import { useRouter } from  "next/router"
import useProdutosData from '../src/context/useProduto'

import styles from '../styles/Home.module.css'
import Produtos from '../src/components/Produtos/Produtos'


const Home: NextPage = () => {

  const rota = useRouter()  
  const {lista }  = useProdutosData()
  

  const renderizarLista = ()=>{
    return lista?.map((produto) =>{
      return <Produtos key={produto.id} nome={produto.nome} id={produto.id} genero={produto.genero} quantidade={produto.quantidade} 
              modo='lista' 
              informacaoNutricional={produto.informacaoNutricional}
              familia={produto.familia} />
    })
  }

  const navegarCarrinho=()=>{
    rota.push({pathname:"/carrinho"})
  }

  return (

    <div className={`${styles.main}`}>

      <Header navegar={navegarCarrinho}/>
      
        
          <div className={`mt-5 flex flex-col justify-center items-center w-full`}>
            {renderizarLista() }
          </div>
       
    </div>
  
  )
}

export default Home
