import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Product'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import AddProduct from '../pages/views/Admin/AddProduct';
import ProductDetail from '../pages/views/Main/ProductDetail';
import EditProduct from '../pages/views/Admin/EditProduct';
import CategoryManager from '../pages/views/Admin/Category';
import EditCategory from '../pages/views/Admin/EditCategory';
import Product from '../pages/views/Main/Product';


const Routers = ({ products, onRemove, onAdd,onEdit, category,about}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandAdd = (product) => {
        onAdd(product)
    }
    const onHandEdit=(id,product)=>{
        onEdit(id,product)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} category={category}/>
                            </Route>

                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>

                            <Route path='/admin/addProduct'>
                                <AddProduct products={products} onAdd={onHandAdd} />
                            </Route>

                            <Route path='/admin/editProduct/:id'>
                                <EditProduct products={products} onEdit={onHandEdit} />
                            </Route>

                            <Route path='/admin/category'>  
                                <CategoryManager category={category} onRemove ={onHandleRemove}/>
                            </Route>
                            <Route path='/admin/editCategory/:id'>
                                <EditCategory category={category} onEdit={onHandEdit} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                           

                            <Route path='/product/:id'>
                                <ProductDetail products = {products}/>
                            </Route>

                            <Route path='/category'>
                                <Product products={products} category={category} />
                            </Route>
                            
                            <Route path='/about'>
                                <About about={about}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
