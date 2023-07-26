import styles from './Card.module.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface UrlProps {
    url: string
}

export interface PokemonProps {
    name: string
    id: number
    img: string
    type: string
}


const Card = ({ url }: UrlProps) => {
    const [pokemon, setPokemon] = useState<PokemonProps>();
    const navigate = useNavigate();

    useEffect(() => {
        async function pokeData() {
            const data = await axios.get(url)
                .then((result) => {
                    let pokemonInfo = {
                        name: result.data.name,
                        id: result.data.id,
                        img: result.data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
                        type: result.data.types['0'].type.name
                    }
                    setPokemon(pokemonInfo);
                }
                )
        }
        pokeData()
    }, [url]);

    async function fetchDetails(id: number) {
        navigate(`/list/details/${id}`);
    }

    return (
        <div>
            {pokemon &&
                <button
                    onClick={() => fetchDetails(pokemon.id)}
                    className={styles.button_card}
                >
                    <div className={styles.card}>
                        <div className={styles.card_load}>
                            <img src={pokemon.img} alt="pokemon" />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.card_load_extreme_title}>
                                <span>#{pokemon.id}</span>
                            </div>
                            <div className={styles.card_load_extreme_descripion}>
                                <span>{pokemon.name}</span>
                                <span>Type: {pokemon.type}</span>
                            </div>
                        </div>
                    </div>
                </button>
            }
        </div>
    )
}

export default Card