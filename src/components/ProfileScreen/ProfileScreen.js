import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import Nav from '../Nav/Nav'
import './ProfileScreen.css'
import { auth } from '../../firebase';

function ProfileScreen() {

    const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen__body">
            <h1>Edi Profile</h1>
            <div className="profileScreen__info">
                <img src='/avatar.png'></img>
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <button onClick={()  => auth.signOut()} nclassName='profileScreen__signOut'>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen