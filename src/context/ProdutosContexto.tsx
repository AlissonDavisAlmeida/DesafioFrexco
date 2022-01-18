import React, { useEffect, useState } from "react"
import { ProdutoModel } from "../components/Produtos/ProdutoModel"
import axios from "axios"

interface ProdutoContextProps{
    lista? : ProdutoModel[]
    
    alterarQuantidade? : (valor : number, index: number)=>void
    removerItemCarrinho ? : (produto:ProdutoModel)=>void
    limparQuantidadeLista? :()=>void
    quantidade? : number
}

const ProdutoContexto = React.createContext<ProdutoContextProps>({})

export function ProdutoProvider(props) {

    


    const [lista, setlista] = useState<ProdutoModel[]>();
 
    let [quantidade, setquantidade] = useState<number>(0);

    const alterarQuantidade = ( valor : number, id : number)=>{
        const listaN:ProdutoModel[] = lista.map(produto=>{
          if(produto.id === id){
            if(produto.quantidade + valor < 0){
              produto.quantidade = 0
                
            }else{
              
              
              setquantidade(quantidade+valor < 0 ? 0 : quantidade+=valor)  
              
              produto.quantidade  += valor
            }
          
            return produto
          }else{
            return produto
          }
        })
        setlista([...listaN])
    }
    
    

    

    const removerItemCarrinho=(produto : ProdutoModel)=>{
       const novaLista =  lista.map(produtoLista=>{
          if(produtoLista.id === produto.id){
            const qtd = produtoLista.quantidade
            produtoLista.quantidade = 0
            setquantidade(quantidade-qtd)
          }
          return produtoLista
        })

        setlista(novaLista)
    }

  useEffect(() => {
    axios.get("http://localhost:3002/produtos").then(produtos=>{
     const { dados } = produtos.data
     
    const arrayProdutos : ProdutoModel[] =  dados.map(produto => {
      return {
        id : produto.id,
        genero : produto.genus,
        nome  :produto.name,
        familia : produto.family,
        informacaoNutricional:{
           carboidrato : produto.nutritions.carbohydrates,
           proteina: produto.nutritions.protein,
           gordura : produto.nutritions.fat,
           calorias : produto.nutritions.calories,
           acucar : produto.nutritions.sugar
        },
        quantidade : 0
      }
    })
    setlista(arrayProdutos)
  
   }).catch(erro=>{
     console.log(erro);
   })

 }, [])

    return ( 
        <ProdutoContexto.Provider value={{
            lista : lista,
            alterarQuantidade :alterarQuantidade,
            quantidade,
            removerItemCarrinho,
            
        }}>
            {props.children}
        </ProdutoContexto.Provider>

     );
}




export default ProdutoContexto