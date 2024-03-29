// profile code 
let myAcc = document.querySelector('.myacc');
myAcc.addEventListener('click',()=>{
    let accountDashboard = document.querySelector('#acc-dashboard');
    accountDashboard.classList.toggle('hide-accDash');
});

// Generate resume code 
const generate = document.querySelector('.cr-btn');
generate.addEventListener('click',()=>{
    const result = document.querySelector('.result');
    const  editor= document.querySelector('.Editor');
    result.style.display="block";
    editor.style.display="none";

    // close Not ready msg 
    let notReady = document.querySelector('.not-ready').style.display="none";    
});
let notReadyBtn = document.querySelector('.f-close-btn');
notReadyBtn.addEventListener('click',()=>{
    let notReady = document.querySelector('.not-ready');
    notReady.style.display="none";    

});

// toggle_switch code 

let no_exp = document.querySelector('.no-experience ');
let tgSwitch = no_exp.setAttribute("area", "true");
no_exp.addEventListener('click',
    function no_exp_switch() {
        let toggle_switch = document.querySelector('.toggle-switch');
        // let toggleAfter  =window.getComputedStyle(toggle_switch,'::after');
        // console.log(toggleAfter.background);
        toggle_switch.classList.toggle("change-switch");
        let tgSwitch = no_exp.getAttribute("area");
        if (tgSwitch == 'true') {
            toggle_switch.style.setProperty('--default-ps', '1.7em');
            tgSwitch = no_exp.setAttribute("area", "false");
        }
        else {
            tgSwitch = no_exp.setAttribute("area", "true");
            toggle_switch.style.setProperty('--default-ps', '0.2em');

        }
    });

    // back to Editor Code 
    let Back = document.querySelector('.back-to-editor');
    Back.addEventListener('click',(e)=>{
        const cs = confirm("If you go back to editor you may lost your filled information");
        if(cs == !true){
            console.log("Stay");
            e.preventDefault();
        }
      
    });

    // do not refresh editor page code
    const scriptgs = document.querySelector('script');
    let ff=fetch(scriptgs);
   try {
    
    if( ff== onload)
   console.log(lod+"=");
    
   } catch (error) {
    console.log(error);
    console.log(" script not Loaded"+error);

   }


// ********************  Skills options *********************
let skillsOp = document.querySelectorAll('.skills-option');
let innerPlus = document.querySelectorAll('.s-plus');
const skillsOPArry = Array.from(skillsOp);
const innerPlusArry = Array.from(innerPlus);
skillsOPArry.forEach(options => {
    options.addEventListener('click', function skillsOnClickFun(index, action) {
        options.classList.toggle("option-color");

        let f = innerPlusArry.findIndex(function findi(obj) {
            return obj.value == "+";
        });
        // index=f;
        console.log("InnerPLus Array=" + innerPlusArry);
        console.log("index=" + f)
        index = 0;

        action = `<ion-icon name="checkmark-outline"></ion-icon>`;
        innerPlusArry.forEach(element => {
            // element.innerHTML=action;
            element.innerHTML = `+`;
            innerPlusArry[index].innerHTML = action;
        });
        // console.log(innerPlusArry)
    }
    )
});

// *************** ADD Emp data visible ***************************
let empAdd = document.querySelector('.emp-add');

