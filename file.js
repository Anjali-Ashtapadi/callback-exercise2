let product_price_list = {pen: 20,notebook: 50,pencil: 10,eraser: 5};

    const select = document.getElementById('productSelect');
    const priceBox = document.getElementById("priceBox");
    const quantity = document.querySelector('.quantity');

    function loadProducts(callback) {
      select.innerHTML = ""; 
      quantity.value='';
      let defaultOption = document.createElement("option");
      defaultOption.textContent = "— Select Product —";
      defaultOption.value='';
      // defaultOption.disabled = true;
      // defaultOption.selected = true;
      select.appendChild(defaultOption);

      
      for (let product in product_price_list) {
        let option = document.createElement("option");
        option.value = product;
        option.textContent = product;
        select.appendChild(option);
      }

      callback();
    }

    function setupPriceUpdater() {
      select.addEventListener("change", function () {
        let selectedProduct = select.value;
        let price = product_price_list[selectedProduct];
        priceBox.value = price;
      });
    }

    
    function calculatePrice() {
      if (!select.value) {              
        alert('Please choose an item.');
        resetAll();
        return;
      }
      const qtyStr = quantity.value.trim();
      if (qtyStr === "") {
        alert('Please enter quantity of item');
        return;
      }else if (quantity.value <=0){
        alert(`Item Quantity be atleast 1`);
        return;
      }else{
      let productName = select.value;
      let price = product_price_list[productName];
      let totalPrice = price * Number(quantity.value);
      let resultBox = document.getElementById("result");
      resultBox.innerHTML = `<strong>Total Price: ₹${totalPrice}</strong><br>`;
      resultBox.style.display = "block"; 
      resetAll();
      } 
      
      
    }

    loadProducts(setupPriceUpdater);

    function resetAll() {
      select.value = "";
      quantity.value = "";
      priceBox.value = "";
    }