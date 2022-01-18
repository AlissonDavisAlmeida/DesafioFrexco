
import Header from "../src/components/Layout/Header/Header";
import Produtos from "../src/components/Produtos/Produtos";
import useProdutosData from "../src/context/useProduto";
import styles from '../styles/Home.module.css'

function Carrinho() {

    const { lista } = useProdutosData()
   
    

    

    const renderizaListaCarrinho = ()=>{
        return lista?.map(produto=>{
            if(produto.quantidade >0){

                
                return  <Produtos nome={produto.nome} informacaoNutricional={produto.informacaoNutricional} key={produto.id} quantidade={produto.quantidade}
                id={produto.id} familia={produto.familia} genero={produto.genero}  modo={`carrinho`}/>
            }
        })
    }

    return ( 

        <div className={styles.main}>
            <Header/>
           
            <div  className={`mt-5 flex flex-col justify-center items-center w-full`}>

            {renderizaListaCarrinho()}
            </div>
        </div>
     );
}

export default Carrinho;