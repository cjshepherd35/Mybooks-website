import Usefetch from "../Usefetch"
const Notread = () => {
    const readstat = "not read"
    const cname = "Notread"
    const extens = "Bookdata"
    return ( 
        <Usefetch cname={cname} readstat={readstat} extens={extens} />
     );
}
 
export default Notread;