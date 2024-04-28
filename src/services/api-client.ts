import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"bb9cdaefcabf40b4a3f7a07ab7819486"
    }
})