/*****************************************************************
 * Author: Tony Moraes
 * BYUI CS213
 *
 * To use this validation js, you need to indicate in the html the element like below:
 * <element oninput="methodToBeUsed(this)"></element>
 ********************************************************************/

function makeAjaxRequest(methodType, url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        callback(this.status, xhttp.response);
      }
    };
    xhttp.open(methodType, url, true);
    xhttp.send();
  }
  
  function loadDoc() {
    makeAjaxRequest("GET", "ajax_info.txt", loadDoc);
  }

  function problem01(event) {
    makeAjaxRequest("GET", event.value + ".txt", fillProblem01);
  }

  function fillProblem01(statusRequest, data)
  {
      if (statusRequest != 200) {
          document.getElementById("content1").innerHTML = "Sorry! Some thing goes wrong.";
          return;
      }

      document.getElementById("content1").innerHTML = data;
  }

  function problem02(input) {
      makeAjaxRequest("GET", input.previousElementSibling.value, fillProblem02);
  }

function fillProblem02(statusRequest, data)
{
    var parsedData
    try {
        parsedData = JSON.parse(data);
    } catch (err) {
        document.getElementById("table-content-2").style.display = 'none';
        document.getElementById("content2").innerHTML = "Sorry! Some thing goes wrong.";
        return;
    }

    document.getElementById("table-content-2").style.display = 'table';
    var studentRowModel = document.getElementById('student-row');
    for (i in parsedData.students) {
        var student = parsedData.students[i];
        var studentRow = studentRowModel.cloneNode(true);
        studentRow.removeAttribute("id");
        studentRow.removeAttribute("style");

        studentRow.querySelector(".name").innerHTML = student.first+' '+student.last;
        studentRow.querySelector(".address").innerHTML = student.address.city+'/'+student.address.state+'-'+student.address.zip;
        studentRow.querySelector(".major").innerHTML = student.major;
        studentRow.querySelector(".gpa").innerHTML = student.gpa;
        
        studentRowModel.parentNode.appendChild(studentRow);
    }   
}


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
    calcCartTotal();
}

function calcCartTotal() {
    var total = 0.00;
    var subTotals = document.querySelectorAll(".total");
    var i;
    for (i = 1; i < subTotals.length; i++) {
        total = total + Number(subTotals[i].innerHTML);
    } 

    document.querySelector("#bill #total").innerHTML = total.toFixed(2);
}

function showForm()
{
    document.querySelector('#checkout').style.visibility = 'hidden';
    document.querySelector("#costumer").style.visibility = 'visible';
}

function hideForm()
{
    document.querySelector('#checkout').style.visibility = 'visible';
    document.querySelector("#costumer").style.visibility = 'hidden';
}
