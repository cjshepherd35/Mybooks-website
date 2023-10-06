
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Allbooks from './Pages/Allbooks';
import Haveread from './Pages/Haveread';
import Notread from './Pages/Notread';
import Reading from './Pages/Reading'
import Addchoice from './Pages/Addchoice';
import Pchoice from './Pages/Peopleschoice';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Book Lists</h1>
        <Navbar />
          <div className="Content">
            <Routes>
              <Route path='/' element={<Allbooks />}></Route>
              <Route path='/read' element={<Haveread />}></Route>
              <Route path='/notread' element={<Notread />}></Route>
              <Route path='/reading' element={<Reading />}></Route>
              <Route path='/people' element={<Pchoice />}></Route>
              <Route path='/add' element={<Addchoice />}></Route>
            </Routes>
          </div>
      
      </div>
    </Router>

    // <div className="App">
    //   <Navbar />
    //   <h1>All Books</h1>
    //   <Allbooks />
    // </div>
  );
}

export default App;
