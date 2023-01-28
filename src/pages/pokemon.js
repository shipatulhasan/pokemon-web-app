import { gql, useQuery } from "@apollo/client";
import PokemonCard from "@/Components/PokemonCard";
import Image from "next/image";
import Blog from "@/Components/Blog";
const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
        id
      }
    }
  }
`;

const gqlVariables = {
  limit: 10,
  // offset: 1,
};
const Pokemon = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const pokes = data.pokemons.results;
  //   console.log(poke)

  return (
    <>
  <div className="py-20 bg-[url('/asset/Background.png')] relative overflow-hidden bg-cover bg-center bg-no-repeat z-10">
    <div className="absolute h-full w-full inset-0 bg-[url('/asset/Texture.png')] -z-0" />
    <div className="z-10 relative pb-16">
      <Image src='/asset/Logo.png' width={265} height={96} alt="logo" className="mx-auto" />
    </div>

      <div className="pokemon-container px-2 pb-10 flex overflow-x-scroll overflow-y-hidden md:grid md:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {pokes.map((poke) => (
          <PokemonCard poke={poke} key={poke.id} />
        ))}
      </div>
  </div>
      <div className="flex gap-3">
      <img src='/asset/Left.png' className="h[100vh] w-16"  />
      <div className="flex-1 max-w-7xl mx-auto py-20">

        <div className="relative ">
          <h1 className="text-5xl text-center py-20 z-10 text-deep-blue font-bold">
            Ash & Pikachu Arrive in <br />
            Pokémon Universe
          </h1>
          <Image
            className="absolute left-0 right-0 top-20 mx-auto -z-10"
            src={"/asset/Brush.png"}
            width={500}
            height={150}
            alt="brush"
          />
        </div>
        <div className="relative">
         
          <Blog />
        </div>
      </div>
      <img src='/asset/Left.png' className="h[100vh] w-16"  />
      </div>
    </>
  );
};

export default Pokemon;
