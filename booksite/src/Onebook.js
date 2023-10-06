const Onebook = (props) => {
    const book = props.book
    console.log(book)
    console.log('hello')
    return (    <div className="bookpreview" key={book.id}>
                    <h2>{book.name}</h2>
                    <p>Written by: {book.author}</p>
                    {book.readstatus && <p>read status: {book.readstatus}</p>}
                </div> );
}
 
export default Onebook;