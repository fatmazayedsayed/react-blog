import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import Home from './pages/Home';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:{articleId}" element={<ArticleList />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
