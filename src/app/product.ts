export interface Product{
   readonly id:number;
   name:string;
   des?:string;
   price: number;
}
export const PRODUCTS:Product[] =[
    {id:1,name:'Iphone XS Max',des:'Ram: 4gb Rom: 512gb Pin: 4000Mah',price:830},
    {id:2,name:'Iphone 13 Pro Max',des:'',price:400},
    {id:3,name:'Iphone 11 Pro Max',des:'',price:345}
]
