// function addComment() {
//   var commentDiv = document.getElementById('comments');
//   commentDiv.innerHTML = '<div><p>This research is bold and important!</p><p>I wish to join your team</p></div><div><p>posted by: <span>I swear I am not a woodchuck</span></p></div>';
// } 

function addComment(){
  event.preventDefault()
  // let bodyText = document.getElementById('commentText').value
  // let commenter = document.getElementById('commenterName').value
  let bodyText = event.srcElement.commentText.value 
  let commenter = event.srcElement.commenterName.value 
  let commentBody = createCommentBody(bodyText)
  let commenterLabel = createCommenterLabel(commenter)
  postNewComment(commentBody, commenterLabel)
}

function createCommentBody(comment){
  let bodyDiv = document.createElement('div')
  let bodyPara = document.createElement('p')
  bodyPara.innerHTML = comment 
  bodyDiv.appendChild(bodyPara)
  return bodyDiv
}

function createCommenterLabel(commenter){
  let commenterDiv = document.createElement('div')
  let commenterLabel = document.createElement('p')
    commenterLabel.innerHTML = "posted by:@"
  let commenterName = document.createElement('span')
    commenterName.innerHTML = commenter
    commenterLabel.appendChild(commenterName)
    commenterDiv.appendChild(commenterLabel)
    return commenterDiv
}

function postNewComment(body, commenter){
  let commentsDiv = document.getElementById('comments')
  let newCommentDiv = document.createElement('div')
  newCommentDiv.appendChild(body)
  newCommentDiv.appendChild(commenter)
  commentsDiv.appendChild(newCommentDiv)
}