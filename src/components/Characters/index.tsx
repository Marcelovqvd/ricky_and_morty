import { useEffect, useState } from "react"
import { api } from "../../services/api"

type Character = {
  id: number
  name: string
  image: string
}

export function Characters() {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    function getCharacter() {
      api.get('character')
      .then(response => setCharacters(response.data.results))
    }
    getCharacter()
  }, [])

  return (
    <>
    <ul>
      {characters.map(character => (
        <li key={character.id}>
         <p>Name: {character.name}</p>
         <img src={character.image} alt={character.name} />
        </li>
      ))}
    </ul>
    </>
  )
}