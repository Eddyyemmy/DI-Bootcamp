import React from 'react';
import post from './../data/data.json';

export class PortList extends React.component {
    constructor(props) {
        super(props)
        console.log('d', post);
    }


    render() {
        const allPost = post.map((post) => (
            <div>
                <h2>{post.title}</h2>
                <h3>{post.conent}</h3>
                <p>{post.date}</p>    
            </div>
        ))

        return allPost;
    }
}