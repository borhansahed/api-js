// function loadData(){
//     fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
//     .then(res => res.json())
//     .then(data => loaduser(data))
  
// };
// function loaduser(tata){
//     fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php/sports')
//     .then(res => res.json())
//     .then (tata => displayUser(tata.sports))
// }
// function displayUser(data){
//    const ul = document.getElementById('list-items');
//  for(const user of data){
//     console.log(user)
//    const li = document.createElement('li');
//    li.innerHTML = `
                 
     
//                     <h4>${user.strSport}</h4>
//                     <img src="${user.strSportIconGreen}" alt="">`;
//    ul.appendChild(li);
    
//  }
// }
// const loadQuotes = () => {
//   const url = 'https://api.kanye.rest/';
//   fetch(url)
//   .then(res => res.json())
//   .then(data => showQuotes(data))
// }
// const showQuotes = quotes => {
//  const ul = document.getElementById('list-items');
//  const quotesInput =document.createElement('blockquote')
//  quotesInput.classList.add('quotes')
//  quotesInput.innerText = quotes.quote;
//  ul.appendChild(quotesInput)
 
// }


const noResults =  document.getElementById('results');

const results = (result) => {
 noResults.style.display = result;
  
}





const toggoleSpiner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
}
const searchFood = () => {
  const searchInput = document.getElementById('search-input');
  
  const searchText = searchInput.value;
  toggoleSpiner('block')

  searchInput.value = '';
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayResult(data.meals))
}

const displayResult = meals => {
  console.log(meals)
  if(!meals){
    results('block')
   toggoleSpiner('none')
  }
  
  const cardDiv = document.getElementById('card-result');
   cardDiv.innerText= "";
  //  meals.foreach(items => {
  //    console.log(items);
  //  })
  for(const items of meals){
    
    const newDiv = document.createElement('div');
   newDiv.classList.add('card-container');
    newDiv.innerHTML=`
    <div class="  col-12 mx-auto shadow-lg ">
      <div class="card  ">
     <img src="${items.strMealThumb ? items.strMealThumb : 'coming soon'}" class="items card-img-top mx-auto mt-3" alt="...">
     <div class="card-body  ">
      <h5 class="card-title">${items.strMeal}</h5>
      <p class="card-text">${items.strInstructions.slice(0 ,150)}</p>
      <a  href="${items.strYoutube}">Watch Now</a>
    </div> 
      
     
    
    </div>
    `
    
    cardDiv.appendChild(newDiv);
     results('none')
    toggoleSpiner('none')
   
  }
}


