import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import apiProduct from '../../../../api/productsApiHttp'

const ProductDetail = ({ products }) => {
  const id = useParams().id;
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await apiProduct.getProduct(id);
        setProduct(data)
      } catch (error) {
        console.log("fail to request API", error)
      }
    }
    getProduct()
  }, {})


  return (
    <div>
      <div className="products">
        <div className="container">
          <div className="agileinfo_single">
            <div className="col-md-4 agileinfo_single_left">
              <img src={product.image} className="img-responsive" />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <h2>{product.name}</h2>
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" defaultValue={5} />
                  <label htmlFor="rating5">5</label>
                  <input id="rating4" type="radio" name="rating" defaultValue={4} />
                  <label htmlFor="rating4">4</label>
                  <input id="rating3" type="radio" name="rating" defaultValue={3} defaultChecked />
                  <label htmlFor="rating3">3</label>
                  <input id="rating2" type="radio" name="rating" defaultValue={2} />
                  <label htmlFor="rating2">2</label>
                  <input id="rating1" type="radio" name="rating" defaultValue={1} />
                  <label htmlFor="rating1">1</label>
                </span>
              </div>
              <div className="w3agile_description">
                <h4>Description : {product.description}</h4>

              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h2 className="m-sing"> </h2>
                  <h2>{product.price}$</h2>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <form action="#" method="post">
                    <fieldset>
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="business" defaultValue=" " />
                      <input type="hidden" name="item_name" defaultValue="pulao basmati rice" />
                      <input type="hidden" name="amount" defaultValue={21.00} />
                      <input type="hidden" name="discount_amount" defaultValue={1.00} />
                      <input type="hidden" name="currency_code" defaultValue="USD" />
                      <input type="hidden" name="return" defaultValue=" " />
                      <input type="hidden" name="cancel_return" defaultValue=" " />
                      <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>

    </div>
  )
}

ProductDetail.propTypes = {

}

export default ProductDetail
