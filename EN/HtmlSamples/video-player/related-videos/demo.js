$(function () {
            $("#player1").igVideoPlayer({
                sources: [
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.h264.mp4",
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.webmvp8.webm",
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.theora.ogv"
                ],
                width: 720,
                height: 560,
                posterUrl: "http://dev.igniteui.local/15-1/images/samples/video-player/quince-intro-1.png",
                fullscreen: false,
                browserControls: false,
                autohide: true,
                autoplay: false,
                showSeekTime: true,
                title: "Quince Presentation Part 1",
                relatedVideos: [{
                    imageUrl: "http://dev.igniteui.local/15-1/images/samples/video-player/quince-intro-2.png",
                    title: "Quince Presentation Part 1",
                    css: "relatedVideosBanner",
                    sources: [
                        "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.h264.mp4",
                        "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.webmvp8.webm",
                        "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.theora.ogv"
                    ]
                }]
            });
        });