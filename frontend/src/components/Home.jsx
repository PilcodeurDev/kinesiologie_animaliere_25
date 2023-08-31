import { useEffect, useState } from "react"
import Axios from "axios"


export default function Home() {

  const [ data, setData ] = useState([])

  useEffect(() => {
    Axios.get("https://reqres.in/api/users?page=2")
    .then(res => setData(res.data.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>voici la reponce du notre requete:</h1>
      {
        data.map((response, id) => {
          return <p key={id}>{response.email}</p>
        })
      }
    </div>
  )
}
