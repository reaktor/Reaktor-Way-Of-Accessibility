const toggleButtons = document.getElementsByClassName("exercise-section-toggle")

const instructionsToggleButton = toggleButtons[0]
const instructions = document.getElementById("instruction-text")

const studyMaterialToggleButton = toggleButtons[1]
const studyMaterial = document.getElementById("study-material-text")

const exerciseToggleButton = toggleButtons[2]
const exerciseIntroductionText = document.getElementById("exercise-introduction-text")
const exercisePage = document.getElementById("exercise-webpage")

instructionsToggleButton.onclick = () => {
  if (instructionsToggleButton.innerHTML === '+') {
    instructionsToggleButton.innerHTML = '-'
    instructions.style.maxHeight = '5000px'
  } else {
    instructionsToggleButton.innerHTML = '+'
    instructions.style.maxHeight = '0'
  }
}

studyMaterialToggleButton.onclick = () => {
  if (studyMaterialToggleButton.innerHTML === '+') {
    studyMaterialToggleButton.innerHTML = '-'
    studyMaterial.style.maxHeight = '5000px'
  } else {
    studyMaterialToggleButton.innerHTML = '+'
    studyMaterial.style.maxHeight = '0'
  }
}

exerciseToggleButton.onclick = () => {
  if (exerciseToggleButton.innerHTML === '+') {
    exerciseToggleButton.innerHTML = '-'
    exercisePage.style.maxHeight = '2000px'
    exercisePage.style.border = '1px solid black'
    exerciseIntroductionText.style.maxHeight = '1000px'
  } else {
    exerciseToggleButton.innerHTML = '+'
    exercisePage.style.maxHeight = '0'
    exercisePage.style.border = '0'
    exerciseIntroductionText.style.maxHeight = '0'
  }
}