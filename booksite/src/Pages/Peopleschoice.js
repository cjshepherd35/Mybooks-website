import Usefetch from "../Usefetch"

const Pchoice = () => {

    const readstat = "all"
    const cname = "Haveread"
    const extens  = "Peoplesbooks"
    return ( 
        <Usefetch cname={cname} readstat={readstat} extens={extens} />
     );
}
 
export default Pchoice;