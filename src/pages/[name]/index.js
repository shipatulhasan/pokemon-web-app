import Image from "next/image";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
const get_pokemon = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    base_experience
    sprites{
        front_default
      }
    stats{
      base_stat
      stat {
        name
      }
    }
    types {
      type {
        name
      }
    }
    weight
    height
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
  }
}
`;
const PokemonDetails = () => {
  const router = useRouter();
  const name = router.query.name;
  const gqlVariables = {
    name: name,
    };
    const { loading, error, data } = useQuery(get_pokemon, {
        variables: gqlVariables,
      });
    
      if (loading) return 'Loading...';
    //   if (error) return `Error! ${error.message}`;
      const pokemon=(data?.pokemon)
      console.log(pokemon)
  return (
      <div className="flex gap-6">
        <img src="/asset/Left.png" className="h-[100vh]  w-16" />
        <div className="flex-1 max-w-7xl mx-auto py-20">
        <Image src='/asset/Logo.png' width={150} height={96} alt="logo" className="mx-auto py-10" />
          <div className="grid md:grid-cols-3">
              <div>
                  <h2 className="text-deep-blue font-bold text-5xl capitalize">{name}</h2>
              </div>
              <div>
                  <Image src={pokemon.sprites.front_default} width={200} height={200} className="object-cover mx-auto" alt={name}/>
              </div>
              <div></div>
        
          </div>
        </div>
        <img src="/asset/Left.png" className="h-[100vh] w-16" />
      </div>

  );
};

export default PokemonDetails;
