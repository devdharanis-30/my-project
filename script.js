//selecting popupbox ,popoup overlay,buttton
var popup_box=document.querySelector(".popupbox")
var popupoverlay=document.querySelector(".popup-overlay")
var addpopupbutton=document.getElementById("popup-button")

addpopupbutton.addEventListener("click",function(){
    popup_box.style.display="block"
    popupoverlay.style.display="block"
})
var cancel_button=document.getElementById("cancel_book")

cancel_button.addEventListener("click",function(event){
    event.preventDefault
    popup_box.style.display="none"
    popupoverlay.style.display="none"
})
//select container,add book,book title input,add author,short description
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var title=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var description=document.getElementById("Description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${title.value}</h1>
                   <h5>${author.value}</h5>
                   <p>${description.value}</p>
                    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
     popup_box.style.display="none"
    popupoverlay.style.display="none"
     
    
})
function deletebook(event){
    event.target.parentElement.remove()
}


