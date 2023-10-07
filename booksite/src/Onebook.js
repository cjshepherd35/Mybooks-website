const Onebook = (props) => {
    const book = props.book
    
    return (    <div className="bookpreview" key={book.id}>
                    <h2>{book.name}</h2>
                    <p>Written by: {book.author}</p>
                    {book.readstatus && <p>read status: {book.readstatus}</p>}
                    {book.person && <p>submitted by: {book.person} </p> }
                </div> );
}
 
export default Onebook;