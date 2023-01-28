import React from 'react';
import post from './../data/socialmediadata.json';

export class Experiences extends React.component {
    constructor(props) {
        super(props)
    }

    render() {
        const experience = post.Experiences.map((xp) => {
           return (
            <>
                <p>{xp.companyName}</p>
                <img src={xp.logo} width='100' height='100' />
                {xp.roles.map((role) =>(
                    <>
                    <p>{role.title}</p>
                    <span>{role.startDate}</span>,
                    <span>{role.location}</span>
                    <p>{role.description}</p>
                    </>
                ))}
            </>
           );
        });
         return experience;
    }
}