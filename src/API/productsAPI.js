import axiosClient from "./axiosClient"
const productAPi={
    getAll:(params)=>{
        const url = '/watch'
        return axiosClient.get(url, {params})
    }
}

export default productAPi;