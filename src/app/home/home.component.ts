import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/servise/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category:any=[]
  categorySelected:any
  indexValue:any
  labelValue:any
  constructor(private ds:DataService,private fd:FormBuilder){}

  
  addRoleForm=this.fd.group({
    role:['',Validators.required]
  })
  ngOnInit(): void {
      this.ds.loginUser().subscribe((Response:any)=>{
        this.category=Response
        // console.log(this.category)
      })
  }

  clickedCategory=(indexValue:any)=>{
    this.categorySelected=indexValue.subCategory
    console.log(this.categorySelected)
  }
  clickedLabel=(indexLabel:any)=>{
    this.labelValue=indexLabel.label
  }
  submitRule=()=>{
    const roleValue=this.addRoleForm.value.role
    if(!roleValue){
      alert("Please add Role")
    }else if(!this.labelValue){
      alert("please selected category")
    }
    else{
      this.ds.addRole(roleValue,this.labelValue).subscribe((Responce:any)=>{
        console.log(Responce)
      })
    }
  }
  deleteRole=(RemoveIndexValue:any)=>{
    this.ds.remove(RemoveIndexValue).subscribe((Response:any)=>{
      console.log(Response)
    })
  }
}
