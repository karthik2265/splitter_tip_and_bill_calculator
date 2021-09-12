const reset = document.querySelector('.reset')
const billInput = document.querySelector('#bill')
const tip_percentage_buttons_div = document.querySelector('.tip-percentage-buttons-div')
const number_of_people = document.querySelector('#number-of-people')
const tip_amount = document.querySelector('.tip-amount')
const total = document.querySelector('.total')
const tip_percentage_buttons = document.querySelectorAll('.tip-percentage-buttons-div input')
const custom_input = document.querySelector('.custom-input')
const invalid_input_bill = document.querySelector('.invalid-input--bill')
const invalid_input_tip_percentage = document.querySelector('.invalid-input--tip-percentage')
const invalid_input_no_of_people = document.querySelector('.invalid-input--number-of-people')

let tipPercentage = 0
let bill = 0
let noOfPeople = 0


function calculate(bill, tipPercentage, noOfPeople) {
  total_tip = (tipPercentage * bill)/100
  tip_per_person = (total_tip/noOfPeople).toFixed(2)
  total_per_person = ((bill/noOfPeople) + parseInt(tip_per_person)).toFixed(2)
  total.textContent = '$' + total_per_person
  tip_amount.textContent = '$' + tip_per_person
}


// remove active states
function removeActiveStates(nodeList) {
  nodeList.forEach((node) => {
    if (node.classList.contains('active')) {
      node.classList.remove('active');
    }
  })
}


// select tip percentage
tip_percentage_buttons_div.addEventListener('click',(e)=> {
  if(e.target.type == 'button' || e.target.type == 'number') {
    removeActiveStates(tip_percentage_buttons)
    custom_input.value = ''
    if (e.target.type == 'button') {
      tipPercentage = parseInt(e.target.value)
      e.target.classList.add('active')
      calculate(bill, tipPercentage, noOfPeople)
    }
  }
})

// reset
reset.addEventListener('click', (e) => {
  billInput.value = ''
  number_of_people.value = ''
  total.textContent = '$0.00';
  tip_amount.textContent = '$0.00'
  removeActiveStates(tip_percentage_buttons)
  custom_input.value = ''
})

// custom-input check invalid input
custom_input.addEventListener('input', (e) => {
  removeActiveStates(tip_percentage_buttons)
  if (e.target.value != '') {
    x = e.target.value
    if (isNaN(x)) {
      invalid_input_tip_percentage.style.display = 'block'
      custom_input.classList.add('invalid_input')
    }  
    else {
      invalid_input_tip_percentage.style.display = 'none'
      custom_input.classList.remove('invalid_input')
      tipPercentage = x
      calculate(bill, tipPercentage, noOfPeople)
    }
  }
  else {
    invalid_input_tip_percentage.style.display = 'none'
    custom_input.classList.remove('invalid_input')
  }
  
})

// bill input
billInput.addEventListener('input', (e) => {
  if (e.target.value != '') {
    x = e.target.value
    if (isNaN(x)) {
      invalid_input_bill.style.display = 'block'
      billInput.classList.add('invalid_input')
    }  
    else {
      invalid_input_bill.style.display = 'none'
      billInput.classList.remove('invalid_input')
      bill = x
      calculate(bill, tipPercentage, noOfPeople)
    }
  }
  else {
    invalid_input_bill.style.display = 'none'
    billInput.classList.remove('invalid_input')
  }
})

// no of people input
number_of_people.addEventListener('input', (e) => {
  if (e.target.value != '') {
    x = e.target.value
    if (isNaN(x)) {
      invalid_input_no_of_people.style.display = 'block'
      number_of_people.classList.add('invalid_input')
    }  
    else {
      invalid_input_no_of_people.style.display = 'none'
      number_of_people.classList.remove('invalid_input')
      noOfPeople = x
      calculate(bill, tipPercentage, noOfPeople)
    }
  }
  else {
    invalid_input_no_of_people.style.display = 'none'
    number_of_people.classList.remove('invalid_input')
  }
})

