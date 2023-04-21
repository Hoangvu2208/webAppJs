
 
const validate = () => {
    const email = document.querySelector('#email');
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    
    if (email.value.match(regexp)) {
       console.log("email hop le ");
    }else{
       console.log("email khong hop le");
    }
}


