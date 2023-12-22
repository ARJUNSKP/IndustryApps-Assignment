import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  loginUser=()=>{
    return this.http.get("http://localhost:5000/product")
  }

  addRole=(roleValue:any,labelValue:any)=>{
    const bodyData={
      roleValue,
      labelValue
    }
    console.log(bodyData)
    return this.http.post(`http://localhost:5000/product`,bodyData)
  }
  remove=(deleteIndex:any)=>{
    return this.http.delete(`http://localhost:5000/product/${deleteIndex}`)
  }
}
