import { useState, useEffect } from "react";
import Booklist from "../Booklist";

const Allbooks = () => {
    const readstat = "all"
    const [Books, setBooks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8000/Bookdata')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setBooks(data)
        })
    }, [])

    return ( 
        <div className="Allbooks">
            <Booklist Books={Books} readstat={readstat}  />
        </div>
     );
}
 
export default Allbooks;