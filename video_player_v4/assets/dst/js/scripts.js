$(document).ready(function () {
    $('.video-element video').mediaelementplayer({
        enableAutosize: true,
        alwaysShowControls: true,

        // When using jQuery's `mediaelementplayer`, an `instance` argument
        // is available in the `success` callback
        success: function (mediaElement, originalNode, instance) {
            console.log('done');
        }
    });

    var textsToHighlight = document.querySelectorAll('.video-caption span');
    var video = document.querySelector("video");

    video.ontimeupdate = function() {
        var currentTime = video.currentTime;
        highlightCaptionText(currentTime, textsToHighlight);
    }
});


function highlightCaptionText(currentTime, textsToHighlight) {
    var textStart;
    var textEnd;
    if (currentTime !== 0) {

        var highlightedText = document.querySelector('.highlightedText');
        if (highlightedText) {
            highlightedText.classList.remove("highlightedText");
        }

        for (var i=0; i < textsToHighlight.length; i++) {

            textStart = textsToHighlight[i].getAttribute('data-start');
            textEnd = textsToHighlight[i].getAttribute('data-end');
            console.log(textStart, textEnd);
            console.log(currentTime);

            if (currentTime > textStart && currentTime < textEnd) {
                textsToHighlight[i].classList.add("highlightedText");
            }
        }
    }
}
