let url = "https://jsonplaceholder.typicode.com/users/";



(function(){
    var button = document.getElementById("fetchButton");
    button.addEventListener("click",e => {
        var value = document.getElementById("inputNumber").value;
        var get = url + value;
        fetch(get)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
            // Inside this callback, and only here, the response data is available
            console.log("data",data);
            /* data now contains the response, converted to JavaScript
                Observe the output from the log-output above
                Now, just build your DOM changes using the data*/       
        })
    });
})();
