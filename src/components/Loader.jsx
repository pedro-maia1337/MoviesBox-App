import loading from '../img/loading.svg'
import "./Loader.css"

function Loader(){
    return (
        <div className="loader_container">
            <img className="loader" src={loading} alt="Loading" />
        </div>
    )
}

export default Loader