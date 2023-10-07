import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addchoice = () => {

    const [name, SetName] = useState('')
    const [person, Setperson] = useState('')
    const [author, SetAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const book = {name, person, author}
        
        setIsPending(true)

        fetch('http://localhost:8000/Peoplesbooks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(() => {
            setIsPending(false)
            navigate('/people')
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit} >
                <label>Your Name (optional):</label>
                <input 
                    type="text"
                    value={person}
                    onChange={(e) => Setperson(e.target.value)}
                />
                <label>Book Title:</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                />
                <label>Author:</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => SetAuthor(e.target.value)}
                />
                {!isPending && <button>Submit Book</button>}
                {isPending && <button disabled>Adding book...</button>}
            </form>
        </div>
     );
}
 
export default Addchoice;