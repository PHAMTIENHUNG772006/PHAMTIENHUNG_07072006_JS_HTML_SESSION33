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
      name: "Iphone 11 Promax",
      price: 230000,
      img: "https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/hinh-anh-iphone-16-pro-max-3.jpg",
      description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
    },
    {
      id: 3,
      name: "Iphone 12 Promax",
      price: 230000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvA3h5ZMLvGjyNG-BpKRn1TObDlIcwlJfwgg&s",
      description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
    },
    {
      id: 4,
      name: "Iphone 13 Promax",
      price: 230000,
      img: "https://kenh14cdn.com/203336854389633024/2024/2/27/iphone-16-pro-camera-leak-17090186078261009044872.jpg",
      description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
    },
    {
      id: 5,
      name: "Iphone 14 Promax",
      price: 230000,
      img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/9/25/1399507/Iphone-16-Pro-Max.jpg",
      description: " Điện thoại cao cấp với chip sử lí siêu bá đạo và chip 5G",
    },
  ];
  let filter = "";
  let productList = products;
  function renderProduct(productList) {
    let productContainer = document.querySelector("#listProduct");
    productContainer.innerHTML = "";
    productList.forEach((product) => {
      let productHTML = `
      <div>
           <div class="col-md-4">
              <img class ="image" src="${product.img}">
              <div class="card-body">
              <h5>${product.name}</h5>
              <p>${product.description}</p>
              <p>${product.price.toLocaleString()} VND</p>
              <button class="btn btn-primary">Buy</button>
              </div>
          </div>
      </div>`;
  
      productContainer.innerHTML += productHTML;
    });
    if (productList.length === 0) {
        alert("Không có sản phẩm nào trong giỏ hàng")
    }
}


  
let input = document.querySelector("#input");
let btnElement = document.querySelector("#btnSeach");

function filterProducts(){
      let seach = input.value.trim().toLowerCase();
      if(seach === ""){
          alert("Phần tìm kiếm không được để trống")
        }
        let filterProducts = products.filter(product =>  product.name.trim().toLowerCase() === seach);
        renderProduct(filterProducts);
}

btnElement.addEventListener("click", filterProducts);

renderProduct();

