
import {ProductsListStyle} from "./StylesProductsList.js"
import React from  "react";
import { toast } from  "react-toastify" ;
import "react-toastify/dist/ReactToastify.min.css";

export const ProductsList = ({id,name,category,price,img , produtos , carrinho , setCarrinho}) => {

    const addCarrinho = () => {
        
        const allItens = [...produtos]

        let carrinhoFiltrado = allItens.filter( (produtoCarrinho) => produtoCarrinho.id == id)


        carrinho.find((produto) => produto.id == carrinhoFiltrado[0].id) ?
        
        toast.warn("Já existe este item no carrinho !" , { autoClose: 1000 })
    
        :toast.success("Item adicionado com sucesso!" , { autoClose: 1000 });
        
        !carrinho.find((produto) => produto.id == carrinhoFiltrado[0].id) ?
        
        setCarrinho([...carrinho , carrinhoFiltrado[0]]) 

        :
        <>
        </>
            
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