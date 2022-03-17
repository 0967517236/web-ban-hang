import Http from './axiosHttp'

const getAll=()=>{
    return Http.get("/products");

}
const getProduct=(id)=>{
    return Http.get(`/products/${id}`);

}
const createProduct= data =>{
    return Http.post("/products",data);

}
const updateProduct= (id,data)=>{
    return Http.put(`/products/${id}`,data);
}

const removeProduct = id =>{
    return Http.delete(`/products/${id}`);
}



export default{
    getAll,
    getProduct,
    createProduct,
    updateProduct,
    removeProduct,

}