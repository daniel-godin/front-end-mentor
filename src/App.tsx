import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importing "Pages":
import BlogPreviewCard from './pages/BlogPreviewCard';




// Functionality:
export default function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog-preview-card' element={<BlogPreviewCard />} />
        </Routes>
    </BrowserRouter>
  )
}

function HomePage() {

    return (
        <>
            <h1>This is the home page</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog-preview-card'>Blog Preview Card</Link></li>
                </ul>
            </nav>
        </>
    )
}