import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  inputSearch: string;
};

export function Header() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    navigate(`/search?q=${data.inputSearch}`);
    reset();
  };
  return (
    <Container>
      <Link to={"/"}>
        <img src={pokemonLogo} alt="Logo com o texto pokemon" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="inputSearch" className="srOnly">
            Buscar pokémon
          </label>
          <input
            type="text"
            id="inputSearch"
            placeholder="Buscar pokémon"
            {...register("inputSearch", {
              required: "Escreva o nome do pokémon",
            })}
          />
          <span className="inputError">{errors.inputSearch?.message}</span>
        </section>

        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
