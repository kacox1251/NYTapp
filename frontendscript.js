//register the submit button
var submitBtn = document.getElementById("submitBtn");
var clearBtn = document.getElementById("clearBtn");
var searchTerm = '';
var recordNumber = '1';
var startYear = '';
var endYear = '';

submitBtn.addEventListener("click", function(){
    console.log("click");
    searchTerm = document.getElementById("searchTerm").value;
    console.log(searchTerm);
    recordNumber = document.getElementById("recordNumber").value;
    console.log(recordNumber);
    startYear = document.getElementById("startYear").value;
    console.log(startYear);
    endYear = document.getElementById("endYear").value;
    console.log(endYear);
});

clearBtn.addEventListener("click", function(){
    document.getElementById("searchTerm", "recordNumber", "startYear", "endYear").value = '';
    document.getElementById("recordNumber").value = '1';
    document.getElementById("startYear").value = '';
    document.getElementById("endYear").value = '';
});

//create working transfers of data between the text-boxes and the backend

//experiment with creating content regions for where the article will go
