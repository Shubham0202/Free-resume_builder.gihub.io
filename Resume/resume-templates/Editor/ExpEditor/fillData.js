
const GenButton = document.querySelector('.cr-btn');
GenButton.addEventListener('click',function Gen(){
    let wantJobTitle = document.querySelector('.prof-title');
        wantJobTitle.innerHTML=document.querySelector('#job-title').value;

    let fname = document.querySelector('.f-name');
        fname.innerHTML=document.querySelector('#fname').value;

    let lname = document.querySelector('.l-name');
        lname.innerHTML=document.querySelector('#lname').value;
    
    let email = document.querySelector('.em-address');
    let iEmail = document.querySelector('#emA').value;
        email.innerHTML=iEmail;
    
    let phone = document.querySelector('.pn-number');
    let iPhone = document.querySelector('#pn').value;
        phone.innerHTML= `+91 ${iPhone}`;

   let iCountry = document.querySelector('.contr').value;
   let iCity = document.querySelector('#ct').value;
   let iAddress = document.querySelector("#adrs").value;
   let iPinCode = document.querySelector('#pscode').value;
   let streetAdrs = document.querySelector('.street-address');
   let cityAdrs = document.querySelector('.city-address');
   streetAdrs.innerHTML = iAddress;
   cityAdrs.innerHTML = `${iCity} / ${iPinCode},${iCountry}`;
   console.log(iAddress);

    let aboutMe  =document.querySelector('.about-me-msg');
    let aboutText = document.querySelector("#txtarea").value;
        aboutMe.innerHTML = aboutText;

    let clgName = document.querySelector('.clg-title');
    let iClg = document.querySelector('#d-clg').value;
        clgName.innerHTML = iClg;

    let clgDegree = document.querySelector('.university-name');
    let iClgDegree = document.querySelector('#d-degree').value;
        clgDegree.innerHTML = iClgDegree;

    let clgStart = document.querySelector('.start-end-date');
    let iClgStart = document.querySelector('#d-strt').value;
    let iClgEnd = document.querySelector('#d-End').value;
    clgStart.innerHTML = `${iClgStart} - ${iClgEnd}`; 
    
    let referenceName = document.querySelector('.ref-title');
    let refPosition = document.querySelector('.ref-position');
    let refTelephone = document.querySelector('.ref-tel');    
     
});
let mypic =document.querySelector('#mypic');
mypic.addEventListener("change",function previewImage(event){
    const input = event.target;
    const preview = document.querySelector('.up-pic');
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        preview.setAttribute("src", e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }

});

