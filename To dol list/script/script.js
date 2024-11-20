
// DOM Elements============================================================
let input               = document.querySelector(".input")
let addbutton           = document.querySelector(".addbutton")
let completedcount      = document.querySelector(".completed_task")
let completetaskcount   = 0
let pendingtaskcount    = 0
let serialcounter       = 0

// Functionality of add task button==========================================
addbutton.addEventListener("click", () => {
          if (input.value == "") {
              alert("Enter a task first");
                } else {
                          pendingtaskcount++
                          serialcounter++
// New Element creation and margin ==========================================
let area1             = document.querySelector(".area1")
let area2             = document.createElement("div")
    area2.classList.add("area2")
    area2.style.marginBottom = "15px";
let input_field     = document.createElement("div")
let checkbox        = document.createElement("input")
let serial          = document.createElement("span")
let inputtask       = document.createElement("input")
let buttonArea      = document.createElement("div")
let editButton      = document.createElement("button")
let deleteButton    = document.createElement("button")
let editIcon        = document.createElement("i")
let deleteIcon      = document.createElement("i")
// Setting attributes and content===========================================
    checkbox.type = "checkbox"
    serial.textContent = serialcounter
    inputtask.type = "text"
    inputtask.value = input.value
    inputtask.setAttribute("readonly", true)
    input.value = ""
// Set icon classes========================================================
    editIcon.className = "editcolor fa-regular fa-pen-to-square"
    deleteIcon.className = "deletecolor fa-solid fa-eraser"
// Adding class names======================================================
    area2.classList.add("area2")
    input_field.classList.add("input_field")
    checkbox.classList.add("tick")
    serial.classList.add("serial")
    inputtask.classList.add("inputtask")
    buttonArea.classList.add("buttonArea")
    editButton.classList.add("Edit")
    deleteButton.classList.add("Delete")
// Setting up button contents============================================
    editButton.appendChild(editIcon)
    deleteButton.appendChild(deleteIcon)
// Creating child elements==============================================
    area1.appendChild(area2)
    area2.appendChild(input_field)
    input_field.appendChild(checkbox)
    input_field.appendChild(serial)
    input_field.appendChild(inputtask)
    area2.appendChild(buttonArea)
    buttonArea.appendChild(editButton)
    buttonArea.appendChild(deleteButton)
    updateCounters()
// Event Listener for checkbox==========================================
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        completetaskcount++
        inputtask.style.textDecoration = "line-through"
      } else {
        completetaskcount--
        inputtask.style.textDecoration = "none"
      }
      updateCounters()
    })
// Event Listener: Edit button =======================================
    editButton.addEventListener("click", () => {
      if (inputtask.hasAttribute("readonly")) {
        inputtask.removeAttribute("readonly")
        editIcon.className = "fa-regular fa-floppy-disk"
      } else {
        inputtask.setAttribute("readonly", true)
        editIcon.className = "editcolor fa-regular fa-pen-to-square"
      }
    })
// Event Listener: Delete button====================================
    deleteButton.addEventListener("click", () => {
      area1.removeChild(area2)
      pendingtaskcount--
      if (checkbox.checked) {
        completetaskcount--
      }
      updateCounters()
    })
  }
})
// Function to update the completed/total task counter
let updateCounters = () => {
  let completedTasks = completetaskcount
  let totalTasks = pendingtaskcount
  let counterText = completedTasks + " / " + totalTasks
  completedcount.textContent = counterText
}