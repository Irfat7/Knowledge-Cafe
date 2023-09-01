import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h1 className='questions'>What is the difference between props and state</h1>
            <ul className="answer-container">
                <li>
                    <span>Mutability : </span>Props are passed to a component by its parent component, and they are considered immutable. Once set, props cannot be changed by the child component receiving them. They are read-only. State is a feature of React components that allows them to manage and update their own data. Unlike props, state is mutable, and it can be modified by the component that owns it.
                </li>

                <li>
                    <span>Accessibility : </span>Props can be accessed by child components where state can not be accessed by child components.
                </li>

                <li>
                    <span>Usage : </span>Props are used for communicating data where states are used for dynamic changes.
                </li>
            </ul>

            <h1 className='questions'>How useState works?</h1>
            <p className="answer-container">
                useState is a react hook that allows to introduce and manage state within functinoal components. this is basically a function which takes an argument as an initial value and returns an array of length two where the first element contains the state and the second element is the function that can manipulate the state. Here the state can only be changed by the function.
            </p>

            <h1 className='questions'>Where we can use useEffect apart from with fetch()?</h1>
            <ul className="answer-container">
                <li>
                    Updating the Document Title
                </li>
                <li>
                    Managing Timers and Intervals
                </li>
                <li>
                    Handling Authentication or Authorization
                </li>
                <li>
                    Managing Local Storage:
                </li>
                <li>
                    Interacting with Third-Party Libraries:
                </li>
            </ul>

            <h1 className='questions'>How React works?</h1>
            <p className="answer-container">
                ReactJS is a javascript library used for making reusable UI. React basically works using a virtual dom 
                which is very lightweight than the main dom and checks for any changes and changes only the elements that are needed to change avoiding rerender which makes it very efficient and powerful. For changes it used diffing algorithm which works on based on two principles. If the parent node does not match rerender the parent node and in case of any difference in attribute it changes the attribute value.
            </p>
        </div>
    );
};

export default Question;