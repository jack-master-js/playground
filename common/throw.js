function b() {
    c()
}

function c() {
    throw 'some error'
}

function a(){
    try{
        b()
    }catch(e){
        console.log(e);
    }
   
}

a()