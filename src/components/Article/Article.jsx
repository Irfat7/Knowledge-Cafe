import React from 'react';
import './Article.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCheck } from '@fortawesome/free-solid-svg-icons'

const Article = (props) => {

    const { id, cover, profilePic, name, date, title, hashtags, readingTime } = props.article

    const calculateDuration = () => {
        let postDate = new Date(date);
        let today = new Date();
        let difference = today.getTime() - postDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }
    const bookMarkHandler=props.bookMarkHandler
    const markAsReadHandler=props.markAsReadHandler
    const postedDay = calculateDuration();
    const existInBookmark = props.existInBookmark
    return (
        <div className='article'>
            <img className='article-cover' src={cover} alt="" />
            <div className="article-info-container">
                <div className='author-info-container'>
                    <img src={profilePic} alt="" />
                    <div className="name-date-container">
                        <h3>{name}</h3>
                        <p>{date} ({postedDay} days ago)</p>
                    </div>
                </div>

                <div className='read-button-container'>
                    <p>{readingTime.toString().padStart(2, '0')} min read</p>
                    <button onClick={()=>bookMarkHandler(props.article)}>
                        {existInBookmark ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faBookmark} />}
                        </button>
                </div>
            </div>

            <h1 className='title'>{title}</h1>
            <p className='hashtag'>
                {hashtags.map((tag, index) => <span key={index+id}>#{tag}</span>)}
            </p>

            <button onClick={()=>{markAsReadHandler(props.article)}}>Mark as read</button>
        </div>
    );
};

export default Article;