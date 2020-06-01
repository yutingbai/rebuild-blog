import {
    get,
    post,
    postJson
  } from '@/utils/index.js'
  
const API = {}

API.Login = (params) => {
    return post(`/xuptbbs/entrance/login`, params)
  }
API.GetAllPost = (parmas)=>{
  return get('/xuptbbs/post',parmas)
}
API.GetVerify = (parmas) => {
  return get('/xuptbbs/code/',parmas)
}
API.Register = (parmas) => {
  return post('/xuptbbs/entrance/register',parmas)
}
API.GetUserInfo = (params) =>{
  return get('/xuptbbs/user/'+params ,params || {})
}
API.PostPass = (parmas) =>{
  return post('/xuptbbs/user',parmas)
}
API.UpdateUser = (parmas) =>{
  return post('/xuptbbs/up_user',parmas)
}
API.UpdatePhoto = (id,parmas)=>{
  return postJson('/xuptbbs/upphoto?id='+id,parmas)
}
API.postphoto = (parmas)=>{
  return postJson('/xuptbbs/postphoto',parmas)
}
API.postProject =(parmas) => {
  return post('/xuptbbs/project' , parmas)
}
API.postPage =(parmas) => {
  return post('/xuptbbs/post' , parmas)
}
API.getBoard =(parmas) => {
  return get('/xuptbbs/post', parmas)
}

export default API