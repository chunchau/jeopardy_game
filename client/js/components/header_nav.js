function renderHeaderNav() {
  document.querySelector('#header-nav').innerHTML = `
      <ul>
        <li class="material-icons quiz-question" onClick="render('quizQuestion')">quiz</li>
        <li class="material-icons all-results" onClick="render('allResults')">query_stats</li>
        <li class="material-icons account" onClick="render('account')">account_circle</li>
        <li class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
        <li class="material-icons login-icon" onClick="render('login')">login</li>
      </ul>
    `
}

renderHeaderNav()

function render(component) {
  if (component === 'quizQuestion') {
    renderQuizQuestion()
  } else if (component === 'signUp') {
    renderSignUp()
  } else if (component === 'login') {
    renderLogin()
  } else if (component === 'account') {
    renderAccountInfo()
  } else if (component === 'allResults') {
    renderAllResults()
  }
}