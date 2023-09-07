//  const ArrNum = [1, "d", 6, "z", 5]


 const sorter = (array) => { 
    const even = [];
    const odd = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
       
        if (element%2 === 0) {
            even.push(element)
        } else {
            odd.push(element)
        }
    }
return [even, odd]


 }
 console.log(sorter([1, 2, 3, 4, 5, 6, 7, 8]));
 
 