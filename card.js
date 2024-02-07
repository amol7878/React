console.log("Exporting Module")

//varible
export let a=10
//Array
export let name=["chinmay","ram","sarika","sham"]
//function

export let cart=[]
export let addToCard =function(product,quantity){
    let obj={}
    obj[product]=quantity
    cart.push(obj)
    console.log(`${quantity}${product}`)
}

