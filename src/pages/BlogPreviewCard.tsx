import '../assets/blogPreviewCardAssets/blogPreviewCard.css';

import topIMG from '../assets/blogPreviewCardAssets/images/illustration-article.svg';
import userIcon from '../assets/blogPreviewCardAssets/images/image-avatar.webp'
import favicon from '../assets/blogPreviewCardAssets/images/favicon-32x32.png'

export default function BlogPreviewCard() {

    return (
        <div id='blogPreviewCardContainer'>
            <Card />
            <link rel='icon' href={favicon}></link>
        </div>
    )
}

function Card() {

    return (
        <div id='cardContainer'>
            <img src={topIMG} alt='Interface Image'></img>
            <div id='learningBox'>
                <p>Learning</p>
            </div>
            <p id='datePublished'>Published 21 Dec 2023</p>
            <h2>HTML & CSS foundations</h2>
            <p id='description'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div id='authorContainer'>
                <img src={userIcon} alt='User Icon'></img>
                <p>Greg Hooper</p>
            </div>
        </div>
    )
}