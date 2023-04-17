import {StyleMain} from "./StyleMain.js" 
import {ProductsList} from "../ProductsList"
import {CarrinhoDeCompras} from "../carrinhoDeCompras"

export const Main = ({produtos , carrinho , setCarrinho}) => {
    
    return(

        <StyleMain>
            <div>
                <section>
                    <ul>
                        {produtos.map((produto) => 
                            <ProductsList 
                            
                                key={produto.id}
                                id={produto.id} 
                                name={produto.name}  
                                category={produto.category}
                                price={produto.price}
                                img={produto.img}
                                produtos={produtos}
                                setCarrinho={setCarrinho}
                                carrinho={carrinho}
                            />)
                        }
                        
                    </ul>
                </section>

                <section>

                <CarrinhoDeCompras carrinho={carrinho} setCarrinho={setCarrinho} />

                </section>
            </div>
        </StyleMain>

    )


} 