function Friend({friend, onSelectFriend, selectedFriend}) {

    const isSelected = selectedFriend?.id === friend.id; // jika id yang dipilih sama dengan id friend yang dipilih

    return (
        <li className={isSelected ? "selected" : ""}> {/* jika id yang dipilih sama dengan id friend yang dipilih */}
            <img src={friend.img} alt={friend.name}/>
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                {friend.name} berhutang Rp{Math.abs(friend.balance)} ke kamu
                </p>
            )}
            {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang</p>}
            <button className="button" onClick={()=> onSelectFriend(friend)}> {/* ketika click maka akan mengirimkan data friend */}
                {isSelected ? "Tutup" : "Pilih"} {/* jika isSlected ada value maka akan menampilkan "Tutup", jika tidak maka akan menampilkan "Pilih */}
            </button>
        </li>
    )
}

export default Friend;