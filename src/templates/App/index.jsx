import React from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts/index';
import { CounterProvider } from '../../contexts/CouterProvider/index';
const App = () => {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
};

export default App;
