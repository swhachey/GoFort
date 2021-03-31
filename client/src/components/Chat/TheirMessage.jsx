import React from 'react'

function TheirMessage({lastMessage, message}) {
    const firstMessageByUser = !lastMessage || lastMessage.sender.username ===! message.sender.username
    return (
        <div className="message-row">
            {firstMessageByUser && (
                <div 
                className="message-avatar"
                style={{backgroundImage: `url${message?.sender?.avatar}`}}
                />
            )}
        {message?.attachments?.length > 0
        ? (
        <img 
        src={message.attachments[0].file}
        alt="message"
        className="message-image"
        style={{marginLeft: firstMessageByUser ? '6px' : '50px'}}
        />
        ) : (
        <div className="message" style={{float:'right', marginRight:'18px', color:'white', backgroundColor:'#CABCDC'}}>
            {message.text}
        </div>
        )
    }
        </div>
    )
}

export default TheirMessage
