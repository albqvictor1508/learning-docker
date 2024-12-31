import { useEffect, useState } from "react"

type DockerResponse = {
  docker: {
    status: number,
    message: string
  }
}

function App() {
  const [data, setData] = useState<DockerResponse | null>(null)

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:8080").then(res => res.json());
      console.log(data)
      setData(data)
    }

    fetchData();
  }, [])
  return (
    <div>
      MSG VINDA DO DOCKER: {data?.docker?.message}
    </div>
  )
}

export default App
