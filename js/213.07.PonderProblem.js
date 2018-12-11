/*****************************************************************
 * Author: Tony Moraes
 * BYUI CS213
 *
 * To use this validation js, you need to indicate in the html the element like below:
 * <element oninput="methodToBeUsed(this)"></element>
 ********************************************************************/


function buildProductList() {
    var jsonProducts = {
        "products" : [
            {
                "name": "Seeds of Love",
                "price" : "435.00",
                "max-qtd" : "100"
            }, 
            {
                "name": "Seeds of Generosity",
                "price" : "135.00",
                "max-qtd" : "100"
            },
            {
                "name": "Seeds of Temperance",
                "price" : "235.00",
                "max-qtd" : "100"
            },
            {
                "name": "Seeds of kindness",
                "price" : "335.00",
                "max-qtd" : "100"
            }
        ]
    }

    for (i in jsonProducts.products) {
        var product = jsonProducts.products[i];
        var cln = addProduct(product);
        
        
        document.getElementById("cart").appendChild(cln);
    }
}  

function addProduct(product) {
    var base = document.getElementById("model-item");
    var cln = base.cloneNode(true);
    
    cln.removeAttribute("id");
    cln.style.display = "block";

    cln.querySelector(".item-desc").innerHTML = product.name;
    cln.querySelector(".price").innerHTML = product.price;
    cln.querySelector("input").value  = "0";
    cln.querySelector("input").addEventListener("blur", calcItemPrice);
    cln.querySelector(".total").innerHTML = "0.00";

    return cln;
}

function calcItemPrice(event) {
    var qtd = event.target.value;
    var priceNode = event.target.parentNode.previousElementSibling;
    var totalNode = event.target.parentNode.nextElementSibling;

    var total = qtd * Number(priceNode.querySelector('.price').innerHTML);

    totalNode.querySelector('.total').innerHTML = total;
    showTotal();
}

function calcCartTotal() {
    var total = 0.00;
    var subTotals = document.querySelectorAll(".total");
    var i;
    for (i = 1; i < subTotals.length; i++) {
        total = total + Number(subTotals[i].innerHTML);
    } 

    return total;
}

function showTotal() {
    var total = calcCartTotal();

    document.querySelector("#bill #total").innerHTML = total.toFixed(2);
}

function showForm()
{
    var total = calcCartTotal();

    if (total == 0.00) {
        alert ("You had nothing on your cart.");

        return;
    }

    document.querySelector('#checkout').style.visibility = 'hidden';
    document.querySelector("#costumer").style.visibility = 'visible';
}

function hideForm()
{
    document.querySelector('#checkout').style.visibility = 'visible';
    document.querySelector("#costumer").style.visibility = 'hidden';
}
