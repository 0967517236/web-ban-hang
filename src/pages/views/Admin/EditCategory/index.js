import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import apiCategory from '../../../../api/categoryApiHttp'
const EditCategory = ({onEdit}) => {
    const [valueInput,setInput]= React.useState({});
    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        const getCategory = async () => {
          try {
            const { data } = await apiCategory.getCategory(id);
            setInput(data)
          } catch (error) {
            console.log('Faile to request API', error)
          }
        }
        getCategory()
      }, [])
    

    const onHandleChange=(e)=>{
        const {name,value}= e.target;
        setInput({
           ...valueInput,[name]:e.target.value
            
        });
    }
    const onHandleSubmit =(e)=>{
        console.log(valueInput)
        e.preventDefault();
        onEdit(id,valueInput);
        history.push("/admin/category")
    }
    return (
        <div className="row">
        <div className="col-lg-12">
          <section className="panel">
       
            <div className="panel-body">
              <div className=" form">
                <form className="cmxform form-horizontal "  onSubmit={onHandleSubmit}>
             
                  <div className="form-group ">
                    <label htmlFor="cname" className="control-label col-lg-3">Name </label>
                    <div className="col-lg-6">
                      <input className=" form-control" id="inputCategoryName" value={valueInput.name} name="name" type="text"   onChange={onHandleChange}/>
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
    )
}

EditCategory.propTypes = {

}

export default EditCategory
