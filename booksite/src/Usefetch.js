import { useState, useEffect } from "react";
import Booklist from "./Booklist";
//classname, readstat
const Usefetch = ({cname, readstat, extens}) => {

    const [Books, setBooks] = useState([]);
    
    useEffect( () => {
        fetch('https://booksite-7cde2-default-rtdb.firebaseio.com/' + extens + '.json' )
        .then(res => {
            return res.json()
        })
        .then((data) => {

            const Bookdata = []
            for(const key in data) {
                const book = {
                    id : key,
                    ...data[key]
                }
                Bookdata.push(book)
            }
            setBooks(Bookdata)
            
        })
    }, [])
    
    return ( 
        <div className={cname}>
            <Booklist Books={Books} readstat={readstat}  />
        </div>
     );
}
 
export default Usefetch;