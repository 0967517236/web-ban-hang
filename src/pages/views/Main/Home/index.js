import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({products}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [prsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * prsPerPage;
  const indexOfFirtPost = indexOfLastPost - prsPerPage;



  const newProduct = products.slice(indexOfFirtPost, indexOfLastPost)
    return (
        <div>
       
        <div className="ban-bottom-w3l">
          <div className="container">
            <div className="col-md-6 ban-bottom3">
              <div className="ban-top">
                <img src="https://rawcdn.githack.com/0967517236/imgReact/86e583afe0671e637e91eaec0337560c66223500/p2.jpg" className="img-responsive" alt="" />
              </div>
              <div className="ban-img">
                <div className=" ban-bottom1">
                  <div className="ban-top">
                    <img src="https://rawcdn.githack.com/0967517236/imgReact/86e583afe0671e637e91eaec0337560c66223500/p3.jpg" className="img-responsive" alt="" />
                  </div>
                </div>
                <div className="ban-bottom2">
                  <div className="ban-top">
                    <img src="https://rawcdn.githack.com/0967517236/imgReact/86e583afe0671e637e91eaec0337560c66223500/p4.jpg" className="img-responsive" alt="" />
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-md-6 ban-bottom">
              <div className="ban-top">
                <img src="https://rawcdn.githack.com/0967517236/imgReact/86e583afe0671e637e91eaec0337560c66223500/111.jpg" className="img-responsive" alt="" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/*banner-bottom*/}
        {/* new */}
        <div className="newproducts-w3agile">
          <div className="container">
            <h3>New offers</h3>
            <div className="agile_top_brands_grids">
                {newProduct.map((product,index)=>(
 <div className="col-md-3 top_brand_left-1">
   
 <div className="hover14 column">
   <div className="agile_top_brand_left_grid">
     
     <div className="agile_top_brand_left_grid1">
       <figure>
         <div className="snipcart-item block">
           <div className="snipcart-thumb">
             <a href="products.html"><img title=" " alt=" " src={product.image}  style={{ height: '80px' }} /></a>		
             <p>{product.name}</p>
  
             <h4>${product.price}</h4>
           </div>
           <div className="snipcart-details top_brand_home_details">
             <form action="#" method="post">
               <fieldset>
                 <input type="hidden" name="cmd" defaultValue="_cart" />
                 <input type="hidden" name="add" defaultValue={1} />
                 <input type="hidden" name="business" defaultValue=" " />
                    <Link to={`product/${product.id}`}> <a>Chi tiết</a>
                  </Link>  
                 <input type="hidden" name="item_name" defaultValue="Fortune Sunflower Oil" />
                 <input type="hidden" name="amount"  />
                 <input type="hidden" name="discount_amount" defaultValue={1.00} />
                 <input type="hidden" name="currency_code" />
                 <input type="hidden" name="return" />
              
                 <input type="hidden" name="cancel_return" />
                 <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
               
               </fieldset>
             </form>
           </div>
         </div>
       </figure>
     </div>
   </div>
 </div>
</div>
                ))}
             
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
      
      
    )
}

Home.propTypes = {

}

export default Home
