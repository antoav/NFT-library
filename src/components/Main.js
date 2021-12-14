import React, { useEffect, useState, } from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'
import twitterLogo from '../assets/owner/twitter.png'


const Main = ({ selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[1])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img 
                            className='selectedPunk' 
                            src={ activePunk.image_original_url } alt=''
                        />
                    </div>
                </div>

                <div className='punkDetails'>
                    <div className='title'> 
                       { activePunk.name }
                       <span className='itemNumber'> #{activePunk.token_id}</span>
                    </div>


                    <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img 
                            src={activePunk.owner.profile_img_url } alt=''
                        />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div className='ownerAddress'> {activePunk.owner.address} </div>
                            <div className='ownerHandle'>@CleverProgrammer</div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Main
