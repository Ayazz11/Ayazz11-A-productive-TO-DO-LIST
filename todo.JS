


window.addEventListener('load', (event) => {

    $('.carousel').carousel({
        interval: 3000
    });

    $('.carousel').carousel('cycle');
});




let add = document.getElementById('add');



// STORING VALUE IN LOCAL STORAGE


function storeValue() {

    let task = document.getElementById("tsk").value;
    let dept = document.getElementById("dpt").value;

    if (localStorage.getItem("data") == null) {
        store = [];
        store.push([task, dept]);
        localStorage.setItem("data", JSON.stringify(store));
    }
    else {
        store = JSON.parse(localStorage.getItem("data"));
        store.push([task, dept]);
        localStorage.setItem("data", JSON.stringify(store));

    }
    displayValue();

}


function clearOldValue() {
    document.getElementById('tsk').value = "";
    document.getElementById('dpt').value = "";
}

// displaying value from local storage inside the table


displayValue = () => {
    if (localStorage.getItem('data') == null) {
        store = [];
        localStorage.setItem('data', JSON.stringify(store));

    }

    else {
        store = localStorage.getItem('data');
        store = JSON.parse(store);
    }
    let values = JSON.parse(localStorage.getItem("data"));
    let newHTML = "";

    values.forEach((element, index) => {
        newHTML += `  <tr>
        <td class="tdc">${index + 1}</td>
        <td class="tdc">${element[0]}</td>
        <td class="tdc">${element[1]}</td>
        <td>
            
            <button class="delbtn btn btn-danger" onclick="deleted(${index})">X</button>
         </td>
         </tr>`
    });
    document.getElementById("tablebody").innerHTML = newHTML;
}







add.addEventListener('click', () => {

    if (document.getElementById("tsk").value === "") {
        alert("PLEASE ENTER A TASK AND DESCRIPTION");
    }
    else {

        storeValue();
        clearOldValue();
        noTask()
    }


});

displayValue();




// DELETE ALL BUTTON


let clearAll = document.getElementById("clear");
clearAll.addEventListener('click', function () {
    localStorage.clear();
    noTask()
    window.location.reload();



})

function deleted(indexValue) {

    store = JSON.parse(localStorage.getItem("data"));
    store.splice(indexValue, 1);
    localStorage.setItem("data", JSON.stringify(store));
    displayValue();
    noTask()


}



noTask()



function noTask() {
    if (document.querySelector("#tablebody tr") == null) {
        let task = "";
        task = " You Have No Due Task .. Make a New List !!";
        document.querySelectorAll("#list h2")[1].textContent = task;
    }
    else {
        document.querySelectorAll("#list h2")[1].textContent = "";
    }
}






