import {useState} from 'react'
import styles from './SearchBar.module.css';

export default function SearchBar({setActor}: {setActor: (name: string) => void}) {
  const [actorName, setActorName] = useState("");

  function setActorNameAction(e: any) {
    if (e.key === "Enter") {
      e.preventDefault()
      setActor(e.target.value);
    }
  }

  return (
    <div className={styles.searchDiv}>
      <span>Actor Name: </span>
      <input type="text" value={actorName} onKeyDown={(e) => setActorNameAction(e)} onChange={(e) => setActorName(e.target.value)}
      className={styles.searchInput} />
    </div> 
  )
}