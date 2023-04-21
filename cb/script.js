var cclient = document.getElementById('cclient')
var cequipa = document.getElementById('cequipa')
var cexper = document.getElementById('cexper')
var canos = document.getElementById('anos')
var cprint = document.getElementById('cprint')




for(let con1 = 0; con1 <= 200; con1++){
    setTimeout(function prints(){
        cclient.innerHTML = con1
    }, 30 * con1)
   
}
for(let con2 = 0; con2 <= 400; con2++){
    setTimeout(function prints(){
        cequipa.innerHTML = con2
    }, 20 * con2)
   
}
for(let con3 = 0; con3 <= 20; con3++){
    setTimeout(function prints(){
        cexper.innerHTML = con3
    }, 150 * con3)
   
}
for(let con3 = 0; con3 <= 20; con3++){
    setTimeout(function prints(){
        canos.innerHTML = con3
    }, 200 * con3)
   
}
for(let con4 = 0; con4 <= 1000000; con4+=1000){
    setTimeout(function prints(){
        cprint.innerHTML = `${con4}+`
    }, 0.1 * (con4 / 20))
   
}
