
let bigData = [];
getData('pizza');

//select option
let mySel = document.getElementById("mySel");
mySel.onchange=function()
{
    let val = mySel.value;
    getData(val);
}

//getting  data
function getData(item)
{
    let url =`https://forkify-api.herokuapp.com/api/search?q=${item}`;
    let req = new XMLHttpRequest();
    req.open('GET',url);
    req.send();
    req.addEventListener("readystatechange",function(){
    if(req.status==200 && req.readyState==4)
    {

        bigData =JSON.parse(req.response).recipes;
        console.log(bigData);
        displayData()

    }


    })
 


}
//display date 
function displayData()
{
    let cart = '';
    for (let i = 0; i < bigData.length; i++) {
        cart +=`
        <div class="food">
        <img src="${bigData[i].image_url}" alt="recipes"/>
        <h2>${bigData[i].title}</h2>
        <p>${bigData[i].social_rank}</p>
        <button  class="btn btn-info"><a target="_blank" href="${bigData[i].source_url}">source</a></button>
        <button  class="btn btn-info"><a target="_blank" href="details.html?id=${bigData[i].recipe_id}">details</a></button>
      </div>`
    }

    document.getElementById("foods").innerHTML=cart;
}