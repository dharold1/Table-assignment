id = 0;
list = []
{/* <td class='no'>${no+1}</td> */}
function newItem() {
    let userName = document.querySelector('.name').value;
    let userMail = document.querySelector('.email').value;
    let userAge = document.querySelector('.age').value;
    const data = document.querySelector('.data');
    list.push(userName);
    let no = list.indexOf(userName);
    data.innerHTML += `
    <div>
    <span>
    <tr class='dataCollected'>
    <td >${userName}</td> 
    <td>${userMail}</td>
    <td>${userAge}</td>
    <td><button class='del'>Delete </button></td>
</tr>

</div>`
    userName = document.querySelector('.name').value = '';
    userMail = document.querySelector('.email').value = '';
    userAge = document.querySelector('.age').value = '';
}
// function delItem(){
//     const element = document.getElementsByClassName('dataCollected');
//     element.remove();
// }
// ===============================Add Item==================
document.querySelector('.btn').addEventListener('click', (e) => {
    let userName = document.querySelector('.name').value;
    let userMail = document.querySelector('.email').value;
    let userAge = document.querySelector('.age').value;
    if (userName && userAge && userMail) {
        e.preventDefault();
        newItem();
        delItem();
    }

})

// ===========================delete item =====================
function delItem() {
    let userName = document.querySelector('.name').value;
    const del = document.querySelectorAll('.del');
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', () => {
            console.log(del[i]);
            del[i].parentElement.parentElement.remove();
            // list.splice(i, 1)
            //  let no = list.indexOf(userName);
            //  console.log(no)
            //  document.querySelector('.no').value=no;
        })
    }
}
