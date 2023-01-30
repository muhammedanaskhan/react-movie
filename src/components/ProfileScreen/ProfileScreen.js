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
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src='/avatar.png'></img>
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans (Current Plan:premium)</h3>
                        <p>Renewal date: 04/03/2023</p>
                        <div className='plans'>
                            <div className='plan__one'>
                                <div>
                                    <h5>Premium</h5>
                                    <h6>4K + HDR</h6>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className='plan__two'>
                                <div>
                                    <h5>Basic</h5>
                                    <h6>720p</h6>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className='plan__three'>
                                <div>
                                    <h5>Standard</h5>
                                    <h6>1080p</h6>
                                </div>
                                <button>Subscribe</button> 
                            </div>
                        </div>
                        <button onClick={()  => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen