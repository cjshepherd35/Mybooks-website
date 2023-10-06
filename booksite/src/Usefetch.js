import { useState, useEffect } from "react";
import Booklist from "./Booklist";
//classname, readstat
const Usefetch = ({cname, readstat, extens}) => {

    const [Books, setBooks] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:8000/' + extens )
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setBooks(data)
        })
    }, [])

    return ( 
        <div className={cname}>
            <Booklist Books={Books} readstat={readstat}  />
        </div>
     );
}
 
export default Usefetch;