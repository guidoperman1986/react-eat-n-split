import { Button } from "./Button";

/* eslint-disable react/prop-types */
export function FirendsList({friends, friendSelected, onSelectFriend}) {
  
    return (
      <ul>
        {
          friends.map(friend => (
            <Friend 
              friend={friend} 
              key={friend.id} 
              friendSelected={friendSelected}
              onSelectFriend={onSelectFriend} 
            />
          ))    
        }
      </ul>
    )
}

export function Friend({friend, friendSelected, onSelectFriend}) {
    const isSelected = friendSelected?.id === friend?.id;
  
    return <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
  
        {friend.balance <   0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}</p>}
        {friend.balance >   0 && <p className='green'>Your friend owes you {friend.name} {Math.abs(friend.balance)}</p>}
        {friend.balance === 0 && <p>You and your friend are even</p>}
      
      <Button 
        onClick={() => onSelectFriend(friend)}
      >{ isSelected ? "Close" : "Select"}</Button>
    </li>
}