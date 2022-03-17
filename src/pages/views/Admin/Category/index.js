import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//mergering
//repalce lấy phần cuối
const CategoryManager = ({ category, onRemove }) => {
    const onHandleRemove = (id) => {
        onRemove(id);
    }

    // const onHandEdit=(id)=>{
    //   onEdit(id)
    // }
    return (
        <section className="wrapper">
            <div className="table-agile-info">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Category Table
      </div>
                    <div className="row w3-res-tb">
                        <div className="col-sm-5 m-b-xs">
                            <h1></h1>


                            <Link to="/admin/addCategory">
                                <button type="button" className="btn btn-primary" >Thêm danh mục</button>
                            </Link>


                        </div>
                        <div className="col-sm-4">

                        </div>

                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((cate, index) => (
                                    <tr key={index} >
                                        <th scope="row"  >{index + 1}</th>
                                        <td >{cate.name}</td>
                                        <td>
                                      

                                            <Link to={`/admin/editCategory/${cate.id}`} type="button" class="btn btn-primary">
                                                Sửa
                                             </Link>

                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </section>
    )
}

CategoryManager.propTypes = {

}

export default CategoryManager
