export interface ProdutoModel{
    id? : number
   
    genero : string
    nome : string
    familia : string
    informacaoNutricional :{
        carboidrato : number
        proteina : number
        gordura : number
        calorias : number
        acucar : number
    }
    quantidade? : number
    modo : "carrinho" | "lista"
    alterarQuantidade? : (valor : number, index: number)=>void
}