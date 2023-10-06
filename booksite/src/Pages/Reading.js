import Usefetch from "../Usefetch"
const Curread = () => {
    
    const readstat = "reading"
    const cname = "Curread"
    const extens = "Bookdata"
    return (
        <Usefetch readstat={readstat} cname={cname} extens={extens}/>
    )
}
 
export default Curread;