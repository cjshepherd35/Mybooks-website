import { useState, useEffect } from "react";
import Booklist from "../Booklist";
const Pchoice = () => {

    
    const [Books, setBooks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8000/PeoplesBooks')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setBooks(data)
        })
    }, [])


    return ( 
        <div className="YourBooks">
            <Booklist Books={Books}  />
        </div>
     );
}
 
export default Pchoice;