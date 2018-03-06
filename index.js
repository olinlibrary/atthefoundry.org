
// Use an external Vimeo API jquery plugin to play/pause/mute/unmute and etc
// Here's the link : https://github.com/jrue/Vimeo-jQuery-API

$(document).ready(function(){
    // initial setup
    // - video autoplay on/off
    // - audio muted/unmuted
    var isVideoAutoplay = true;
    var isAuidoMuted = true;

    if ( isVideoAutoplay === true ){
      $('#vi-video-1-container').attr('data-video-is-playing', true);
      $('#vi-banner-video').vimeo('play');
      $(".video-control.js-video-control").removeClass('paused').addClass('playing');
    }

    else{
      $('#vi-video-1-container').attr('data-video-is-playing', false);
      $('#vi-banner-video').vimeo('pause');
      $('.video-control.js-video-control.paused').addClass("video-control-show");
    }

    if ( isAuidoMuted === true ){
      $('#vi-video-1-container').attr('data-audio-volume', 0);
      $("#vi-banner-video").vimeo("setVolume", 0);
      $(".audio-control.js-audio-control").removeClass('unmuted').addClass('muted');
    }
    else{
      $('#vi-video-1-container').attr('data-audio-volume', 1);
      $("#vi-banner-video").vimeo("setVolume", 1);
    }
  });

  function playVideo() {
      // var videoId = el.data('video');
      // var video = document.getElementById(videoId);
      videoStatus = $("#vi-video-1-container").attr('data-video-is-playing');

      if (videoStatus == 'true') {
          // Pause the video
          console.log('trigger to false');
          $('#vi-banner-video').vimeo('pause');
          $(".video-control.js-video-control").removeClass('playing').addClass('paused');
          $('#vi-video-1-container').attr('data-video-is-playing', false);
          $('.video-control.js-video-control.paused').addClass("video-control-show");
      }
      else if (videoStatus == 'false'){
          // Play the video
          console.log('trigger to true');
          $('#vi-banner-video').vimeo('play');
          $(".video-control.js-video-control").removeClass('paused').addClass('playing');
          $('#vi-video-1-container').attr('data-video-is-playing', true);
          $('.video-control.js-video-control').css('opacity', '');
          $('.video-control.js-video-control.playing').removeClass("video-control-show");
      }
  }
  function muteAudio() {

      audioStatus = $("#vi-video-1-container").attr('data-audio-volume');

      if (audioStatus == 0) {
          // Mute the audio
          $('#vi-video-1-container').attr('data-audio-volume', 1);
          $("#vi-banner-video").vimeo("setVolume", 1);
          $(".audio-control.js-audio-control").removeClass('muted').addClass('unmuted');
      }
      else if (audioStatus == 1){
          // Play the audio
          $('#vi-video-1-container').attr('data-audio-volume', 0);
          $("#vi-banner-video").vimeo("setVolume", 0);
          $(".audio-control.js-audio-control").removeClass('unmuted').addClass('muted');
      }
  }

  $(document).on('click', '.js-video-control', function(e) {
    playVideo($(this));
    e.preventDefault();
  });

  $(document).on('click', '.js-audio-control', function(e) {
    muteAudio($(this));
    e.preventDefault();
  });
