import React from 'react';
import '../Styles/Project/project.css'

function coinToss() {
    return Math.random() < 0.5 ? 'heads' : 'tails';
};

const pics = {
    kitty: '//img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-what-to-do-about-hairballs-in-cats.jpg',
    doggo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
};

export class Project extends React.Component {

    render() {
        return (
            <div className='project'>
                <div className='img-container'>
                    <img src={coinToss() === 'heads' ? pics['kitty'] : pics['doggo']} alt='project-img'></img>
                </div>
                <h1>{this.props.project.name}</h1>
                <h3><a href={this.props.project.codepen} target='_blank' rel='noopener noreferrer'>CodePen</a></h3>
                <h3><a href={this.props.project.github} target='_blank' rel='noopener noreferrer'>GitHub</a></h3>
            </div>

        );
    }
};
