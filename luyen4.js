let products = [
  {
    id: 1,
    name: "Iphone 13 Promax",
    price: 230000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILLAvEGdnCqbQU0NK6XnqW1A0WNDc2mL__Q&s",
    description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
  },
  {
    id: 2,
    name: "Iphone 13 Promax",
    price: 230000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILLAvEGdnCqbQU0NK6XnqW1A0WNDc2mL__Q&s",
    description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
  },
  {
    id: 3,
    name: "Iphone 13 Promax",
    price: 230000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILLAvEGdnCqbQU0NK6XnqW1A0WNDc2mL__Q&s",
    description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
  },
  {
    id: 4,
    name: "Iphone 13 Promax",
    price: 230000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILLAvEGdnCqbQU0NK6XnqW1A0WNDc2mL__Q&s",
    description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
  },
  {
    id: 5,
    name: "Iphone 13 Promax",
    price: 230000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILLAvEGdnCqbQU0NK6XnqW1A0WNDc2mL__Q&s",
    description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
  },
];
let filter = "";
function displaysProduct() {
  let productList = document.querySelector("#listProduct");
  let seachText = filter.toLowerCase();
  let filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(seachText)
  );
  productList.innerHTML = "";
  filterProducts.forEach((product) => {
    let productHTML = `
    <div>
         <div class="col-md-4">
            <img src="${product.img}">
            <div class="card-body">
            <h5>${product.name}</h5>
            <p>${product.description}</p>
            <p>${product.price} VND</p>
            <button class="btn btn-primary">Buy</button>
            </div>
        </div>
    </div>`;

    productList.innerHTML += productHTML;
  });
}
document.getElementById("search").addEventListener("input", (evenet) => {
  filter = event.target.value;
  displaysProduct();
});

displaysProduct();

let input = document.querySelector("#input");
let btnElement = document.querySelector("#btnSeach");
