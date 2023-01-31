export const ListCarrinhoCompras = ({carrinho ,item , setCarrinho}) => {

    const retiraCarrinho = () => {

       const newCarrinho = carrinho.filter((produto) => produto.id != item.id)
       setCarrinho(newCarrinho)
    }

    return(

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

    )

}