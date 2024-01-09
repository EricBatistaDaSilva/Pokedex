import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./styles";

export function Home() {
  const { data, isLoading, error } = useQueryPokemonPage();
  console.log(isLoading);

  if (error) console.error(error);

  return (
    <Container>
      <h1>{"Bem vindo(a) à sua nova pokédex"}</h1>

      {isLoading && <span className="">Loading...</span>}

      {isLoading && error && <span className="feedbackLoading">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
