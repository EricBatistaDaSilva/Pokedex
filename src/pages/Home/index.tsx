import { PokemonCard } from "../../components/PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./styles";

export function Home() {
  const { data } = useQueryPokemonPage();
  console.log(data);

  return (
    <Container>
      <h1>{"Bem vindo(a) à sua nova pokédex"}</h1>

      <div className="gridCards">
        {data?.map((pokemon) => {
          return <PokemonCard pokemon={pokemon}/>;
        })}
      </div>
    </Container>
  );
}
