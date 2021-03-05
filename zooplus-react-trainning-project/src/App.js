import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PostsProvider } from './components/context/PostsContext'
import PostsList from './components/PostsList/PostsList'
import NewPost from './components/NewPost/NewPost'
import PostDetail from './components/PostDetail/PostDetail'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route path="/new" component={NewPost} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
      </PostsProvider>
    </BrowserRouter>  
  )
}

export default App
