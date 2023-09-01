import React, { useEffect, useState } from 'react';
import './Read.css'
import Article from '../Article/Article';
import Bookmarks from '../Bookmarks/Bookmarks';
import { addToLs, getTheLS } from '../../utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../Question/Question';

const Read = () => {
    const [articles, setArticles] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [markedRead, setMarkedRead] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    useEffect(() => {
        const ls = getTheLS()
        const tempBookmark = []
        const tempReadList = []
        for (let bookmark of ls['bookMarkList']) {
            const itemToAdd = articles.find(article => article.id === bookmark)
            if (itemToAdd) {
                tempBookmark.push(itemToAdd)
            }
        }

        for (let readArticle of ls['readList']) {
            const itemToAdd = articles.find(article => article.id === readArticle)
            if (itemToAdd) {
                tempReadList.push(itemToAdd)
            }
        }

        setBookmarks(tempBookmark)
        setMarkedRead(tempReadList)
    }, [articles])

    const bookMarkHandler = (article) => {
        const exist = bookmarks.find(bookmark => bookmark.id === article.id)
        if (!exist) {
            setBookmarks([...bookmarks, article])
            addToLs(article.id, 'bookMarkList')
            toast.success('Bookmark updated!');
        }
        else {
            toast.warning('Already added in bookmark!');
        }
    }

    const markAsReadHandler = (article) => {
        const exist = markedRead.find(readArticle => readArticle.id === article.id)
        if (!exist) {
            setMarkedRead([...markedRead, article])
            addToLs(article.id, 'readList')
            toast.success('Marked as read!');
        }
        else {
            toast.warning('Already in the reading list');
        }
    }

    return (
        <main className='read-container'>
            <section className='articles-container'>
                {
                    articles.map(article => {
                        return <Article
                            key={article.id}
                            article={article}
                            bookMarkHandler={bookMarkHandler}
                            markAsReadHandler={markAsReadHandler}
                            existInBookmark={bookmarks.find(bookmark => bookmark.id === article.id)}
                        />
                    })
                }
                <Question />
            </section>

            <section className='record-container'>
                <h1 className='record-time'>Spent time on read :
                    {
                        markedRead.reduce((prev, crnt) => prev + crnt.readingTime, 0)
                    }
                </h1>
                <Bookmarks
                    bookmarks={bookmarks}
                />
                <ToastContainer />
            </section>
        </main>
    );
};

export default Read;