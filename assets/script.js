// Update quantity
function updateQuantity(displayQuantity){
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}

// Start quantity at 1 since product is in cart
let quantity = 1

// Buttons
const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')

// Add event listener to decrease quantity
quantDown.addEventListener('click', function(e){
    if (quantity >0) {
        quantity--
        console.log('Hello quantDown')
    }
    updateQuantity(`Quantity: ${quantity}`) // template literal; back ticks, not single quotes
})

// Add event listener to increase quantity
quantUp.addEventListener('click', function(e){
    quantity++
    updateQuantity(`Quantity: ${quantity}`) // template literal; back ticks, not single quotes
})