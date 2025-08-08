const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.hidden = true; // hide initially
showHideBtn.setAttribute('aria-expanded', 'false');

showHideBtn.onclick = function() {
  const isHidden = commentWrapper.hidden;
  commentWrapper.hidden = !isHidden;
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  showHideBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
};

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  if (!nameField.value.trim() || !commentField.value.trim()) {
    alert('Please enter your name and comment.');
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameField.value.trim();
  commentPara.textContent = commentField.value.trim();

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}
