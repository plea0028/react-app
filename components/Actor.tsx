import {Result} from '../app/types'

export default function Actor({actor}: { actor : Result}) {
  return (
    <div>
      Name: {actor.name}
      Gender: {actor.gender}
      <p>Known for</p>
      <ul>
        {actor.known_for.map((movie, index) => <li key={index}>{movie.title}</li>)}
      </ul>
    </div>
  )
}