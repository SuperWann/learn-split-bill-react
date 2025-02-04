import { useState } from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import { use } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    img: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    img: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    img: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {

  const [friends, setFriends] = useState(initialFriends) 
  //berfungsi untuk menyimpan data friend, mengunakan initialFriends sebagai useState agar sesuai dengan data pada object initialFriends
  //dan juga untuk memindahkan data pada object initialFriends ke variabel "friends"
  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowAddFriend(){
    setShowAddFriend((showAddFriend)=>!showAddFriend)
  }

  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend])
  }

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendList friends={friends} />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <button className='button' onClick={handleShowAddFriend}>
            {showAddFriend ? 'Tutup' : 'Tambah Teman'}
          </button>
        </div>

        <FormSplitBill />
      </div>
    </>
  )
}

export default App
