let cardTitle = $(".card-title");
let getSquatBtn = $("#get-squat");
let squatTitle = $("#squat-title");
let squatTargetP = $("#squat-target");
let squatPic = $("#squat-pic");

function getSquat() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/barbell?limit=9999',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df47c31867msh60f3c7642a0255ap198f31jsn892571c15c7b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response[24]);
        let squatTarget = response[24].target;
        let squatName = response[24].name;
        let squatImg = response[24].gifUrl;
        squatTitle.append(squatName);
        squatTargetP.append("Primary target muscle: " + squatTarget);
        squatPic.attr("src", squatImg);

    });  

}

getSquatBtn.on("click", function (event) {
    event.preventDefault;
    getSquat();

});



// {
//     "bodyPart": "upper legs",
//     "equipment": "barbell",
//     "gifUrl": "https://v2.exercisedb.io/image/Au32uD7luHEwzi",
//     "id": "0043",
//     "name": "barbell full squat",
//     "target": "glutes",
//     "secondaryMuscles": [
//         "quadriceps",
//         "hamstrings",
//         "calves",
//         "core"
//     ],
//     "instructions": [
//         "Stand with your feet shoulder-width apart, toes slightly turned out.",
//         "Hold the barbell across your upper back, resting it on your traps or rear delts.",
//         "Engage your core and keep your chest up as you begin to lower your body down.",
//         "Bend at the knees and hips, pushing your hips back and down as if sitting into a chair.",
//         "Lower yourself until your thighs are parallel to the ground or slightly below.",
//         "Keep your knees in line with your toes and your weight in your heels.",
//         "Drive through your heels to stand back up, extending your hips and knees.",
//         "Repeat for the desired number of repetitions."
//     ]
// }