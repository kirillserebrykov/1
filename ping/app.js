element = document.querySelector('.a');
	
 
let test = () =>{
	
}
test()
	axios.get('https://apieticket.herokuapp.com/getCart?cart=0436662A5F6A80')
  .then(function (response) {
    console.log(response.data);
 element.innerHTML = response.data
   
  });
setInterval(() => {
	axios.get('https://apieticket.herokuapp.com/getCart?cart=0436662A5F6A80')
  .then(function (response) {
    console.log(response.data);
   element.innerHTML = response.data
  });
} ,600000);
