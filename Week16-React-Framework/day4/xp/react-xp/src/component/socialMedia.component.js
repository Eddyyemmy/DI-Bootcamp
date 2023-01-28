import React from 'react';
import post from './../data/socialmediadata.json';

export class SocialMedia extends React.component {
    constructor(props) {
        super(props)
    }

        render() {
            const media = post.SocialMedia.map((media) => <li>{media}</li>);
            return media;
        }
}