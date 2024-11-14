import 'bootstrap/dist/css/bootstrap.min.css';
function Card({poster,title, addToFavourites}) {
    function addData(){
        addToFavourites({poster,title})
    }
    return (
        <>
        <div className="col lg-3">
        <div className="card" style={{ width: "18rem" }}>
                <img src= {poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <button onClick={addData} className="btn btn-danger">Add to Favourites</button>
                </div>
                
            </div>
            
        </div>

        </>
    )
}
export default Card;