
let trim = (x)=>{
    let value = String(x);
    return value.replace(/^\s+|\s+$/gm, '');
}

let isEmpty = (value)=>{
    return value === null || value === undefined ||  trim(value)=== '' || value.length === 0 ? true : false;
}

module.exports = {
    isEmpty : isEmpty
}