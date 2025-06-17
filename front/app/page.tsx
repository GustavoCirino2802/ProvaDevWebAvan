import ItemListar from "./components/item/listar/page";
import Login from "./components/usuario/login/page";

export default function Home() {
  return (
    <div>
      <Login></Login>
      <ItemListar></ItemListar>
    </div>
  );
}
