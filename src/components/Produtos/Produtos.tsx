import { AddIcon, DeletIcon, SubIcon } from "../Icons/Icone";
import { ProdutoModel } from "./ProdutoModel";
import styles from "./Produto.module.css"
import useProdutosData from "../../context/useProduto";
import { useEffect } from "react";
function Produtos(props : ProdutoModel) {

    const { alterarQuantidade, removerItemCarrinho} = useProdutosData()

      
        return(

           
                
                <div className={`w-10/12 h-10 border-green-400 p-10 border-2 rounded-xl flex items-center text-2xl m-3 justify-between
                hover:bg-green-600 hover:text-white duration-300 ${styles.produto}`}>
             
                
                <span>Fruta: {props.nome}</span>
                <div>
                <span>{props.informacaoNutricional.calorias} Kcal</span>    
                </div>
                
                {props.modo ==="carrinho"? <div className={`flex text-sm`}>
                    <span className="mr-2">Proteina: {props.informacaoNutricional.proteina}g</span>
                    <span className="mr-1">Gordura: {props.informacaoNutricional.gordura}g</span>
                    <span className="ml-1">Açúcar: {props.informacaoNutricional.acucar}g</span>
                </div> : null}
                <span>{props.quantidade ? props.quantidade : 0}</span>
                <div className={`flex ${props.modo === "carrinho"?'flex-row items-center justify-center w-3/12':`flex-col w-2/12 ` } items-center `}>
                <button onClick={()=>alterarQuantidade(1, props.id)} className={`w-5/12 flex justify-center items-center h-8 ${props.modo==="carrinho"?'mr-1':'mb-2'} 
                                        rounded-xl p-2 bg-green-400`}><AddIcon/></button>
                <button onClick={()=>alterarQuantidade(-1, props.id)} className={`w-5/12 h-8 bg-green-400 rounded-xl flex
                            ${props.modo==="carrinho"?'mr-1':''} justify-center p-2 items-center`} ><SubIcon/></button>
                {props.modo === "carrinho"? (
                    
                        <button onClick={()=>removerItemCarrinho(props)} className="w-5/12 flex justify-center items-center bg-red-500 h-8 rounded-xl"><DeletIcon/></button>
                    
                    
                ) : null}
                </div>
               
                
                
                </div>
                
        )
}

export default Produtos;