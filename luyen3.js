let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];

let choice = document.querySelector("#listFood");
let btnElement = document.querySelector("#btnFilter");
let productList = document.querySelector("#listProduct");
let ul = document.querySelector("#listProduct")

btnElement.addEventListener(("click"), function(){
    let value = choice.value;
    let filteredList = dish.filter((list) => list.category.toLowerCase().trim() === value.toLowerCase().trim());

    productList.innerHTML = "";

    filteredList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `Tên sản phẩm :${item.name} - Danh mục: ${item.category}`;
        productList.appendChild(li);
    });
});



    
