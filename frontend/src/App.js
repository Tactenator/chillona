import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer';
import Navbar from './components/navbar';
import Create from './pages/Admin/Create';
import ArticleDetails from './pages/Articles/ArticleDetails';
import Articles from './pages/Articles/Articles';
import Error from './pages/Error';
import Home from './pages/Home';
import Quiz from './pages/Quiz/Quiz';
import QuizDisplay from './pages/Quiz/QuizDisplay.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/quiz" element={<QuizDisplay />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/create" element={<Create />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
