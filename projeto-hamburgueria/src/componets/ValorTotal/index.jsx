import  {useState , useEffect} from "react"
import { ToastContainer, toast } from  "react-toastify" ;
import "react-toastify/dist/ReactToastify.min.css";

export const ValorTotal = ({carrinho , setCarrinho}) => {

    const [valorTotal , setValorTotal] = useState(0)

    let totalAtualizado = carrinho.reduce((acumulador , valorAtual) =>  acumulador + valorAtual.price ,0)
    

        useEffect(() => {

            setValorTotal(totalAtualizado.toFixed(2))

        } , [totalAtualizado])

    const limparCarrinho = () => {

        setCarrinho([])

        toast.success("Itens removidos com sucesso!" , { autoClose: 2000 })

    } 

    return(
        
        <>
            <div className="totallyValue">
                    <span> Total </span>
                    <span> R$: {valorTotal}</span>
            </div>

            <button onClick={limparCarrinho}> Remover todos  </button>
        </>
    )

}