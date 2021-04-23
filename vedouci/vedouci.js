// KONSTANTY

const buttonGroupStart = document.getElementById('button-group-start')
const buttonGroupClose = document.getElementById('button-group-close')
const inputGroupName = document.getElementById('input-group-name')

const userCounter = document.getElementById('user-counter')
const userList = document.getElementById('user-list')
const sectionButtonPrevious = document.getElementById('section-button-previous')
const sectionButtonForward = document.getElementById('section-button-forward')
const sectionSelection = document.getElementById('section-selection')
const questionButtonForward = document.getElementById('question-button-forward')
const questionButtonPrevious = document.getElementById('question-button-previous')
const questionSelection = document.getElementById('question-selection')
const questionBody = document.getElementById('question-body')
const questionOptions = document.getElementById('question-options')
const responses = document.getElementById('responses')


// PROMENNE
let groupName, currentSection, currentQuestionGlobal, results


// FUNKCE
function createGroup(params) {
    
}

function closeGroup(params) {
    
}

function sectionUpdate(e) {
    
}

// var val = "Fish";
// var sel = document.getElementById('sel');
// document.getElementById('btn').onclick = function() {
//   var opts = sel.options;
//   for (var opt, j = 0; opt = opts[j]; j++) {
//     if (opt.value == val) {
//       sel.selectedIndex = j;
//       break;
//     }
//   }
// }


function sectionForward() {
    console.log(sectionSelection)
}

function sectionPrevious() {
    
}
sectionButtonForward.addEventListener('click',sectionForward)
sectionButtonPrevious.addEventListener('click',sectionPrevious)



// EVENT LISTENERS