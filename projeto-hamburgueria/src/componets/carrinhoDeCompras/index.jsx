import {CarrinhoStyle} from "./StyleCarrinhoDeCompras"
import {ListCarrinhoCompras} from "../ListCarrinhoCompras"

export const CarrinhoDeCompras = ({ carrinho , setCarrinho}) => {

    console.log(carrinho)
    

    return(


        <CarrinhoStyle>

            <h3>Carrinho de compras</h3>
            <ul>
                
                {console.log(carrinho)}

                {carrinho.map((item) =>  <ListCarrinhoCompras key={item.id} carrinho={carrinho} item={item} setCarrinho={setCarrinho}/>)}
             
            </ul>

        </CarrinhoStyle>
       
   

    )

}