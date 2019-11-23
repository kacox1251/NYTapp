var apiKey = "SmjsdmIRZGF2fgWVyjnFORxtltcyPS99"
var beginDate = $("#startYear").val(); 
var endDate = $("#endYear").val();
var searchTerm = $("#searchTerm").val();
    
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=" + apiKey + "&q=" + searchTerm + "&begin_date=" + beginDate + "&end_date=" + endDate;

    $.ajax({ 
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    // #searchTerm
    // #startYear
    // #recordNumber
    // #endYear