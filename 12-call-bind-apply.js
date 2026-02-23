function cookdish(ingredients , time){
    return `${this.name} and ${ingredients} : ${time}`
}

const c1 = {name : "hi"}

console.log(cookdish.call(c1 , "pulao" , 15));
