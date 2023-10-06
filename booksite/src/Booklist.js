import Onebook from "./Onebook";
const Booklist = ({Books, readstat}) => {
    
    let isall = (readstat === "all");
    let isread = (readstat === "read");
    let notread = (readstat === "not read");
    let reading = (readstat === "reading");
    
    return ( 
        <div className="Booklist">
            {Books.map((book) => (
                <div>
                    {(isall) && <Onebook book={book} />}
                    {(isread) && (book.readstatus === "read") && <Onebook book={book}/>}
                    {(notread) && (book.readstatus === "not read") && <Onebook book={book}/>}
                    {(reading) && (book.readstatus === "reading") && <Onebook book={book}/>}
                </div>
            ))
            }
        </div>
     );
}
 
export default Booklist;