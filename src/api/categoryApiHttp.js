import Http from "./axiosHttp"

const getAll=()=>{
    return Http.get("/category");
}

const getCategory=(id)=>{
    return Http.get(`/category/${id}`);
}

const addCategory= data=>{
    return Http.post("/category", data);
}

export default {
    getAll  
}