function VideoLoadError()
{
    var videos = document.querySelectorAll('.HeroSearch_Media--Video');
    var images = document.querySelectorAll('.HeroSearch_Media--ImageDesktop');
    // For loop SHOULD be safe since there should always be the same number of elements.
    for(var i = 0; i < videos.length; ++i)
    {
        var video = videos[i];
        var image = images[i];
        video.style.display = "none";
        image.style.display = "block";
    }
}