import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessagecContainer from '../../components/message/MessagecContainer.jsx'

const Home = () => {
  return (
    <div className='flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 md:h-[600px] sm:h-[500px]'>
      <Sidebar/>
      <MessagecContainer/>
    </div>
  )
}

export default Home