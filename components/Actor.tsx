import {Result} from '../app/types'
import styles from './Actor.module.css'

export default function Actor({actor}: { actor : Result}) {

  if (!actor) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.actorCard}>
      <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "/images/placeholder.jpg"}
      alt={actor.name}
      className={styles.image} />
      <h1 className={styles.title}>{actor.name}</h1>
      <h2 className={styles.subtitle}>Known for</h2>
      <ul className={styles.knownForList}>
        {actor.known_for.map((movie, index) => <li key={index}>{movie.title}</li>)}
      </ul>
    </div>
  )
}