import {HeaderComponet} from "./StyleHeader"

export const Header = ({produtos , setProductsFilter , productsFilter}) => {

    const filterProducts = (e) => {

       const desconstruindo = [...produtos]

       const filtrados = desconstruindo.filter((produto) => produto.name.startsWith(e.target.value))

       e.target.value == "" ?

       setProductsFilter([false])

       :

       setProductsFilter(filtrados) 

    }

    return (

        <HeaderComponet>
            <div>
                <h1> Burguer <span>Kenzie</span></h1>
                <div>
                    <input onChange={filterProducts} placeholder="Digitar Pesquisa" type="text" />
                    <button >Pesquisar</button>
                </div>
            </div>
        </HeaderComponet>
    )

}