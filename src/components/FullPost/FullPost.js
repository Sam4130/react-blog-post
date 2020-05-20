import React, { Component } from 'react';
import axios from "axios";

import './FullPost.css';

class FullPost extends Component {

    state ={
        loadedPost: null,
    };

    // when you call the setstate from inside the compoenetdid update, you create a infinite loop
    componentDidUpdate() {
        if(this.props.id){
            // no loaded post or loaded post
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get('/posts/' + this.props.id)
                    .then(response =>{
                        this.setState({loadedPost: response.data});
                        //console.log(response);
                    } );
            }
        }
    };

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response =>{
                console.log(response);
            });
}

    render () {
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        // indicating that the post is loading
        if(this.props.id){
           post = <p style={{textAlign:"center"}}>Post is Loading!!!</p>;
        }
        // initial is null and treated as false
        // id value greater than 1 will trigger a selected post below
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;
