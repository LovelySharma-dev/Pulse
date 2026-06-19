import React from 'react'
import BorderAnimatedContainer from '../components/BorderAnimatedContainer'
import { useAuthStore } from '../store/useAuthStore'
import ProfileHeader from '../components/ProfileHeader.jsx'
import ActiveTabSwitch from '../components/ActiveTabSwitch'
import ChatsList from '../components/ChatsList'
import ContactList from '../components/ContactList'
import ChatContainer from '../components/ChatContainer'
import NoConversationPlaceholder from '../components/NoConversationPlaceholder'
import { useChatStore } from '../store/useChatStore.js'

const ChatPage = () => {

  const {activeTab, selectedUser} = useChatStore()
  return (
    <div className="relative w-full max-w-6xl h-[600px]">
     <BorderAnimatedContainer>
      {/* Left side */}

      <div className="w-80 bg-zinc-700/50 backdrop-blur-sm flex flex-col">
      <ProfileHeader/>
      <ActiveTabSwitch/>

      <div className='flex-1 overflow-y-auto p-4 space-y-2'>
        {activeTab === "chats"  ? <ChatsList/> : <ContactList/>}
      </div>
      </div>

      {/* right side */}
      <div className="flex-1 flex flex-col bg-zinc-950/50 backfrop-blur-sm">
      {selectedUser ? <ChatContainer/> : <NoConversationPlaceholder/> }
      </div>
     </BorderAnimatedContainer>
    </div>
  )
}

export default ChatPage