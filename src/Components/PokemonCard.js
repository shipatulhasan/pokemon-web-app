import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

const get_type = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    types {
      type {
        name
      }
    }
    
  }
}
`;
const PokemonCard = ({poke}) => {
    const gqlVariables = {
        name: poke.name,
        };
        const { loading, error, data } = useQuery(get_type, {
            variables: gqlVariables,
          });
        
          // if (loading) return 'Loading...';
        //   if (error) return `Error! ${error.message}`;
          const types=(data?.pokemon.types)


    return (
      <Link href={`/${poke.name}`} className="flex-shrink-0 relative space-y-4 bg-white rounded pokemon-card z-10">

          <div className="bg-[#F2F2F2] p-3 rounded m-3 mb-0 ">
            <p className="text-sm">{poke.id.toString().length>1 ? '#0': '#00'}{poke.id}</p>
            {/* <img src={poke.image} width={215} height={215}  alt="" /> */}
            <Image src={poke.image} alt={poke.name}  width={215} height={215} />
          </div>
          <div className="space-y-2 ml-1 p-4 pt-0">

            <h2 className="text-black font-bold capitalize">{poke.name}</h2>
            <ul className="flex items-center gap-2">

            {
              types?.map((item,i)=><li className={`rounded ${item.type.name}  px-5 py-1 text-slate-100 font-medium capitalize text-sm` }key={i}>{item.type.name}</li>)
            }
            </ul>
          </div>
       
      </Link>
        
    );
};

export default PokemonCard;