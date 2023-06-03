// JavaScript code for sharing functionality
function sharePage() {
  var pageTitle = document.title;
  var siteTitle = document.querySelector('.site-title').innerText;
  var shareText = pageTitle + ' | ' + siteTitle;

  navigator.share({
    title: pageTitle,
    text: shareText,
    url: window.location.href
  })
    .then(() => console.log('Shared successfully.'))
    .catch((error) => console.log('Error sharing:', error));
}
