// Setting starting scores in javascript memory to 0
let teamOneScore = 0
let teamTwoScore = 0

const updateTeamOneName = () => {
  console.log('Update Team 1 Name')
  // Get the value of the input box
  const teamOneName = document.querySelector('.team-1-input').value
  // Update the HTML
  document.querySelector('.team-1-name').textContent = teamOneName
  document.querySelector('.team-1-table-name').textContent = teamOneName
  // Clear out the input field
  document.querySelector('.team-1-input').value = ''
}

// Setting Team One Score Text to 0 from 10
const teamOneScoreText = document.querySelector('.team-1-score')
teamOneScoreText.textContent = teamOneScore

// setting team two score text to 0 from 10
const teamTwoScoreText = document.querySelector('.team-2-score')
teamTwoScoreText.textContent = teamTwoScore

// creating a function to add 1 to the score and returning new score value
const teamOneAddOne = () => {
  teamOneScore += 1
  teamOneScoreText.textContent = teamOneScore
  if (teamOneScore > 7) {
    teamOneScoreText.style.color = 'yellow'
  }
  if (teamOneScore === 10) {
    scoreReachesTen()
  }
}

const teamTwoAddOne = () => {
  teamTwoScore += 1
  teamTwoScoreText.textContent = teamTwoScore
  if (teamTwoScore === 10) {
    teamTwoScoreReachesTen()
    gameOver()
  }
}

// creating a function to subtract 1 to the score and returning new score value
const teamOneSubtractOne = () => {
  teamOneScore -= 1
  teamOneScoreText.textContent = teamOneScore
}

const teamTwoSubtractOne = () => {
  teamTwoScore -= 1
  console.log(teamTwoScore)
  console.log('subtract 1')
  teamTwoScoreText.textContent = teamTwoScore
}

// when team one score reaches 10 make the score red
const scoreReachesTen = () => {
  console.log('score equals 10')
  teamOneScoreText.style.color = 'red'
}

// a different way to write a function where when team two score equals 10 it turns blue
function teamTwoScoreReachesTen () {
  console.log('team two equals 10')
  teamTwoScoreText.style.color = 'blue'
}

const gameOver = () => {
  console.log(teamOneScore)
  if (teamOneScore === 10) {
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.winner-message').textContent = document.querySelector('.team-1-name').textContent + ' ' + 'wins!!'
  } else if (teamTwoScore === 10) {
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-name').textContent = document.querySelector('.team-2-name').textContent + ' ' + 'win!!'
  }
}

// creating main function that is called when script tag loads
const main = () => {
  // telling team 1 add 1 button to listen for a click and run function: teamOneAddOne
  document.querySelector('button.team-1-add-1-button').addEventListener('click', teamOneAddOne)

  // telling team 1 subtract 1 button to listen for click and run function: teamOneSubtractOne
  document.querySelector('button.team-1-subtract-1-button').addEventListener('click', teamOneSubtractOne)

  // telling team 2 add 1 button to listen for click and run function: teamTwoAddOne
  document.querySelector('.team-2-add-1-button').addEventListener('click', teamTwoAddOne)

  // telling team 2 subtract 1 button to listen for click and run function: teamTWoSubtractOne
  document.querySelector('.team-2-subtract-1-button').addEventListener('click', teamTwoSubtractOne)

  document.querySelector('.update-team-1-name').addEventListener('click', updateTeamOneName)
}

// telling the whole document to listen for the DOM's content to load and then run main function
document.addEventListener('DOMContentLoaded', main)
