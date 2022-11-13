import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {productstbl} from 'src/app/models/manageproduct.model';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html'
  //styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.showData();
  }

  showData()
  {
       console.log("Hi");
       this.http.get("https://localhost:44346/api/Product")
       .subscribe(res=>this.GetFromServer(res),res=>console.log(res));
  }
  GetFromServer(res:any)
  {
     console.log(res);
     this.getData=res;    
  }
  productstbls:productstbl=new productstbl();
  getData:Array<productstbl>=new Array<productstbl>();

  AddProduct()
  {
    var addData={
      id:Number(this.productstbls.id),
      productname:this.productstbls.productname,
      productdesc:this.productstbls.productdesc,
      price:this.productstbls.price,
      features:this.productstbls.features,
      isActive:this.productstbls.isActive
    }
    console.log(addData);
    console.log(this.productstbls);
    this.http.post("https://localhost:44346/api/Product",addData)
    .subscribe(res=>{this.showData(); console.log(res)},res=>console.log(res));
    this.productstbls=new productstbl();
  }

  DeleteProduct(prod:productstbl)
  {
    console.log(prod);
    let Httparms=new HttpParams().set("id", prod.id);
    let options={params:Httparms};
    this.http.delete("https://localhost:44346/api/Product",options)
    .subscribe(res=>{this.showData(); console.log(res)},res=>console.log(res));
  }
  ArrayRemove(arr:any,value:any)
  {
     return arr.filter(function(sample:any) {
       return sample !=value;
     });
  }
}
