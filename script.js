
function displayData() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        // for (let i = 0; i < data.number-5; i++) {
        //     document.getElementById('column1').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br><br><br><br><br>';
        // }
        document.getElementById('num1').innerHTML += data.people[0].name + ", " +  data.people[0].craft;
        document.getElementById('num2').innerHTML += data.people[1].name + ", " +  data.people[1].craft;
        document.getElementById('num3').innerHTML += data.people[2].name + ", " +  data.people[2].craft;
        document.getElementById('num4').innerHTML += data.people[3].name + ", " +  data.people[3].craft;
        document.getElementById('num5').innerHTML += data.people[4].name + ", " +  data.people[4].craft;
        document.getElementById('num6').innerHTML += data.people[5].name + ", " +  data.people[5].craft;
        document.getElementById('num7').innerHTML += data.people[6].name + ", " +  data.people[6].craft;
       
        // for(let i = 2; i<data.number-2; i++){
        //     document.getElementById('column2').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br><br><br><br><br>';
        // }
        // for(let i = 5; i<data.number; i++){
        //     document.getElementById('column3').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br><br><br><br><br>';
        // }
        
    })
}

displayData();

 
