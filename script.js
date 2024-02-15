// $.getJSON('http://api.open-notify.org/astros.json', function(data){
//     var number = data['number'];
//     $('#spacePeople').html(number);

//     data['people'].forEach(function(d){
//         $('astroNames').append('<li>' +d['name'] + '<li>');
//     });
// });

function displayData() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        // for (let i = 0; i < data.number-5; i++) {
        //     document.getElementById('column1').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br><br><br><br><br>';
        // }
        document.getElementById('num1').innerHTML += data.people[0].name + " " +  data.people[0].craft;
        document.getElementById('num2').innerHTML += data.people[1].name + " " +  data.people[1].craft;
        document.getElementById('num3').innerHTML += data.people[2].name + " " +  data.people[2].craft;
        document.getElementById('num4').innerHTML += data.people[3].name + " " +  data.people[3].craft;
        document.getElementById('num5').innerHTML += data.people[4].name + " " +  data.people[4].craft;
        document.getElementById('num6').innerHTML += data.people[5].name + " " +  data.people[5].craft;
        document.getElementById('num7').innerHTML += data.people[6].name + " " +  data.people[6].craft;
       
        // for(let i = 2; i<data.number-2; i++){
        //     document.getElementById('column2').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br><br><br><br><br>';
        // }
        // for(let i = 5; i<data.number; i++){
        //     document.getElementById('column3').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br><br><br><br><br>';
        // }
        
    })
}

displayData();



// function displayPicture() {
//     fetch('http://api.open-notify.org/astros.json')
//     .then(response => response.json())
//     .then(data => {

//         document.getElementById('picture').textContent = data.title;
//         document.getElementById('explain').innerHTML = data.explanation;
//         document.getElementById('img').src = data.hdurl;
    
//     })
// }

// displayPicture();

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     loadJSON('http://api.open-notify.org/astros.json', data);
// }



// function data(data1){
//     for(let i=1; i<data1.number; i++){
//         fill(random(200), random(200), random(200));
//         ellipse(30+(200*i), 20+(40*i), 55+(50*i), 20+(60*i));
//     }
// }

// function draw(){
   
// }

 
