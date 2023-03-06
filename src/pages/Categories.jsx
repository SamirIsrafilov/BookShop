import React, { useState } from 'react';
import ProductCart from '../components/ProductCart';
import products from '../data/ProductsData';


const Categories = () => {

  const [filter, setFilter] = useState('');


  const searchText = (event) => {
    setFilter(event.target.value);

  }

  let dataSerach = products[5].filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
    )
  })



  const [price, setPrice] = useState(40);

  const handleInput = (e) => {
    setPrice(e.target.value);
  }
  return (
    <div>
      <section className='container '>
        <div className='category_hero'>
          <h1 className='text-white'>Book Category</h1>
        </div>
      </section>







      <section className='container py-5 my-5'>
        <div className='row'>
          <div className='col-12 col-md-4' id='filter'>

            <div className='border p-3'>
              <input type="text"
                className=' mt-3 ps-3'
                value={filter}
                onChange={searchText.bind(this)}
                id="search_filter"
                placeholder='Search Book'
              />
              <div className='my-4'>
                <h6 className='my-3 fw-bold'>Filter by Genres</h6>
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    History
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Horror-Thriller
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Love-Stories
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Science Fiction
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Biography
                  </label>
                </div>
              </div>

              <div className='my-5' id='price_filter'>
                <h6 className='my-3 fw-bold'>Filter by Price</h6>
                <div className='my-4'>
                  <input type="range" className='my-3' onInput={handleInput} />
                  <h6>Price: {price}</h6>
                </div>
                <select className="form-select rounded-pill p-2 px-3" aria-label="Default select example">
                  <option defaultValue={""} className='fw-bold p-2'>Filter by Rating</option>
                  <option value={1}>5 Star Rating</option>
                  <option value={2}>4 Star Rating</option>
                  <option value={3}>3 Star Rating</option>
                  <option value={4}>2 Star Rating</option>
                  <option value={5}>1 Star Rating</option>
                </select>
              </div>

              <div className='my-5'>
                <h6 className='my-3 fw-bold'>Filter by Publisher</h6>
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Green Publications
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Anondo Publications
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Rinku Publications
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Sheba Publications
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Red Publications
                  </label>
                </div>
              </div>
              <div className='my-5'>
                <h6 className='my-3 fw-bold'>Filter by Author Namer</h6>
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Buster Hyman
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Phil Harmonic
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Cam L.Toe
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Otto Matic
                  </label>
                </div>

                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    RJuan Annatoo
                  </label>
                </div>
              </div>
            </div>

          </div>

          <div className='col-12 col-md-8 '>

            <div className='row'>
              {
                dataSerach.map((fd, i) => (
                  <div className='col-12 col-sm-6 col-md-6 col-xl-3' key={i}>
                    <ProductCart img={fd.img} title={fd.name} author={fd.author} price={fd.price} fd={fd.id} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories