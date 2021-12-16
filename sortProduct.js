const sortProduct = (arr) => {
    
    let products = [];
    
    for (let i = 1; i <= arr.length; i++) {
        let product = i * arr[i - 1];
        products.push([product, arr[i - 1]]);
    }

    let sorted = [];

    for (let j = 0; j < products.length; j++) {
        let currentProduct = products[j][0];
        let currentArr = products[j];
        if (sorted[0] === undefined) {
            sorted.push(currentArr);
            continue;
        }
        if (sorted[0][0] > currentProduct) {
            sorted.unshift(currentArr)
        } else if (sorted[sorted.length - 1][0] < currentProduct) {
            sorted.push(currentArr);
        } else {
            let oldLength = sorted.length;
            for (let k = 1; k < sorted.length - 1; k++) {
                let prior = sorted[k - 1][0];
                let subsequent = sorted[k + 1][0]
                if (prior < currentProduct && subsequent > currentProduct) {
                    sorted.splice(k, 0, currentArr);
                }
            }
            if (oldLength === sorted.length) {
                sorted.splice(1, 0, currentArr);
            }
        }
    }

    let result = [];

    for (let l = 0; l < sorted.length; l++) {
        result.push(sorted[l][1]);
    }

    return result;
}

console.log(sortProduct([23,2,3,4,5]));