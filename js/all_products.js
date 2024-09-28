

// open & close filter

var filter = document.querySelector(".filter");
 function open_close_filter() {
    filter.classList.toggle("active")
    
 }








fetch('js/items.json')
    .then(response => response.json())
    .then(data => {
        
    
        const products_dev = document.getElementById("products_dev");

        all_products_json = data;
        
        data.forEach(product => {
           
                const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
                products_dev.innerHTML += `
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick ="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping i"></i></span>
                            <span><i class="fa-solid fa-heart i"></i></span>
                            <span><i class="fa-solid fa-share i"></i></span>
                        </div>
                        <span class="sale_present">%${percent_disc}</span>

                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" height="185px">
                        </div>
                        <h3 class="name_product">
                            <a href="http://127.0.0.1:5500/item.html">${product.name}</a>
                        </h3>
                        <div class="stars">
                            <i class="fa-solid fa-star i"></i>
                            <i class="fa-solid fa-star i"></i>
                            <i class="fa-solid fa-star i"></i>
                            <i class="fa-solid fa-star i"></i>
                            <i class="fa-solid fa-star i"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <div class="old_price">$${product.old_price}</div>
                        </div>
                    </div>
                `;
            
        });



     

        
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });

