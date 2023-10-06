
import Usefetch from "../Usefetch";

const Allbooks = () => {
    const readstat = "all"
    const cname = "Allbooks"
    const extens = "Bookdata"
    return (
        <Usefetch readstat={readstat} cname={cname} extens={extens}/>
    )
}
 
export default Allbooks;