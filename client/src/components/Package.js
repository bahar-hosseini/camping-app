import {useParams} from "react-router-dom"

export function Package() {
  const { id } = useParams()
  return <h1>This is my Package {id}</h1>;
}
