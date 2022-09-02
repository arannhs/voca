import './App.css';
import CreateWord from './components/CreateWord';
import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import CreateDay from './components/CreateDay';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}/>
          <Route path="/day/:day" element={<Day />}/>
          <Route path="/create_word" element={<CreateWord />}/>
          <Route path="/create_day" element={<CreateDay />}/>
          <Route path="*" element={<EmptyPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
