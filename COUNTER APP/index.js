document.title ='COUNTER APP';

const count = document.getElementById('count');
const err = document.getElementById('err')



let counter = 0;

const increment = () => {
    
    if (counter === 10) {
        // throw Error("Counter cannot be greater than 10")
        count.style.color = "red"
        err.style.color = 'red'
        err.textContent = "Counter cannot be greater than 10"

    } else{
        counter += 1;
        count.textContent = counter;
        count.style.color = "black"
        
    }
}

const decrement = () => {
    
    if (counter < 0) {
        counter -= 1
        // throw Error("Counter cannot be lesser than 0")
        count.textContent = counter;
        
    } else{
        counter = 0;
        err.textContent = "Counter cannot be lesser than 0" 
        
        
    }
}