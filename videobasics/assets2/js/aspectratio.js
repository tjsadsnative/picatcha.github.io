document.addEventListener('DOMContentLoaded', function() {
  var aspectWidth = 16,
    aspectHeight = 9;
  
  document.getElementById('aspectWidthInput').value = aspectWidth;
  document.getElementById('aspectHeightInput').value = aspectHeight;
  function updateAspectRatio() {
    document.getElementById('aspectWidthInput').addEventListener('change', function(e) {
      aspectWidth = parseInt(e.target.value),
      aspectHeight = parseInt(document.getElementById('aspectHeightInput').value);
      updateAspectRatioValue();
    });
    document.getElementById('aspectHeightInput').addEventListener('change', function(e) {
      aspectHeight = parseInt(e.target.value),
      aspectWidth = parseInt(document.getElementById('aspectWidthInput').value);
      updateAspectRatioValue();
    });
  }

  function updateAspectRatioValue() {
    $('.sixteen-nine span')[0].innerHTML = aspectWidth + ' X ' + aspectHeight;

    var aspectRatio = 'padding-top : '+((aspectHeight / aspectWidth) * 100)+'%';
    document.styleSheets[0].addRule('.sixteen-nine:before', aspectRatio);
  }

  updateAspectRatio();
});
