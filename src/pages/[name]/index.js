import { useRouter } from "next/router";

const PokemonDetails = () => {
    const router = useRouter()
    const name = router.query.name
    return (
        <div>
            <h1>hey me</h1>
        </div>
    );
};

export default PokemonDetails;