import React from 'react';
import { useState, useEffect } from 'react';
import email from '../assets/email.svg'
import location from '../assets/location.svg'
import phone from '../assets/phone.svg'
import axios from 'axios';


const Card = () => {

    const [user, setUser] = useState();
    const [getNewUser, setNewUser] = useState(false);


    useEffect(() => {

        axios.get('https://randomuser.me/api/').then((response) => setUser(response.data.results[0]))

    }, [getNewUser]);
    const changeUser = () => {
        setNewUser(!getNewUser)
    }
    // console.log(user);
    return (
        <div className="container">
            <div className="card-container">
                <div className="top-part">
                    <img src={user?.picture?.large} alt="user-pict" />
                    <h3>{user?.name?.title + " " + user?.name?.first + " " + user?.name?.last}</h3>
                </div>
                <div className="bottom-part">
                    <div className="info">
                        <img src={email} alt="user-pict" />
                        <p className="info-text">{user?.email} </p>
                    </div>
                    <div className="info">
                        <img src={phone} alt="user-pict" />
                        <p className="info-text">{user?.cell} </p>
                    </div>
                    <div className="info">
                        <img src={location} alt="user-pict" />
                        <p className="info-text">{user?.location.city + "-" + user?.location?.state} </p>
                    </div>
                    <p>Age:{user?.dob?.age}</p>
                    <p>Register Date:{user?.registered?.date.slice(0, 10)} </p>
                </div>
            </div>
            <button onClick={changeUser} >Random User</button>
        </div>




    )
}

export default Card