empAdd.addEventListener('click',()=>{
    let inpadj = 'input-adjust';
    let lbPadd = 'label-padd';
    let jobLabel = document.createElement('label');
    let jobTitle = document.createElement('input');
    let jl=jobTitle.id='d-name';
    jobTitle.type='text';
    jobTitle.classList.add(inpadj);
    jobLabel.setAttribute('for',jl);
    jobLabel.classList.add('label-padd');
    jobLabel.innerText='Job Title';
    
    let empLabel = document.createElement('label');
    let employer = document.createElement('input');
    let el=  employer.id='d-employer';
    employer.type='text';
    employer.classList.add(inpadj);
    empLabel.setAttribute('for',el);
    empLabel.classList.add('label-padd');
    empLabel.innerText='Employer';
    
    let startDateLabel = document.createElement('label');
    let startDateInput = document.createElement('input');
    let std = startDateInput.id='d-st';
    startDateInput.type = 'datetime';
    startDateInput.placeholder='MM/YYYY';
    startDateInput.classList.add(inpadj); 
    startDateLabel.setAttribute('for',std);
    startDateLabel.classList.add(lbPadd);
    startDateLabel.innerText = 'Start & End Date';

    let endDateInput = document.createElement('input');
    let endD = endDateInput.id='d-end';
    endDateInput.type = 'datetime';
    endDateInput.placeholder='MM/YYYY';
    endDateInput.classList.add(inpadj); 

    let empCity = document.createElement('input');
    let empCityId = empCity.id='d-city';
    empCity.type='text';
    empCity.classList.add(inpadj);

    let empCityLabel = document.createElement('label');
    empCityLabel.setAttribute('for',empCityId);
    empCityLabel.classList.add(lbPadd);
    empCityLabel.innerText = 'City';

    // creating div tags to add them this upper input tags 
    let dInp = 'data-inputs';
    let empFillData = document.createElement('div');
    empFillData.classList.add('emp-fill-data','inner-info');

    let dNameInp = document.createElement('div');
    dNameInp.classList.add(dInp);
    dNameInp.appendChild(jobLabel);
    dNameInp.appendChild(jobTitle);
    empFillData.appendChild(dNameInp);
    
    let dEmployerInp = document.createElement('div');
    dEmployerInp.classList.add(dInp);
    dEmployerInp.appendChild(empLabel);
    dEmployerInp.appendChild(employer);
    empFillData.appendChild(dEmployerInp);
    let dates = document.createElement('div');
    dates.classList.add('dates');
    dates.appendChild(startDateLabel);
    empFillData.appendChild(dates);
    let adjustDates = document.createElement('div');
    adjustDates.classList.add('adjust-dates');
    dates.appendChild(adjustDates);
    
    let dStartDInp = document.createElement('div');
    dStartDInp.classList.add(dInp);
    adjustDates.appendChild(dStartDInp);
    dStartDInp.appendChild(startDateInput);

    let dEndInp = document.createElement('div');
    dEndInp.classList.add(dInp);
    adjustDates.appendChild(dEndInp);
    dEndInp.appendChild(endDateInput);

    let dEmpCity = document.createElement('div');
    dEmpCity.classList.add(dInp);
    dEmpCity.appendChild(empCityLabel);
    dEmpCity.appendChild(empCity);
    empFillData.appendChild(dEmpCity);

    // adding empFillData into emp history before emp-info 
    let empHistory = document.querySelector('.emp-history');
    empHistory.append(empFillData);
    // console.log(empHistory.children);
});


// education information 

let eduAdd = document.querySelector('.edu-add');

eduAdd.addEventListener('click',()=>{
    let inpadj = 'input-adjust';
    let lbPadd = 'label-padd';
    let jobLabel = document.createElement('label');
    let jobTitle = document.createElement('input');
    let jl=jobTitle.id='edu-school-name';
    jobTitle.type='text';
    jobTitle.classList.add(inpadj);
    jobLabel.setAttribute('for',jl);
    jobLabel.classList.add('label-padd');
    jobLabel.innerText='School';
    
    let empLabel = document.createElement('label');
    let employer = document.createElement('input');
    let el=  employer.id='edu-employer';
    employer.type='text';
    employer.classList.add(inpadj);
    empLabel.setAttribute('for',el);
    empLabel.classList.add('label-padd');
    empLabel.innerText='Degree';
    
    let startDateLabel = document.createElement('label');
    let startDateInput = document.createElement('input');
    let std = startDateInput.id='edu-st';
    startDateInput.type = 'datetime';
    startDateInput.placeholder='MM/YYYY';
    startDateInput.classList.add(inpadj); 
    startDateLabel.setAttribute('for',std);
    startDateLabel.classList.add(lbPadd);
    startDateLabel.innerText = 'Start & End Date';

    let endDateInput = document.createElement('input');
    let endD = endDateInput.id='edu-end';
    endDateInput.type = 'datetime';
    endDateInput.placeholder='MM/YYYY';
    endDateInput.classList.add(inpadj); 

    let empCity = document.createElement('input');
    let empCityId = empCity.id='edu-city';
    empCity.type='text';
    empCity.classList.add(inpadj);

    let empCityLabel = document.createElement('label');
    empCityLabel.setAttribute('for',empCityId);
    empCityLabel.classList.add(lbPadd);
    empCityLabel.innerText = 'City';

    // creating div tags to add them this upper input tags 
    let dInp = 'data-inputs';
    let empFillData = document.createElement('div');
    empFillData.classList.add('emp-fill-data','inner-info');

    let dNameInp = document.createElement('div');
    dNameInp.classList.add(dInp);
    dNameInp.appendChild(jobLabel);
    dNameInp.appendChild(jobTitle);
    empFillData.appendChild(dNameInp);
    
    let dEmployerInp = document.createElement('div');
    dEmployerInp.classList.add(dInp);
    dEmployerInp.appendChild(empLabel);
    dEmployerInp.appendChild(employer);
    empFillData.appendChild(dEmployerInp);
    let dates = document.createElement('div');
    dates.classList.add('dates');
    dates.appendChild(startDateLabel);
    empFillData.appendChild(dates);
    let adjustDates = document.createElement('div');
    adjustDates.classList.add('adjust-dates');
    dates.appendChild(adjustDates);
    
    let dStartDInp = document.createElement('div');
    dStartDInp.classList.add(dInp);
    adjustDates.appendChild(dStartDInp);
    dStartDInp.appendChild(startDateInput);

    let dEndInp = document.createElement('div');
    dEndInp.classList.add(dInp);
    adjustDates.appendChild(dEndInp);
    dEndInp.appendChild(endDateInput);

    let dEmpCity = document.createElement('div');
    dEmpCity.classList.add(dInp);
    dEmpCity.appendChild(empCityLabel);
    dEmpCity.appendChild(empCity);
    empFillData.appendChild(dEmpCity);

    // adding empFillData into emp history before emp-info 
    let eduHistory = document.querySelector('.edu-history');
    eduHistory.append(empFillData);
    // console.log(eduHistory.children);
});

