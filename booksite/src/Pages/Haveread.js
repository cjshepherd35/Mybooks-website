import Usefetch from "../Usefetch";
const Haveread = () => {
    const readstat = "read"
    const cname = "Haveread"
    const extens = "Bookdata"
    return ( 
        <Usefetch cname={cname} readstat={readstat} extens={extens} />
     );
}
 
export default Haveread;