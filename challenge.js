const counterElement = document.getElementById('counter')
const minusButton = document.getElementById('-')
const plusButton = document.getElementById('+')
const heartButton = document.getElementById('<3')
const pauseButton = document.getElementById('pause')
const commentList = document.getElementById('list')
const submitButton = document.getElementById('submit')
const commentFormBody = document.getElementById('comment-form-body')
const likes = document.querySelector(".likes")

function addLike() {
  counterElement.innerText = parseInt(counterElement.innerText) + 1
}

function subtractLike() {
  if (parseInt(counterElement.innerText) > 0) {
    counterElement.innerText = parseInt(counterElement.innerText) - 1
  }
}

function addComment(commentBody) {
  let comment = document.createElement('p')
  comment.innerText = commentBody
  commentList.appendChild(comment)
}

function likeALike() {
  let numberLiked = counterElement.innerText
  if (document.getElementById(`number-${numberLiked}`)) {
    let listElement = document.getElementById(`number-${numberLiked}`)
    let numberOfLikes = listElement.querySelector('span')
    numberOfLikes.innerText = parseInt(numberOfLikes.innerText) + 1
  } else {
    let li = document.createElement('li')
    li.innerHTML = `${numberLiked} has been liked <span>1</span> time.`
    li.id = `number-${numberLiked}`
    likes.appendChild(li)
  }
}


let likeIncrementer = setInterval(() => { addLike() }, 1000)

plusButton.addEventListener("click", addLike)

minusButton.addEventListener("click", subtractLike)

heartButton.addEventListener("click", likeALike)

submitButton.addEventListener("click", (event) => {
  event.preventDefault()
  addComment(commentFormBody.value)
  commentFormBody.value = ""
})


function runEventListeners() {

  likeIncrementer = setInterval(() => { addLike() }, 1000)

  plusButton.addEventListener("click", addLike)

  minusButton.addEventListener("click", subtractLike)

  heartButton.addEventListener("click", likeALike)

  submitButton.disabled = false

  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    addComment(commentFormBody.value)
    commentFormBody.value = ""
  })

}

function pauseEventListeners () {

  clearInterval(likeIncrementer)

  plusButton.removeEventListener("click", addLike)

  minusButton.removeEventListener("click", subtractLike)

  heartButton.removeEventListener("click", likeALike)

  submitButton.disabled = true

}


pauseButton.addEventListener("click", () => {
  if (pauseButton.innerText === "pause") {
    pauseButton.innerText = "resume"
    pauseEventListeners()
  } else {
    pauseButton.innerText = "pause"
    runEventListeners()
  }
})
