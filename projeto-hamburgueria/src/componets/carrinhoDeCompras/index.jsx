import {CarrinhoStyle} from "./StyleCarrinhoDeCompras"
import {ListCarrinhoCompras} from "../ListCarrinhoCompras"
import { ValorTotal} from "../ValorTotal"

export const CarrinhoDeCompras = ({ carrinho , setCarrinho}) => {
    
    return(

        <CarrinhoStyle>

            <h3>
                Carrinho de compras
            </h3>

            <ul>

                {

                carrinho.length > 0 ? 
                <>
                {carrinho.map((item) => <ListCarrinhoCompras key={item.id} carrinho={carrinho} item={item} setCarrinho={setCarrinho} /> )}
              
                {<ValorTotal  carrinho={carrinho} setCarrinho={setCarrinho}/>}
                </>
                :

                <div>
                    <h3>Sua sacola está vazia</h3> 
                    <h6>Adicione itens</h6>
                </div>

                }
             
            </ul>

        </CarrinhoStyle>

    )

}