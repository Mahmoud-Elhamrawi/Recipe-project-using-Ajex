// instace 
let q = new URLSearchParams(location.search)
let cid = q.get('id')
console.log(cid);
let dataDetails = [];
//xml http request 
let req =new XMLHttpRequest();
req.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${cid}`);
req.send();
req.addEventListener("readystatechange",function(){
    if(req.status == 200 && req.readyState==4)
    {
        dataDetails = JSON.parse(req.response).recipe;
        console.log(dataDetails);

        let cart1  =`
        <h2>Title :   ${dataDetails.title}</h2>
         <img src="${dataDetails.image_url}"/>`;
 

         let cart2 ='';
        for(var i=0;i<dataDetails.ingredients.length;i++)
        {
        cart2 +=`  <li>${dataDetails.ingredients[i]}</li> `;
        }
          document.querySelector(".myUL").innerHTML=cart2;
          document.getElementById("detail_imag").innerHTML=cart1;



    }
})





