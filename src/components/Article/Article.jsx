import React from 'react';
import './Articel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Article = () => {
    return (
        <div className='article'>
            <img className='article-cover' src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
            <div className="article-info-container">
                <div className='author-info-container'>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                    <div className="name-date-container">
                        <h3>Name</h3>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>

                <div className='read-button-container'>
                    <p>5 min read</p>
                    <button><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>

            <h1 className='title'>How to get your first job as a self-taught programmer</h1>
            <p className='hashtag'>
                <span>#beginners</span>
                <span>#programming</span>
            </p>
            
            <button>Mark as read</button>
        </div>
    );
};

export default Article;