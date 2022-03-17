import Http from "./axiosHttp"

const getAll=()=>{
    return Http.get("/about");
}
const getAbout=(id)=>{
    return Http.get(`/about`);

}
export default {
    getAll  
}