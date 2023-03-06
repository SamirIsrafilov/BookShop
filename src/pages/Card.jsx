import React from 'react';
import { useCart } from 'react-use-cart';
import { AiFillDelete } from "react-icons/ai"


const Card = () => {


    const getUserName = localStorage.getItem('username')
    const getPassword = localStorage.getItem('password')
   

    const handleClick=()=>{
        if (getUserName && getPassword) {
            window.location.assign('/');
            emptyCart()
            alert("Successfully completed")
        }
        else{
            alert("Login olun")
            window.location.assign("/login");
        }
    }

    const {
        cartTotal,
        emptyCart,
        isEmpty,
        removeItem,
        updateItemQuantity,
        items
    } = useCart();
    if (isEmpty) return <div className='d-flex align-items-center justify-content-center'>
        <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
    </div>
    return (
        <div className='container mb-5'>
            <section className='mb-5'>
                <div className='blog_hero'>
                    <h1 className='text-white'>Cart</h1>
                </div>
            </section>
            <div className=' table-responsive'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Img</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Quantitiy</th>
                            <th scope='col'>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((fditem, i) => {
                            return (
                                <tr key={i}>
                                    <th className='align-middle' scope='row'>{i + 1}</th>
                                    <td><img src={fditem.img} width='50' alt="" /></td>
                                    <td className='align-middle fw-semibold'>{fditem.name}</td>
                                    <td className='align-middle'>{fditem.price * fditem.quantity}$</td>
                                    <td className='align-middle '>
                                        <div className='d-flex'>
                                            <button className='btn border btn-xs rounded-0' onClick={() => updateItemQuantity(fditem.id, fditem.quantity - 1)} style={{ width: "40px", height: "40px" }} >-</button>
                                            <span className='mx-2 py-2'>{fditem.quantity}</span>
                                            <button className='btn border btn-xs rounded-0' onClick={() => updateItemQuantity(fditem.id, fditem.quantity + 1)} style={{ width: "40px", height: "40px" }}>+</button>
                                        </div>
                                    </td>
                                    <td className='align-middle '><button onClick={() => removeItem(fditem.id)} className='btn btn-xs rounded-0 border' style={{ width: "40px", height: "40px" }}><AiFillDelete /></button></td>

                                </tr>
                            )
                        })}

                    </tbody>

                </table>
            </div>

            <div className='mt-4'>

            </div>
            <div className='d-flex flex-wrap justify-content-between mt-4'>
                <button className='btn fw-semibold border text-white rounded-0 py-3 px-5 mt-3' style={{ backgroundColor: "red" }} onClick={() => { emptyCart() }}>Cart Clear</button>
                <p className='m-0 mt-3 fw-semibold border py-3 px-4 d-inlineblock'>Total price: {cartTotal}$</p>
                <button className='btn fw-semibold border text-white rounded-0 py-3 px-5 mt-3' style={{ backgroundColor: "red" }} onClick={handleClick}  >Checkout</button>
            </div>

        </div>
    )
}

export default Card