import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './index.css'

//mergering
//repalce lấy phần cuối
const ProductsManager = ({ products, onRemove }) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  }
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [prsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * prsPerPage;
  const indexOfFirtPost = indexOfLastPost - prsPerPage;

  const onchange = e => {
    const { name, value } = e.target;
    setSearch(value);
    console.log(search)
  };
  // const product = products.filter(pr => {
  //   return pr.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });
  const newProduct = products.slice(indexOfFirtPost, indexOfLastPost)
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / prsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = page => setCurrentPage(page);
  //change page



  // const onHandEdit=(id)=>{
  //   onEdit(id)
  // }
  return (
    <section className="wrapper">
      <div className="table-agile-info">
        <div className="panel panel-default">
          <div className="panel-heading">
            Responsive Table
      </div>
          <div className="row w3-res-tb">
            <div className="col-sm-5 m-b-xs">
              <h1></h1>


              <Link to="/admin/addProduct">
                <button type="button" className="btn btn-primary" >Thêm sản phẩm</button>
              </Link>
            </div>
            <input style={{ width: '200px', float: 'left', margin: '0px 245px' }} placeholder="Enter keywords" autoComplete="off" name='search' onChange={onchange} className="form-control" name="search"  type="text" />

            <div className="col-sm-4">

            </div>

          </div>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  {/* <th scope="col">Img2</th>
              <th scope="col">Img3</th>
              <th scope="col">Img4</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">Total</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sale</th>
                  <th scope="col">Category</th>

                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
                {newProduct.map((product, index) => (
                  <tr key={index} >
                    <th scope="row"  >{index + 1}</th>
                    <td><img src={product.image} style={{ width: '100px' }} /></td>
                    <td >{product.name}</td>
                    <td >{product.total}</td>
                    <td >{product.price} $</td>
                    <td >{product.sale} </td>
                    <td >{product.categoryName} </td>

                    <td>
                      <button type="button" class="btn btn-primary" onClick={() => onHandleRemove(product.id)}>Xoá</button>

                      <Link to={`/admin/editProduct/${product.id}`} type="button" class="btn btn-primary">
                        Sửa
                    </Link>

                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          <div className="pagination">
            <ul className="pagination">
              <li
                className={`${pageNumbers[0] === currentPage && "disabled"}`}
                onClick={() => handleClick(currentPage - 1)}
              >
                Prev
        </li>
                {pageNumbers.map(page => (
                  <li
                    className={`${currentPage === page && "active"}`}
                    onClick={() => handleClick(page)}
                  >
                    {page}
                  </li>
                ))}
              <li
                className={`${pageNumbers.reverse()[0] === currentPage && "disabled"}`}
                onClick={() => handleClick(currentPage + 1)}
              >
                Next
        </li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  )
}

ProductsManager.propTypes = {

}

export default ProductsManager
