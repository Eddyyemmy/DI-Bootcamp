import React from 'react';
import post from './../data/socialmediadata.json';

export class SKills extends React.component {
    constructor(props) {
        super(props)
    }

        render() {
            return post.Skills.map((skill) => {
                const area = skill.Area;
                const skillSet = skill.SkillSet;
                return (
                    <>
                        <p>{area}</p>
                        {skillSet.map((set) =>(<li>{set.Name}</li>))}
                        
                    </>
                )
            })  
        }
}