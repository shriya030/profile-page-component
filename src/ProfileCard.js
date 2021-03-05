import React from 'react';
import './ProfileCard.css';
import cardImage from './images/bg-pattern-card.svg';

function ProfileCard(user) {
    return (
        <div className='profileCard'>
        <img className='banner' src={cardImage} alt='' />
            <img className='avatar' src={user.avatar} alt='' />
            <div className="basic-info">
                <h3 className="name"> {user.name}  <span className="age">{user.age}</span> </h3>
               
            </div>
            <p className="location">{user.location}</p>
            <div className="divider"></div>
            <div className="social-info">
                <div className="followers">
                    <h3>{user.followers}</h3>
                    <p>Followers</p>
                </div>
                <div className="likes">
                    <h3>{user.likes}</h3>
                    <p>Likes</p>
                </div>
                <div className="photos">
                    <h3>{user.photos}</h3>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
