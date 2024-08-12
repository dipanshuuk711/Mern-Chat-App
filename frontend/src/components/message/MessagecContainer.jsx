import React from 'react'
import Header from './Header'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChat from './NoChat'

const MessagecContainer = () => {
     const noChat = true;

     return (
          <div className='md:min-w-[500px] flex flex-col'>
               {noChat ? (<NoChat />) : (<>
                    <Header />
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                         <span className='label-text'>To : </span>{" "}
                         <span className='text-gray-900 font-bold'>Dipanshu</span>
                    </div>

                    <Messages />
                    <MessageInput />
               </>)}
          </div>
     )
}

export default MessagecContainer;
