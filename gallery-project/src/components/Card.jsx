import React from 'react'

const Card = (props) => {
    
    return (
        <a href={props.elem.url} target='blank'>
            <div className='w-50 h-55 rounded'>
                <img src={props.elem.download_url} className='w-full h-[85%] object-cover' />
                <h3 className='text-center text-sm font-bold leading-8'>{props.elem.author}</h3>
            </div>
        </a>
    )
}

export default Card