function FormSplitBill() {
    return (
        <form action="" className="form-split-bill">
            <h2>Patungan Bareng ...</h2>

            <label htmlFor="">✨Total Tagihan</label>
            <input type="text" name="" id="" />

            <label htmlFor="">😁Tagihan Kamu</label>
            <input type="text" name="" id="" />

            <label htmlFor="">😁Tagihan ...</label>
            <input type="text" name="" id="" disabled />

            <label htmlFor="">👉Ditanggung Oleh</label>
            <select name="" id="">
                <option value="user">Kamu</option>
                <option value="friend">si ...</option>
            </select>

            <button className="button">Tambah</button>
        </form>
    )
}

export default FormSplitBill;