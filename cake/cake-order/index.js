

let validateOrders = (orders1, orders2, allOrders) => {

    if (allOrders.length > (orders1.length + orders2.length)) {
        return false; 
    };

    //0 length array problems 
    for (const item of allOrders) {
        if (item === orders1[0]) {
            orders1.shift()
        }

        if (item === orders2[0]) {
            orders2.shift()
        }
        
    }

    return orders1.length === 0 && orders2.length === 0;
}



// let o1 = [1, 3, 5];
// let o2 = [2, 4, 6];
// let o3 = [1, 2, 4, 6, 5, 3];

let o1 = [17, 8, 24];
let o2 = [12, 19, 2];
let o3 = [17, 8, 12, 19, 24, 2];

let result = validateOrders(o1, o2, o3);

console.log(result);

