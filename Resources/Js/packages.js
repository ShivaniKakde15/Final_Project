//-----------Image Change----------
//India
function setNewIndiaImg() {
    document.getElementById('indiaimg').src = "Resources/images/india1.jpg";
}
function setOldIndiaImg() {
    document.getElementById('indiaimg').src = "Resources/images/india.jpg";
    // alert();
}

//Italy
function setNewItalyImg() {
    document.getElementById('italyimg').src = "Resources/images/italy1.jpg";
}
function setOldItalyImg() {
    document.getElementById('italyimg').src = "Resources/images/italy.jpg";
}

//Germany   
function setNewGerImg() {
    document.getElementById('germanyimg').src = "Resources/images/Historical-Germany1.jpg";
}
function setOldGerImg() {
    document.getElementById('germanyimg').src = "Resources/images/germany.jpg";
}

//Egypt
function setNewEgyptImg() {
    document.getElementById('egyptimg').src = "Resources/images/egyptian-museum1.jpg";
}
function setOldEgyptImg() {
    document.getElementById('egyptimg').src = "Resources/images/egypt.jpg";
}

//France
function setNewFranceImg() {
    document.getElementById('franceimg').src = "Resources/images/Romantic_Land-France1.jpg";
}
function setOldFranceImg() {
    document.getElementById('franceimg').src = "Resources/images/france.jpg";
}

//London
function setNewLondonImg() {
    document.getElementById('londonimg').src = "Resources/images/hyde-park-london1.jpg";
}
function setOldLondonImg() {
    document.getElementById('londonimg').src = "Resources/images/london.jpg";
}

//Canada
function setNewCanadaImg() {
    document.getElementById('canadaimg').src = "Resources/images/Niagara-Falls-Canada1.jpg";
}
function setOldCanadaImg() {
    document.getElementById('canadaimg').src = "Resources/images/canda_rockymountain.jpg";
}

//China
function setNewChinaImg() {
    document.getElementById('chinaimg').src = "Resources/images/giant-buddha-china1.jpg";
}
function setOldChinaImg() {
    document.getElementById('chinaimg').src = "Resources/images/greatwall_china.jpg";
}

//Singapore
function setNewSingaporeImg() {
    document.getElementById('singaporeimg').src = "Resources/images/Peranakan houses_singapore1.jpg";
}
function setOldSingaporeImg() {
    document.getElementById('singaporeimg').src = "Resources/images/Architectural-Marvels_Singapore.jpg";
}

















//----------Load more---------
let col = document.querySelectorAll('.col');
let btn = document.querySelector('.btnload');
let cuurentcol = 3
btn.addEventListener('click', function () {
    // console.log('hi');
    for(let i = cuurentcol; i<cuurentcol+3; i++){   
        if (col[i]){                               // it checks if the col[i] element exists.
            col[i].style.display = 'block';    //If it does, it sets the display style property to 'block', effectively displaying the element.
        }
    }
    cuurentcol+=3;                   //incremented by 3.
    if (cuurentcol>=col.length){    //It checks if currentcol is greater than or equal to the length of the col array.
        event.target.style.display = 'none';  //button display = none
    }   
})