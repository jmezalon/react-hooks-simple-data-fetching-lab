// create your App component here
import { useEffect, useState } from 'react';

function App() {
    const [dogs, setDogs] = useState(null)
    const [clicked, setClick] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setDogs(data.message))
    }, [clicked])

    if (!dogs) {
        return <p>Loading...</p>
    }
    return(
        <div>
            <img src={dogs} alt="A Random Dog" />
            <br/>
            <button onClick={()=>setClick(!clicked)}>New dog</button>
        </div>
    )
}

export default App