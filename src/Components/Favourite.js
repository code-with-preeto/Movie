import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
function Favourite({ favour }) {
const [newFav,changeFav] = useState(favour)
    function deleteFromFavourite(index){
        let newFavData = [...newFav];
        newFavData.splice(index,1);
        changeFav(newFavData);
    }
    return (
        <>
            {
                newFav.length >=1 ? (
                    newFav.map((a,i) => {
                        return (
                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img src={a.poster} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{a.title}</h5>
                                                    <button onClick={()=>{deleteFromFavourite(i)}} className="btn btn-danger">Remove</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                ) : (
                    <p>No Movies found</p>
                )
            }
        </>
    )
}
export default Favourite;