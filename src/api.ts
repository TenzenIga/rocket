import axios from "axios";

export interface IUser {
  id:number
  name:string
  username:string
}

export interface IPost {
  id:number
  userId:number
  title: string
  body:string
}

export async function getPosts():Promise<IPost[]> {
  const endPoint = 'https://jsonplaceholder.typicode.com/posts';
  
   return await axios(endPoint)
      .then(r =>{
        return r.data; 
      })
      .catch(error => {
        return Promise.reject(error)
      });
  }

  export async function getUsers() {
    const endPoint = 'https://jsonplaceholder.typicode.com/users';

    return await axios(endPoint)
      .then(r =>{
        return r.data;
      })
      .catch(error => {
        return Promise.reject(error)
      });
  }

  export function getUserById(users:IUser[], userId:number):IUser|undefined{
    for (let i = 0; i < users.length; i++) {
       if(users[i].id === userId){
         return users[i];
       }
      
    }
    return undefined;
    
 }