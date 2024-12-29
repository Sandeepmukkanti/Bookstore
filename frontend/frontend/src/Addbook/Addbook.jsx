import React, { useState } from 'react'
import axios from 'axios'

export default function Addbook() {
    let userId = localStorage.getItem("userId")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    function addBook(e){
        e.preventDefault()
        const newBook={userId,title,price,description,author,imageUrl}
        axios.post("http://localhost:5000/api/book/add",newBook)
            .then((res)=>{
                if(res.status===200){
                    alert("Book added successfully")
                }
            })
    }
    return (
        <div className="container mt-5">
            <form className="row g-3" onSubmit={addBook}>
                <div className="col-12 text-center">
                    <h1>Add new Book</h1>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inpuTitle" className="form-label">Title of the book</label>
                    <input type="text" className="form-control" id="inpuTitle" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAuthor" className="form-label">Author</label>
                    <input type="text" className="form-control" id="inputAuthor" onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="inputPrice" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="inputDescription" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputImageUrl" className="form-label">Image url</label>
                    <input type="text" className="form-control" id="inputImageUrl" onChange={(e) => setImageUrl(e.target.value)} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-success">Add Books</button>
                </div>
            </form>
        </div>
    )
}