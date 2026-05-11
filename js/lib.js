const productList =[
    {id:"01", name:"Rosé", price: 9999999999, image:"../assets/avatar1.jpg", productLink: "product-detail.html"},
    {id:"02", name:"Chaeyoung", price: 9999999999, image:"../assets/avatar2.jpg", productLink: "product-detail.html"},
    {id:"03", name:"Roseanne", price: 9999999999, image:"../assets/avatar3.jpg", productLink: "product-detail.html"},
    {id:"04", name:"Bông hồng nước úc", price: 9999999999, image:"../assets/avatar4.jpg", productLink: "product-detail.html"},
    {id:"05", name:"Huyền thoại coachella 2019", price: 9999999999, image:"../assets/avatar5.jpg", productLink: "product-detail.html"},
    {id:"06", name:"Công chúa tóc vàng", price: 9999999999, image:"../assets/avatar6.jpg", productLink: "product-detail.html"},
    {id:"07", name:"Rosé purple", price: 9999999999, image:"../assets/avatar7.jpg", productLink: "product-detail.html"},
    {id:"08", name:"Badgirl tóc hồng", price: 9999999999, image:"../assets/avatar8.jpg", productLink: "product-detail.html"}
];

function addProduct(id, name, price, image, link) {

    const productListDiv = document.getElementById("product-list");
    productListDiv.style.marginTop = "40px";
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "col-md-3 mb-4 text-center");

    // ===== IMAGE =====
    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid");

    img.style.width = "100%";
    img.style.height = "250px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";

    // ===== INFO =====
    const productInfo = document.createElement("div");
    productInfo.style.marginTop = "20px";

    const productName = document.createElement("p");
    productName.textContent = name;
    productName.style.fontWeight = "bold";
    productName.style.color = "pink";

    //gia
    const productPrice = document.createElement("p");
    productPrice.textContent = price.toLocaleString() + "/VND";
    productPrice.style.fontWeight = "bold";

    const productLink = document.createElement("a");
    productLink.setAttribute("href", link + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm");
    productLink.textContent = "Xem chi tiết";

    //hover
    productLink.style.transition = "0.3s";
    productLink.onmouseover = () => {
    productLink.style.backgroundColor = "#f8f2f8";
    productLink.style.color = "#2a0f0f";
    productLink.style.transform = "scale(1.1)";
    };
    productLink.onmouseout = () => {
    productLink.style.backgroundColor = "";
    productLink.style.color = "";
    productLink.style.transform = "scale(1)";
    };

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    productItem.appendChild(img);
    productItem.appendChild(productInfo);

    productListDiv.appendChild(productItem);
}