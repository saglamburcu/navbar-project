// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


let button = document.querySelector(".nav-toggle")
let list = document.querySelector(".links")

button.addEventListener("click", function() {
    //console.log(list.classList)
    // console.log(list.classList.contains("item"))
    // console.log(list.classList.contains("links"))

    // if (list.classList.contains("show-links")) {
    //     list.classList.remove("show-links")
    // } else {
    //     list.classList.add("show-links")
    // }

    list.classList.toggle("show-links")
})