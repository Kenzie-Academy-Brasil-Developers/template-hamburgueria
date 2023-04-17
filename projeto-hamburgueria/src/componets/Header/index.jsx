import { HeaderComponet } from "./StyleHeader";

export const Header = ({ produtos, setProductsFilter }) => {
  const filterProducts = (e) => {
    const desconstruindo = [...produtos];

    const filtrados = desconstruindo.filter(
      (produto) =>
        produto.name.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        produto.category.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    e.target.value == ""
      ? setProductsFilter([false])
      : setProductsFilter(filtrados);
  };

  return (
    <HeaderComponet>
      <div>
        <h1>
          {" "}
          Hungria <span>Burguer</span>
        </h1>
        <div>
          <input
            onChange={filterProducts}
            placeholder="Digitar Pesquisa"
            type="text"
          />
          <button>Pesquisar</button>
        </div>
      </div>
    </HeaderComponet>
  );
};
