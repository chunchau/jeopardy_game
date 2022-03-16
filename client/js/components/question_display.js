function renderQuizQuestion() {
  document.querySelector('#page').innerHTML = `
    <section class="create-question">
        <form onSubmit="grabQuestion(event)">
            <h2>Question:</h2>
            <p>For: $${state.question.value}</p>
            <p>Category: ${state.question.category.title}</p>
            <p>Unique ID: ${state.question.id}</p>
            <p>Question: ${state.question.question}</p>
            <input type="hidden" name="question" value="${state.question.question.replaceAll('\"', "\'")}">
            <p>Answer: ${state.question.answer}</p>
            <input type="hidden" name="question_answer" class="question_answer" value="${state.question.answer}">
            <input name="user_input" class="user_input"></input><br>
            <button class="answer-btn">Submit</button>
            
      </form>
      <form onSubmit="getQuestion()">
      <button style="visibility:hidden;" class="next-btn" >Next</button>
      </form>
    </section>
    `
}

function grabQuestion(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  console.log(data)
  document.querySelector('.user_input').style.visibility = "hidden"
  document.querySelector('.answer-btn').style.visibility = "hidden"
  document.querySelector('.next-btn').style.visibility = "visible"

  //  check user input
  if (state.question.answer === data.user_input) {
    state.question.user_answer = true
  } else {
    state.question.user_answer = false
  }
  let obj = state.question
  obj.user_id = 0
  axios
    .post('/api/questions', obj)
    .then(res => res.data)

}