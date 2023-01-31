import {ProductsListStyle} from "./StylesProductsList.js"

export const ProductsList = ({id,name,category,price,img , produtos , carrinho , setCarrinho}) => {

    const addCarrinho = () => {

        const allItens = [...produtos]

        let carrinhoFiltrado = allItens.filter( (produtoCarrinho) => produtoCarrinho.id == id)

     
  
        

        setCarrinho( [...carrinho , carrinhoFiltrado[0]] )
      

    }

    return(

        <>
            <ProductsListStyle>

                <img src={img} alt="produto" />
                <div>
                    <h3>{name}</h3>
                    <span className="tipo">{category}</span>
                    <span className="preco">R$ {price.toFixed(2)}</span>
                    <button onClick={addCarrinho}>Adicionar</button>
                </div>

            </ProductsListStyle>

        </>

    )
    

}