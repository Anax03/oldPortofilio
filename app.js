const name = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const zipcode = document.getElementById('zipcode');
const submit = document.getElementById('btn');
const buttona = document.getElementsByClassName('buttona');




submit.addEventListener('click',(e)=>{
    validatName();
    validatzipCode();
    validatphoneNumber();
    validatEmail();
})


//Name
function validatName(){
    
    const re=/^[A-Z][A-Za-z]{2,10}$/;
    if(re.test(name.value)){
        
        document.querySelector('.Vname').style.display='none';
        name.style.borderColor='#32CD32';

    }
    else{
        
        document.querySelector('.Vname').style.display='block';
        name.value='';
        name.style.borderColor='red';
       
        
    }



}
//Email
function validatEmail(){

const re=/^([A-Za-z0-9_\-\.]{2,20})[@]([A-Za-z]{2,8})[.]([A-Za-z]{2,8})$/;
if(re.test(email.value)){
    document.querySelector('.Vemail').style.display='none';
    email.style.borderColor='#32CD32';
}
else{
    document.querySelector('.Vemail').style.display='block';
    email.value='';
    email.style.borderColor='red';

}

}

//Zip code
function validatzipCode(){

    const re=/^[0-9]{13}$/

    if(re.test(zipcode.value)){
        document.querySelector('.Vzip').style.display='none';
        zipcode.style.borderColor='#32CD32';
    }
    else{
        document.querySelector('.Vzip').style.display='block';
        zipcode.value='';
        zipcode.style.borderColor='red';

    }

}

/// Phone number
function validatphoneNumber(){

    const re= /^[0-9]{10}$/

    if(re.test(phoneNumber.value)){
        document.querySelector('.Vphone').style.display='none';
        phoneNumber.style.borderColor='#32CD32';
    }
    else{
        document.querySelector('.Vphone').style.display='block';
        phoneNumber.value='';
        phoneNumber.style.borderColor='red';
    }

}
