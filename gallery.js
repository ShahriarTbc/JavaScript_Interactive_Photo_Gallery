function upDate(previewPic) {
    // Log to check event trigger and previewPic info
    console.log('Mouse over:', previewPic.alt, previewPic.src);
    // Change the background image and text of the #image div
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url(' + previewPic.src + ')';
    imageDiv.textContent = previewPic.alt;
}

function undo() {
    // Log to check event trigger
    console.log('Mouse out');
    // Reset the background image and text of the #image div
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = 'Hover over an image below to display here.';
}
