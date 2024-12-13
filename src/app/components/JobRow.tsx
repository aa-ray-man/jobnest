import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function JobRow() {
  return (
    <div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 relative">
            <div className='absolute text-gray-500 cursor-pointer top-4 right-4'>
                <FontAwesomeIcon className='size-5' icon={faHeart}/>
            </div>
            <div className='content-center'>
                <img className='size-12' src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="spotify" />
            </div>
            <div className='grow'>
                <div className='text-gray-600 text-md'>Spotify</div>
                <div className='font-bold text-lg mb-1'>Product Designer</div>
                <div className='content-end text-gray-600 text-sm'>
                    Remote &middot; Chicago, USA &middot; Full-time
                </div>
            </div>
            <div className='content-end text-gray-500 text-sm'>2 weeks ago</div>
        </div>
    </div>
  )
}

export default JobRow