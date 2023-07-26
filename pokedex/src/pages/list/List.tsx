import Card from '../../components/card/Card'
import styles from './List.module.css'
import { PokeContext } from '../../context/PokemonContext'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const List = () => {
  const { list, loading } = useContext(PokeContext);

  if (loading) {
    return (
      <div className={styles.list}>
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}>

          </div>
        </div>
      </div>
    )
  }

  return (
    <section className={styles.list}>
      {list && list.map(pokemon =>
        <Card key={pokemon.name} url={pokemon.url} />)}
    </section>
  )
}

export default List