/*****************************************************************
 * Author: Tony Moraes
 * BYUI CS213
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
