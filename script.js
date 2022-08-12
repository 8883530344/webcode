 async function foo() {
 let res=document.getElementById("product");
var url="http://makeup-api.herokuapp.com/api/v1/products.json";
let result=await fetch(url);
    let result1=await result.json();
    var index=result1.length-1;
    console.log(result1[index]);
 }

var div=document.createElement("div");
div.innerHTML=
<div class="box">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div><img src="${result[index].image}"alt="..."></div>
                <div class="card">
                  <p class="card-text">product:${result1[index].name}</p>
                    <p class="card-text">brand:${result1[index].brand}</p>
                    <p class="card-text">price:${result1[index].price}</p>
                    <p class="card-link">link:${result1[index].link}</p>
                    <p class="card-text">descrition:${result1[index].link}</p>
              </div>
                    
            </div>
        </div>
    </div>
</div>
document.body.append("div")