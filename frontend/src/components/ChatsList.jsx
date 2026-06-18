import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import { useAuthStore } from '../store/useAuthStore'
import UsersLoadingSkeletom from './UsersLoadingSkeletom'
import NoChatsFound from './NoChatsFound'

const ChatsList = () => {
    const {getMyChatPartners,chats, isUserLoading, setSelectedUser} = useChatStore()
    const {onlineUsers} = useAuthStore()

    useEffect(() => {
        getMyChatPartners()
    }, [getMyChatPartners])

    if(isUserLoading) return <UsersLoadingSkeletom/>
    if(chats.length === 0) return <NoChatsFound/>

  return (
    <>
    {chats.map((chat) => (
        <div >
            <div key={chat.id} className='bg-violet-500/10 p-4 rounded-lg cursor-pointer hover:bg-violet-500/20 transition-colors' onClick={() => setSelectedUser(chat)}>
                <div className='flex items-center gap-3'>
                    <div className={`avatar ${onlineUsers.includes(chat._id) ? "online" : "offline"}`} >
                        <div>
                            <img src={chat.profilePic || "./user.png"} alt={chat.fullname} />
                        </div>

                        <h4 className='text-zinc-200 font-medium truncate'>{chat.fullname} </h4>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default ChatsList