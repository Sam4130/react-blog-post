import React, { Component } from 'react';
import axios from "axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state  = {
        posts:[],
        selectedPostId: null,
        error: false,
    }
    componentDidMount() {
        axios.get('/posts')
        .then( response =>{
            const posts = response.data.slice(0, 4);
            const updatePosts = posts.map(post =>{
                return{
                    ...post,
                    author: "Sam"
                }
            });
            this.setState({posts: updatePosts});
            //console.log(response)
        } )
            // handles when axios upload or somthing else fails
            .catch(error =>{
               this.setStae({error: true});
            });
    }

    // handles when user selects the post
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {
        let posts = <p style={{textAlign:'center'}}>You broke somthing!!!!</p>
        if(!this.state.error){
           posts = this.state.posts.map(post =>{
                return <Post key={post.id} title={post.title}
                             author={post.author}
                             clicked={() => this.postSelectedHandler(post.id)}/>;
            });
        }


        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }

}

export default Blog;
