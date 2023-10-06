import Onebook from "./Onebook";
const Booklist = ({Books, readstat}) => {
    console.log({readstat})
    return ( 
        <div className="Booklist">
            {Books.map((book) => (
                (readstat === "read") && <Onebook book={book} />
                //(readstat === "read") && <Onebook book={book}/>
            ))

            }
            
        </div>
     );
}
 
export default Booklist;