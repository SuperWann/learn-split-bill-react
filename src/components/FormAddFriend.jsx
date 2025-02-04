import {useState} from "react";

function FormAddFriend({onAddFriend}){

    const [name, setName] = useState("");
    const [img, setImg] = useState("https://i.pravatar.cc/48")

    function handleSubmit(e) {
        e.preventDefault();
    
        if (!name || !img) return;
    
        const id = crypto.randomUUID();
        const newFriend = {
          id,
          name,
          img: `${img}?=${id}`,
          balance: 0,
        };
        onAddFriend(newFriend);
        setName("");
      }

    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="">😇Nama</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="">🧑‍💻Gambar</label>
            <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/> {/* value awal berasal dari variable img, dan ketika berubah akan disimpan ke variable setImg */}

            <button className="button">Tambah</button>
        </form>
    )
}

export default FormAddFriend;   