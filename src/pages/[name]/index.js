import Image from "next/image";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
const get_pokemon = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      base_experience
      sprites {
        front_default
      }
      stats {
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

  if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  const pokemon = data?.pokemon;
  console.log(pokemon);
  return (
    <div className="flex gap-6">
      <img src="/asset/Left.png" className="h-[100vh]  w-16" />
      <div className="flex-1 max-w-6xl mx-auto py-20">
        <Image
          src="/asset/Logo.png"
          width={150}
          height={96}
          alt="logo"
          className="mx-auto pb-24"
        />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="space-y-8">
            <h2 className="text-deep-blue font-bold text-5xl capitalize">
              {name}{" "}
              <span>
                {pokemon.id.toString().length > 1 ? "#0" : "#00"}
                {pokemon.id}
              </span>
            </h2>
            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              laboriosam, molestiae in illum temporibus fuga iusto vitae quam
              incidunt quo. Quos magnam ut totam eius natus, odio delectus at
              corporis.
            </p>

            <div className="my-8 mr-20 p-1 bg-gradient-to-l from-[#FC7C23] to-[#F366B9] rounded">
              <div className="bg-white  flex items-ceneter justify-between gap-3 p-5 rounded">
                {/* first col */}
                <div className="space-y-4 text-sm">
                  <div className="space-y-2">
                    <p className="font-bold">Height</p>
                    <p>{pokemon.height}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold">Weight</p>
                    <p>{pokemon.weight} lbs</p>
                  </div>
                </div>
                {/* 2nd col */}
                <div className=" text-sm">
                  <div className="space-y-2">
                    <p className="font-bold">Abilities</p>
                    <div>
                      {pokemon.abilities.map((item, i) => (
                        <p className="" key={i}>
                          {item.ability.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={pokemon.sprites.front_default}
              className="mx-auto w-80"
              alt={name}
            />
            <div className="w-56 h-1 mx-auto -mt-5 rounded-full bg-black blur-lg" />
          </div>
          <div>
            <div className="space-y-4 text-sm">
              <div className="space-y-2">
                <p className="font-bold">Type</p>
                <ul className="flex items-center gap-2">
                  {pokemon.types?.map((item, i) => (
                    <li
                      className={`rounded ${item.type.name}  px-5 py-1 text-slate-100 font-medium capitalize text-sm`}
                      key={i}
                    >
                      {item.type.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold">Weight</p>
                <p>{pokemon.weight} lbs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/asset/Left.png" className="h-[100vh] w-16" />
    </div>
  );
};

export default PokemonDetails;
