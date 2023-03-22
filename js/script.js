// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form')
let table= document.querySelector('table')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
        e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES

    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    

    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExtension = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDepartment = row.insertCell()
    

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    let idText = document.createTextNode(id)
    cellID.appendChild(idText)

    let nameText = document.createTextNode(name)
    cellName.appendChild(nameText)

    let extText = document.createTextNode(extension)
    cellExtension.appendChild(extText)

    let emailText = document.createTextNode(email)
    cellEmail.appendChild(emailText)

    let departmentText = document.createTextNode(department)
    cellDepartment.appendChild(departmentText)


    // CREATE THE DELETE BUTTON

    let cellDelete = row.insertCell()


    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)
   

    // RESET THE FORM

    form.reset()


    // SET FOCUS BACK TO THE ID TEXT BOX

    document.getElementById("id").focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    
   count++


})

// DELETE EMPLOYEE

table.addEventListener('click', (e) =>{
    
    const btn = e.target;

    if(confirm('Do you want to delete this row?')){
        btn.closest('tr').remove()
        count--
    }
    
})


// Employee count