let webSocial = document.querySelector('#wb-add');
webSocial.addEventListener('click',()=>{
    let lbPadd  = 'label-padd';
    let inpAdj = 'input-adjust';
    let webLabel = document.createElement('label');
    let webLinkInp = document.createElement('input');
    let webId = webLinkInp.id = 'wb-label';
    webLinkInp.type = 'text';
    webLinkInp.classList.add(inpAdj);
    webLabel.classList.add(lbPadd);
    webLabel.setAttribute('for',webId);
    webLabel.innerText = 'Label';

    let linkLabel = document.createElement('label');
    let webLinksInp = document.createElement('input');
    let linkId = linkLabel.id = 'wb-link-label';
    webLinksInp.classList.add(inpAdj);
    linkLabel.classList.add(lbPadd);
    linkLabel.setAttribute('for',linkId);
    linkLabel.innerText = 'Links';

    let dataInp = document.createElement('div');
    dataInp.classList.add('data-inputs');
    dataInp.append(webLabel,webLinkInp);
    console.log(dataInp.children);
    let linkDataInp = document.createElement('div');
    linkDataInp.classList.add('data-inputs');
    linkDataInp.append(linkLabel,webLinksInp);
    // console.log(linkDataInp.children);

    let mainLinkerSection = document.querySelector('#wb-main-links');
    mainLinkerSection.append(dataInp,linkDataInp);
    // console.log(webLabel);
});

let skillLevel = document.querySelector('#skill-level');
skillLevel.addEventListener('click',()=>{
    let i=0;
    let lbPadd  = 'label-padd';
    let inpAdj = 'input-adjust';
    let skillLabel = document.createElement('label');
    let skillInp = document.createElement('input');
    let skId = skillInp.id = `d-skill-${1+1}`;
    skillInp.type = 'text';
    skillInp.classList.add(inpAdj);
    skillLabel.classList.add(lbPadd);
    skillLabel.setAttribute('for',skId);
    skillLabel.innerText = 'Skill';

    let levelLabel = document.createElement('label');
    let levelInp = document.createElement('input');
    let linkId = levelInp.id = `d-label-${i+1}`;
    levelInp.classList.add(inpAdj);
    levelLabel.classList.add(lbPadd);
    levelLabel.setAttribute('for',linkId);
    levelLabel.innerText = 'LevelExpert';

    let dataInp = document.createElement('div');
    dataInp.classList.add('data-inputs');
    dataInp.append(skillLabel,skillInp);
    console.log(dataInp.children);
    let linkDataInp = document.createElement('div');
    linkDataInp.classList.add('data-inputs');
    linkDataInp.append(levelLabel,levelInp);
    // console.log(linkDataInp.children);

    let mainLinkerSection = document.querySelector('#skill-add');
    mainLinkerSection.append(dataInp,linkDataInp);
    // console.log(skillLabel,skillInp);
});


