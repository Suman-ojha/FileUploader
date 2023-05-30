import {api} from "./index";

export const uploadFiles=async (files=[])=>{
    const formData=new FormData();
    files.forEach((file)=>formData.append('files',file))

    const config={
        headers:{
            'content-type':"multipart/form-data"
        }
    }

    return await api.post('/api/files/upload',formData,config).then((res)=>res.data);
}

//get all the files..
export const  getFiles=async ()=>{
    return await api.get("/api/files").then((response)=>response.data)
}

///download the single file....
export const getFile = async(fileid) => {
    return  await api
      .get(`/api/files/${fileid}`, {
        responseType: "blob",
      })
      .then((response) => {
        const blob = response.data;
        return window.URL.createObjectURL(blob);
      });
  };
  