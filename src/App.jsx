import { useState } from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

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
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend(){
    setShowAddFriend((showAddFriend)=>!showAddFriend)
    setSelectedFriend(null);
  }

  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend])
  }

  function handleSelectedFriend(friend) { //value paramnya berasal dari friend yang dipilih pokoknya mah
    setSelectedFriend((selected) => 
      (selected?.id === friend.id ? null : friend)
    ); 
    //1. pengecekan apakah id tersedia?
    //2. pengecekan apakah id yang dipilih sama dengan id friend yang dipilih?
    //3. jika id yang dipilih sama dengan id friend yang dipilih maka akan diubah menjadi null/ditutup
    //4. jika id yang dipilih berbeda dengan id friend yang dipilih maka akan diubah menjadi id terbaru
    setShowAddFriend(false);
  }

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendList 
            friends={friends} 
            onSelectFriend={handleSelectedFriend}
            selectedFriend={selectedFriend} //menyimpan data friend yang dipilih
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <button className='button' onClick={handleShowAddFriend}>
            {showAddFriend ? 'Tutup' : 'Tambah Teman'}
          </button>
        </div>

        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </>
  )
}

export default App
