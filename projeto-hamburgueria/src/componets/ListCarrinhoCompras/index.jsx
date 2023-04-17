
import { toast } from  "react-toastify" ;
import "react-toastify/dist/ReactToastify.min.css";

export const ListCarrinhoCompras = ({carrinho ,item , setCarrinho}) => {

    const retiraCarrinho = () => {

       const newCarrinho = carrinho.filter((produto) => produto.id != item.id)

       setCarrinho(newCarrinho)
       toast.success("Item removido com sucesso...!" , { autoClose: 1000 })

    }

    return(

        <>

            <li>
                <div>
                    <img src={item.img} alt="img" />
                    <div>
                        <h4>{item.name}</h4>
                        <span>{item.category}</span>
                    </div>
                </div>
                <button onClick={retiraCarrinho}>Remover</button>
            </li>

        </>

    )

}