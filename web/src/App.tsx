import { useEffect, useState } from "react"

type DockerResponse = {
  message: string
}

function App() {
  const [data, setData] = useState<DockerResponse | null>(null)

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000").then(res => res.json());
      console.log(data)
      setData(data)
    }

    fetchData();
  }, [])
  return (
    <div>
      MSG VINDA DO DOCKER: {data?.message}
    </div>
  )
}

export default App
