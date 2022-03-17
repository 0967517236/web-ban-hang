import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import  firebase from './../../../../firebase'
const AddProduct = ({products,onAdd}) => {
    const [valueInput,setInput]= React.useState({});
    let history = useHistory();
   
    const onHandleSubmit = (data) => {
      let file = data.image[0];

      // tạo folder chứa ảnh trên firesbase
      let storageRef = firebase.storage().ref(`images/${file.name}`);
      // đẩy ảnh lên đường dẫn trên
      storageRef.put(file).then(function () {
        storageRef.getDownloadURL().then((url) => {
            console.log(url);
            // Tạo object mới chứa toàn bộ thông tin từ input
            const newData = {
                id: Math.random().toString(36).substr(2, 9),
                ...data,          
                image: url
            }
            console.log(newData);
            // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
            onAdd(newData)
            history.push("/admin/products")
        })
    });
  }

    const {register,handleSubmit,errors} = useForm();

    return (
       <div className="row">
        <div className="col-lg-12">
          <section className="panel">
          <div className="panel-heading">
            Responsive Table
      </div>
            <div className="panel-body">
              <div className=" form">
                <form className="cmxform form-horizontal "  onSubmit={handleSubmit (onHandleSubmit)}>
             
                  <div className="form-group ">
                    <label htmlFor="cname" className="control-label col-lg-3">Name </label>
                    <div className="col-lg-6">
                      <input className=" form-control" ref={register({required: true})} id="inputProductName" name="name" type="text"  />
                      {errors.name && <font  color="FF0000">
                      {/* <i className="fa fa-exclamation-triangle" aria-hidden="true" /> */}
                      Nhập tên sản phẩm.</font> }
                    </div>
                  </div>
                  <div className="form-group">
                  <label htmlFor="cname" className="control-label col-lg-3">Ảnh </label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02"multiple name="image" ref={register({required: true})}
                            />
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>
                  <div className="form-group ">
                    <label htmlFor="cname" name="total" className="control-label col-lg-3">Total </label>
                    <div className="col-lg-6">
                      <input className=" form-control" ref={register({required: true})} id="inputProductTotal" name="total" type="text"  />
                      {errors.total &&<font color="FF0000"> Thêm số lượng </font>}
                    </div>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="ooo1" className="control-label col-lg-3">Price </label>
                    <div className="col-lg-6">
                      <input className="form-control " ref={register({required: true})} id="inputProductPrice" name="price"  type="text" name="price" />
                      {errors.price && <font color="FF0000"> Nhập giá cho sản phẩm.</font>}
                    </div>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="ooo1" className="control-label col-lg-3">Description  </label>
                    <div className="col-lg-6">
                      <input className="form-control " ref={register({required: true})} id="inputProductDescription" name="description"  type="text" name="description" />
                      {errors.price && <font color="FF0000"> Nhập giá mô tả sản phẩm.</font>}
                    </div>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="ooo1" className="control-label col-lg-3">Sale </label>
                    <div className="col-lg-6">
                      <input className="form-control " ref={register({required: true})} id="inputProductPrice" name="sale"  type="text" name="sale" />
                      {errors.sale && <font color="FF0000"> Nhập giảm giá.</font>}
                    </div>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="cname" name="category" className="control-label col-lg-3">Category </label>
                    <div className="col-lg-6">
                      <input className=" form-control" ref={register({required: true})} id="inputCategory" name="category" type="text"  />
                      {errors.category &&<font color="FF0000"> Gắn địa chỉ ảnh.</font>}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-3 col-lg-6">
                      <button className="btn btn-primary" type="submit" ref={register}>Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
