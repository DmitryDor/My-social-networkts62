import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType = {
    id: string,
    message: string
}

export type PropsType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
}

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

let dialogsData: Array<DialogsType> = [
    {id: "1", name: "Dimych"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "Sveta"},
    {id: "4", name: "Sasha"},
    {id: "5", name: "Victor"},
    {id: "6", name: "Valera"}
];

let messagesData: Array<MessagesType>  = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How are you?"},
    {id: "3", message: "I'm fine"},
    {id: "4", message: "I'm happy"},
    {id: "5", message: "Happy new year"}
];

let postData: Array<PostType> = [
    {id: "1", message: "Dimych", likesCount: 10},
    {id: "2", message: "Andrey", likesCount: 5 },
    {id: "3", message: "Sveta", likesCount:  7 },
    {id: "4", message: "Sasha", likesCount:  8},
    {id: "5", message: "Victor", likesCount: 5},
    {id: "6", message: "Valera", likesCount: 18}
];


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
