const removeFromArray = function(array, ...targets) {

    let newArray = [];

    array.forEach((item) => {

        if (!targets.includes(item)) {
            
            newArray.push(item);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
