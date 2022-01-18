import { useContext } from "react";
import ProdutoContexto from "./ProdutosContexto";


const useProdutosData = () => useContext(ProdutoContexto)

export default useProdutosData