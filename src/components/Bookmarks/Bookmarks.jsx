import React from 'react';
import './Bookmarks.css'

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='bookmark-container'>
            <h1>Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <p key={bookmark.id} className='bookmark'> {bookmark.title} </p> )
            }
        </div>
    );
};

export default Bookmarks;