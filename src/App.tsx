import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importing "Pages":
import BlogPreviewCard from './pages/BlogPreviewCard';
import MortgageRepaymentCalculator from './pages/MortgageRepaymentCalculator';




// Functionality:
export default function App() {

    const routes = linkArray.map(link => <Route path={link.link} element={link.componentName} /> )

    return (
        <BrowserRouter>
            <Routes>
                {routes}
            </Routes>
        </BrowserRouter>
    )
}

function HomePage() {

    const links = linkArray.map(link => <li><Link to={link.link}>{link.name}</Link>{link.level > 0 && ' Level: ' + link.level}</li> )

    return (
        <>
            <h1>This is the home page</h1>
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        </>
    )
}

const linkArray = [
    {
        'link': '/',
        'name': 'Home',
        'componentName': <HomePage />,
        'level': 0,
    },
    {
        'link': '/blog-preview-card',
        'name': 'Blog Preview Card',
        'componentName': <BlogPreviewCard />,
        'level': 1,
    },
    {
        'link': '/mortgage-repayment-calculator',
        'name': 'Mortgage Repayment Calculator',
        'componentName': <MortgageRepaymentCalculator />,
        'level': 2,
    },
];