// intern add 

let internAdd = document.querySelector('#add-intern');

internAdd.addEventListener('click',()=>{
    let inpadj = 'input-adjust';
    let lbPadd = 'label-padd';
    let jobLabel = document.createElement('label');
    let jobTitle = document.createElement('input');
    let jl=jobTitle.id='intern-name';
    jobTitle.type='text';
    jobTitle.classList.add(inpadj);
    jobLabel.setAttribute('for',jl);
    jobLabel.classList.add('label-padd');
    jobLabel.innerText='Job Title';
    
    let empLabel = document.createElement('label');
    let employer = document.createElement('input');
    let el=  employer.id='intern-employer';
    employer.type='text';
    employer.classList.add(inpadj);
    empLabel.setAttribute('for',el);
    empLabel.classList.add('label-padd');
    empLabel.innerText='Employer';
    
    let startDateLabel = document.createElement('label');
    let startDateInput = document.createElement('input');
    let std = startDateInput.id='intern-st';
    startDateInput.type = 'datetime';
    startDateInput.placeholder='MM/YYYY';
    startDateInput.classList.add(inpadj); 
    startDateLabel.setAttribute('for',std);
    startDateLabel.classList.add(lbPadd);
    startDateLabel.innerText = 'Start & End Date';

    let endDateInput = document.createElement('input');
    let endD = endDateInput.id='intern-end';
    endDateInput.type = 'datetime';
    endDateInput.placeholder='MM/YYYY';
    endDateInput.classList.add(inpadj); 

    let empCity = document.createElement('input');
    let empCityId = empCity.id='intern-city';
    empCity.type='text';
    empCity.classList.add(inpadj);

    let empCityLabel = document.createElement('label');
    empCityLabel.setAttribute('for',empCityId);
    empCityLabel.classList.add(lbPadd);
    empCityLabel.innerText = 'City';

    // creating div tags to add them this upper input tags 
    let dInp = 'data-inputs';
    let empFillData = document.createElement('div');
    empFillData.classList.add('emp-fill-data','inner-info');

    let dNameInp = document.createElement('div');
    dNameInp.classList.add(dInp);
    dNameInp.appendChild(jobLabel);
    dNameInp.appendChild(jobTitle);
    empFillData.appendChild(dNameInp);
    
    let dEmployerInp = document.createElement('div');
    dEmployerInp.classList.add(dInp);
    dEmployerInp.appendChild(empLabel);
    dEmployerInp.appendChild(employer);
    empFillData.appendChild(dEmployerInp);
    let dates = document.createElement('div');
    dates.classList.add('dates');
    dates.appendChild(startDateLabel);
    empFillData.appendChild(dates);
    let adjustDates = document.createElement('div');
    adjustDates.classList.add('adjust-dates');
    dates.appendChild(adjustDates);
    
    let dStartDInp = document.createElement('div');
    dStartDInp.classList.add(dInp);
    adjustDates.appendChild(dStartDInp);
    dStartDInp.appendChild(startDateInput);

    let dEndInp = document.createElement('div');
    dEndInp.classList.add(dInp);
    adjustDates.appendChild(dEndInp);
    dEndInp.appendChild(endDateInput);

    let dEmpCity = document.createElement('div');
    dEmpCity.classList.add(dInp);
    dEmpCity.appendChild(empCityLabel);
    dEmpCity.appendChild(empCity);
    empFillData.appendChild(dEmpCity);

    // adding empFillData into emp history before emp-info 
    let internHistory = document.querySelector('#intern-history');
    internHistory.append(empFillData);
    // console.log(internHistory.children);
});


// let form = document.querySelectorAll('input');
// let data = setInterval(() => {
//     personalInfoTitle = document.querySelector('#personal-info-title').value;
// }, 1000);
// form.forEach(inp =>{
//         let p = document.querySelector('.para');
//     inp.addEventListener('keypress',function formControl(){
//         console.log(personalInfoTitle)
//         p.innerHTML=personalInfoTitle
//     })
// })
