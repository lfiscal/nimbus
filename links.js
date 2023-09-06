text = window.frames[0][1].document.getElementById("text-container").innerHTML
function linkit(text) {
  var urlRegex = /(https?:\/\/[^\s)]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  })
}
window.frames[0][1].document.getElementById("text-container").innerHTML = linkit(text);
