$(document).ready(function () {
    $('.video-element video').mediaelementplayer({

        // When using jQuery's `mediaelementplayer`, an `instance` argument
        // is available in the `success` callback
        success: function (mediaElement, originalNode, instance) {
            console.log('done');
        }
    });
});
