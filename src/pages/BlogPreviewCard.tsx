import '../assets/blogPreviewCardAssets/blogPreviewCard.css';

import IllustrationArticle from '../assets/blogPreviewCardAssets/images/illustration-article.svg';


export default function BlogPreviewCard() {



    return (
        <div id='blogPreviewCardContainer'>
            <Card />
        
        </div>
    )
}

function Card() {



    return (
        <div id='cardContainer'>
            <img></img>
            <div id='learningBox'>
                <p>Learning</p>
            </div>
            <p>Published 21 De 2023</p>
            <h2>HTML & CSS foundations</h2>
            <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div id='authorContainer'>
                <img></img>
                <p>Greg Hooper</p>
            </div>


        </div>
    )
}