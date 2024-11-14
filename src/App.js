import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import Card from './Components/Card'
import Favourite from './Components/Favourite';
function App() {

  const [val, setVal] = useState('');
  const [movies, setMovies] = useState([]);
  const [fav,changeFav]= useState([]);
  
  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=aee9f82&s=${val}`);
      const jsonData = await data.json();
      setMovies(jsonData.Search);
    }
    fetchData()
  })
  function addMovies(movies){
    let newData = [...fav,movies];
    changeFav(newData);
  }

  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/favourite">
                    Favourite
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<div className="container text-center">
            <input placeholder='enter movie' onChange={(e) => { setVal(e.target.value) }} value={val} />
            {/* <button className="btn btn-info" onClick={() => { fetchData() }}>Click</button> */}
            <div class="row">
              {
                movies &&
                movies.map((a) => {
                  return (
                    <>
                      <Card title={a.Title} poster={a.Poster}  addToFavourites={addMovies}/>


                    </>

                  )
                })
              }
            </div>


          </div>} />
          <Route path="/favourite" element={<Favourite favour={fav}/>} />
        </Routes>
      </BrowserRouter>
    </>


  )

}
export default App;
