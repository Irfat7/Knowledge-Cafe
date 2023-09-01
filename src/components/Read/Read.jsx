import React from 'react';
import './Read.css'
import Article from '../Article/Article';
import Bookmarks from '../Bookmarks/Bookmarks';

const Read = () => {
    return (
        <main className='read-container'>
            <section className='articles-container'>
                <Article />
                <Article /><Article /><Article />
            </section>

            <section className='record-container'>
                <h1 className='record-time'>Spent time on read : 177 min</h1>
                <Bookmarks />
            </section>
        </main>
    );
};

export default Read;