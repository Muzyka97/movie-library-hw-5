import { Routes, Route } from 'react-router-dom';

import Menu from './modules/Menu';
import  HomePage  from './pages/HomePage';
import  Movies  from './pages/Movies';
import MovieDetailsPage from './pages/MovieDetailsPage';
// import Cast from './pages/Cast';
// import Reviews from './pages/Reviews';

function App  () {
  return(
    <div>
      <Routes>
        <Route path='/'element={<Menu/>} >
        <Route index element={<HomePage/>} />
        <Route path='/movies'element={<Movies/>} />
        </Route>
        <Route path='/movies/:id'element={<MovieDetailsPage/>}/>
        {/* <Route path='/movies/:movieId/cast'element={<Cast/>} />
        <Route path='/movies/:movieId/reviews'element={<Reviews/>} />
        </Route> */}
      </Routes>
    </div>
  );
};
export default App;

