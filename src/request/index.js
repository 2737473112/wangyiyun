//把axios封装在这里
import axios from "axios";
let service=axios.create({
    baseURL:"http://localhost:3000/",
    timeout:1000
})
export default service