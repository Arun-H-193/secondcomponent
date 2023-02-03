import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Front from './front';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
