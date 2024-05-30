var BookMarkName = document.getElementById('BookMarkName');
var BookMarkUrl = document.getElementById('BookMarkUrl');
var BookMarkContainer = [];


if(localStorage.getItem("bookMark")==null)
    {
        BookMarkContainer=[]
    }
    else{
        BookMarkContainer=JSON.parse(localStorage.getItem('bookMark'));
        displayBookmarks()
    }

    function deleteBookMark(deletedBook)
    {
        BookMarkContainer.splice(deletedBook,1)
        displayBookmarks();
        localStorage.setItem("bookMark",JSON.stringify(BookMarkContainer))
        console.log(BookMarkContainer);
    }

function clear() 
{
    BookMarkName.value=null;
    BookMarkUrl.value=null
}
function submitBookmark()
{
    var bookMark = {
        SiteName:BookMarkName.value ,
        url:BookMarkUrl.value
    }
    BookMarkContainer.push(bookMark);
    clear();
    displayBookmarks();
    localStorage.setItem('bookMark', JSON.stringify(BookMarkContainer))

}
function displayBookmarks()
{
    var cartona ='';
    for(var i=0 ; i<BookMarkContainer.length ; i++)
        cartona += `<tr>
    <td>${BookMarkContainer[i].SiteName}</td>              
    <td>
        <button class="btn btn-visit" >
        <a  class="btn btn-primary" id="visit" href="${BookMarkUrl[i]}">Visit</a>
        </button>
    </td>
    <td>
        <button onclick="deleteBookMark(${i})" class="btn btn-delete btn-danger btn-sm pe-2">
        <i class="fa-solid fa-trash-can"></i>
        Delete
        </button>
    </td>
</tr>`
    document.getElementById('tableContent').innerHTML = cartona
}

function validate(element){


var regex = {
    BookMarkName: /^\w{3,}(\s+\w+)*$/,
    BookMarkUrl:/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,



}

if(regex[element.id].test(element.value) ==true){
    
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
    element.nextElementSibling.classList.replace('d-block','d-none')
}
else{
    
    element.classList.add('is-invalid')
    element.classList.remove('is-valid')
    element.nextElementSibling.classList.replace('d-none','d-block')
}
}






