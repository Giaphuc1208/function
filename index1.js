let productslist = [];

function showList() {
    let exp = "";
    for (let i = 0; i < productslist.length; i++) {
        exp += '<tr>\n' +
            '        <td>'+productslist[i]+' </td>\n' +
            '        <td><button onclick="Edit('+i+')">Edit</button></td>\n' +
            '        <td><button onclick="Delete('+i+')">Delete</button></td>\n' +
            '    </tr>'
    }
    document.getElementById("products").innerHTML = exp;
}
showList();
function NewProducts(){
    // let news= prompt('Products u need');
    let newP = document.getElementById("newP").value;
    productslist.push(newP);
    showList();
    document.getElementById('newP').value=' ';
    document.getElementById('Sum').innerText = productslist.length + " Product";
    return productslist.length + " Product";
}
function Delete(index){
    productslist.splice(index, 1);
    showList()
}
function Edit(index){
let newPs = prompt("Enter products");
    productslist[index] = newPs;
showList()
}
