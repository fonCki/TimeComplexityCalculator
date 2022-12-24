const screenshotUrl = window.location.hash.substr(1);
console.log('Screenshot URL:', screenshotUrl);
const screenshotImage = document.getElementById('screenshot-image');
screenshotImage.src = screenshotUrl;
