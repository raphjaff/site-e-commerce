let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item){
 cart.push(item);
 localStorage.setItem('cart', JSON.stringify(cart));
 alert(item + " ajouté au panier");
}

function showCart(){
 let ul = document.getElementById('cart');
 if(!ul) return;
 ul.innerHTML = '';
 cart.forEach(i => {
  let li = document.createElement('li');
  li.textContent = i;
  ul.appendChild(li);
 });
}

showCart();
