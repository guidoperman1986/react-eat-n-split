/* eslint-disable no-undef */
import { useState } from 'react';
/* eslint-disable react/prop-types */
import './index.css'
import { FirendsList } from "./FriendsList";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";

import { Button } from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [friendSelected, setFriendSelected] = useState(null)
  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleShowAddFriend()
  }

  function handleSelectFriend(friend) {
    setFriendSelected(current => current?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }

  function handleSplitBill(value) {
    setFriends(friends => friends.map(friend => friend.id === friendSelected.id 
        ? {...friend, balance: friend.balance + value} 
        : friend
      )
    )

    setFriendSelected(null);
  }


  return (
    <div className='app'>
      <div className='sidebar'>
        <FirendsList 
          friends={friends} 
          friendSelected={friendSelected}
          onSelectFriend={handleSelectFriend} 
        />

        { showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} /> }

        <Button onClick={handleShowAddFriend}>{ showAddFriend ? 'Close' : 'Add Friend'}</Button>        
      </div>

      {
        friendSelected && <FormSplitBill friendSelected={friendSelected} onSplitBill={handleSplitBill}></FormSplitBill>
      }
    </div>
  )
}

export default App