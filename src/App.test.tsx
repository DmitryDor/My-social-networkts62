import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {store} from "./redux/state";


test('renders learn react link', () => {
  const { getByText } = render(<App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                                    addMessage={store.addMessage.bind(store)} updateNewMessageText= {store.updateNewMessgeText.bind(store)}/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});