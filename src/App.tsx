import React, { useEffect, useState } from 'react';
import { getPosts, getUserById, getUsers, IPost, IUser } from './api';
import { GlobalStyle, Title, Wrapper } from './App.styles';
import PostItem from './components/PostItem';
import SearchInput from './components/SearchInput';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);


  useEffect(() => {
    getPosts()
      .then(posts => {
        setPosts(posts)
      })
    getUsers()
      .then(users => setUsers(users))
  }, [])


  
  useEffect(() => {
    setFilteredPosts(
      posts.filter(p => p.body.toLowerCase().includes(searchValue))    
    )
  }, [searchValue, posts])
  
  const postsList = filteredPosts.map((post:IPost) =>{
    let user = getUserById(users, post.userId);

    return user ? { ...post, ...user} : null;
})

  return (
    <>
    <GlobalStyle />
      <Wrapper>
        <Title>Posts</Title>
        <SearchInput searchValue={searchValue} setSearchValue = {setSearchValue} />
        <>
          {
            postsList.map(post => {
              return post && <PostItem post={post} />
              }
            )
          }
        </>
      
      </Wrapper>
    </>
  );
}

export default App;
