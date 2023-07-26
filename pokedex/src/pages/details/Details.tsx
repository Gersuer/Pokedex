/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { PokemonProps } from "../../components/card/Card";
import styles from './Details.module.css';
import axios from "axios";
const Details = () => {
  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonProps>();
  useEffect(() => {
    const pokemonDetails: Promise<void> = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((result) => {
        console.log(result.data)
        const teste = result.data.name;
        const alteracao = teste[0].toUpperCase() + teste.substr(1);
        const pokemon: PokemonProps = {
          name: alteracao,
          id: result.data.id,
          img: result.data['sprites']['other']['official-artwork']['front_default'],
          type: result.data.types['0'].type.name
        }
        console.log(result.data)
        setPokemonInfo(pokemon);
      })
  }, [id]);
  return (
    <section className={styles.container}>

      {pokemonInfo &&
        <div className={styles.pokemon_background}>
          <img src={pokemonInfo.img} alt="pokemon" />
          <span> #{pokemonInfo.id} {pokemonInfo.name}</span>
        </div>
      }
    </section>
  )
}

export default Details