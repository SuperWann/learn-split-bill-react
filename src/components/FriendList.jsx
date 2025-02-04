import Friend from "./Friend";

function FriendList({friends, onSelectFriend, selectedFriend}) {
    return(
        <ul>
            {friends.map((friend, index) => (
                <Friend 
                    friend={friend} 
                    key={index} 
                    onSelectFriend={onSelectFriend}
                    selectedFriend={selectedFriend} // data friend yang dipilih
                />
            ))}
        </ul>
    )
}

export default FriendList;