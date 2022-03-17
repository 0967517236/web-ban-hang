import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Product = ({ category, products }) => {

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [prsPerPage, setPostsPerPage] = useState(3);
    const indexOfLastPost = currentPage * prsPerPage;
    const indexOfFirtPost = indexOfLastPost - prsPerPage;



    const newProduct = products.slice(indexOfFirtPost, indexOfLastPost)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / prsPerPage); i++) {
        pageNumbers.push(i);
    }
    const onChange = (e) => {
        const { name, value } = e.target;

        console.log(value)
    }
    const onHandleChangePage = (num) => {
        console.log(num)
        setPostsPerPage(num)

    }
    const handleClick = page => setCurrentPage(page);
    return (
        <div>
            <div>
                <div className="products">
                    <div className="container">
                        <div className="col-md-4 products-left">
                            <div className="categories">
                                <h2>Categories</h2>
                                <ul className="cate">

                                    {category.map((product, index) => (
                                        <tr key={index} >
                                            <th scope="row"  >{index + 1}</th>

                                            <td >{product.name} </td>


                                        </tr>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 products-right">
                            <div className="products-right-grid">
                                <div className="products-right-grids">
                                    <div className="sorting">
                                        <select id="country" onchange="change_country(this.value)" className="frm-field required sect">
                                            <option value="null">Default sorting</option>
                                            <option value="null">Sort by popularity</option>
                                            <option value="null">Sort by average rating</option>
                                            <option value="null">Sort by price</option>
                                        </select>
                                    </div>
                                    <div className="sorting-left">
                                        <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                                            <option value="null" name="numer4">Item on page 4</option>
                                            <option value="null">Item on page 18</option>
                                            <option value="null">Item on page 32</option>
                                            <option value="null">All</option>
                                        </select>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>


                            {newProduct.map((products, index) => (
                                <div className="col-md-4 top_brand_left">

                                    <div className="hover14 column">
                                        <div className="agile_top_brand_left_grid">

                                            <div className="agile_top_brand_left_grid1">
                                                <figure>
                                                    <div className="snipcart-item block">
                                                        <div className="snipcart-thumb">
                                                            <a href="single.html"><img src={products.image} style={{ height: '80px' }} alt=" " className="img-responsive" /></a>
                                                           
                                                            <p>{products.name}</p>
                                                            <Link to={`product/${products.id}`}> <a>Chi tiết</a>
                                                            </Link>
                                                            <p>${products.price}</p>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Pepsi soft drink" />
                                                                    <input type="hidden" name="amount" defaultValue={80.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                    </div> </div>
                            ))}

                            <div className="clearfix"> </div>
                            <div className="clearfix"> </div>

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

                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/*- groceries -*/}
                {/* //footer */}
            </div>

        </div>
    )
}

Product.propTypes = {

}

export default Product
