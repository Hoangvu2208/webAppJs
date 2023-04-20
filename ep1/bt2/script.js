
 
const validate = () => {
    const account = document.querySelector('#account');
    regexp = /^[_a-z0-9]{6,}$/;
    
    if (account.value.match(regexp)) {
       console.log("account hop le ");
    }else{
       console.log("account khong hop le");
    }
}


