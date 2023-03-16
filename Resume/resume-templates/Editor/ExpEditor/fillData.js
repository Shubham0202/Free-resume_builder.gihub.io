
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
    let irefName = document.querySelector('#d-ref-name').value;
    referenceName.innerText=irefName;
    let irefJob = document.querySelector('#d-ref-job').value;
    let irefCompany = document.querySelector('#d-ref-company-name').value;
    refPosition.innerHTML=`${irefJob} | ${irefCompany}`;    
    let ireftel = document.querySelector('#d-ref-tel').value;
    refTelephone.innerHTML = ireftel;

    // work experience field 

    let jobMain = document.createElement('div');
    jobMain.className = 'job-main';
    let jobStartEndDate = document.createElement('p');
        jobStartEndDate.className = 'start-end-date';
    let jobArea = document.createElement('div');
        jobArea.className = 'job-area';
    let jobPosition = document.createElement('div');
        jobPosition.className = 'job-position';
    let jobPTitle = document.createElement('p');
        jobPTitle.className = 'job-ps-title';
    let jobCompany = document.createElement('p');
        jobCompany.className = 'job-company';
    jobPosition.append(jobPTitle,jobCompany); 
    
    let jobMsg = document.createElement('p');
    jobMsg.className = 'job-msg';
    jobArea.append(jobPosition,jobMsg);

    jobMain.append(jobStartEndDate,jobArea);
    // console.log(jobMain.children)


    let workExp = document.querySelector('.work-exp'); //template field it is for append this in job main

    let iempJobTitle = document.getElementById('d-name').value;
    let iempCompName = document.getElementById('d-employer').value;
    let iempStDate = document.getElementById('d-st').value;
    let iempEndDate = document.getElementById('d-end').value;
    let iempCity = document.getElementById('d-city').value;
    let iempJOverview = document.getElementById('i-job-msg').value;
    jobPTitle.innerText=iempJobTitle;
    jobCompany.innerHTML = `${iempCompName} / ${iempCity}`;
    jobStartEndDate.innerHTML =`${iempStDate} ${iempEndDate}`;
    jobMsg.innerText = iempJOverview;
    let str = '';
    workExp.append(jobMain);
    

    //skils section

    let skill = document.getElementById()
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

