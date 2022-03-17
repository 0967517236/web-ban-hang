import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import apiProduct from '../../../../api/productsApiHttp'
import { useForm } from 'react-hook-form';
import firebase from './../../../../firebase'

const EditProduct = ({onEdit}) => {
    const [valueInput,setInput]= React.useState({});
    let history = useHistory();
    let {id} = useParams();
    const {register,handleSubmit,errors} = useForm();
    useEffect(() => {
        const getProduct = async () => {
          try {
            const { data } = await apiProduct.getProduct(id);
            setInput(data)
          } catch (error) {
            console.log('Faile to request API', error)
          }
        }
        getProduct()
      }, [])
    
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
                  ...data,          
                  image: url
              }
              console.log(newData);
              // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
              onEdit(id,newData)
              history.push("/admin/products")
          })
      });
    }
    const onHandleChange=(e)=>{
        const {name,value}= e.target;
        setInput({
           ...valueInput,[name]:e.target.value
            
        });
    }
    // const onHandleSubmit =(data)=>{
    //     console.log(valueInput)
    //     setInput(data)
    //     onEdit(id,valueInput);
    //     history.push("/admin/products")
    // }
    return (
       <form>
       <div className="row">
        <div className="col-lg-12">
          <section className="panel">
       
            <div className="panel-body">
              <div className=" form">
                <form className="cmxform form-horizontal "  onSubmit={handleSubmit (onHandleSubmit)}>
             
                  <div className="form-group ">
                    <label htmlFor="cname" className="control-label col-lg-3">Name </label>
                    <div className="col-lg-6">
                      <input className=" form-control" id="inputProductName" value={valueInput.name} name="name" type="text"   onChange={onHandleChange} ref={register({required: true})}/>
                    </div>
                  </div>
                  <div className="form-group">
                  <label htmlFor="cname" className="control-label col-lg-3">Ảnh </label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02"multiple name="image"  onChange={onHandleChange} ref={register({required: true})}
                            />
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>
                  <div className="form-group ">
                    <label htmlFor="ooo1" className="control-label col-lg-3">Total </label>
                    <div className="col-lg-6">
                      <input className="form-control " id="inputProductTotal" value={valueInput.total} name="price"  type="text" name="total" onChange={onHandleChange} ref={register({required: true})}/>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="ooo1" className="control-label col-lg-3">Price </label>
                    <div className="col-lg-6">
                      <input className="form-control " id="inputProductPrice" value={valueInput.price} name="price"  type="text" name="price" onChange={onHandleChange} ref={register({required: true})}/>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="ooo1" className="control-label col-lg-3">Sale </label>
                    <div className="col-lg-6">
                      <input className="form-control " id="inputProductSale" value={valueInput.sale} name="sale" type="text" name="sale" onChange={onHandleChange}ref={register({required: true})} />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label htmlFor="cname" name="category" className="control-label col-lg-3">Category </label>
                    <div className="col-lg-6">
                      <input className=" form-control" id="inputCategory" value={valueInput.category} name="category" type="text"   name="category" onChange={onHandleChange}ref={register({required: true})}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-3 col-lg-6">
                      <button className="btn btn-primary" type="submit">Update</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      </form>
    )
}

EditProduct.propTypes = {

}

export default EditProduct
