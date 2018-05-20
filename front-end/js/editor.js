$(document).ready(function() {
  var toolbar = document.getElementsByClassName('barra-ferramentas')[0],
      btnpencil = toolbar.getElementsByTagName('li')[0],
      btnunder = toolbar.getElementsByTagName('li')[1]
  var commentstatus = false,
      understatus = false;
  btnunder.onclick = function() {
      if (understatus)
        understatus = false;
      else {

        understatus = true;

      }
  }
  var vwimg = document.getElementById('coiso');
  var fclick = true;
  var pos1,pos2;
  vwimg.onclick = function(e) {
    if(understatus) {
      if(fclick) {
          pos1 = [e.layerX, e.layerY]
          fclick = false
      } else {
        pos2 = [e.layerX, e.layerY]
        var div = document.createElement("div")
        div.style.position = 'absolute'
        div.style.marginLeft = pos1[0] - vwimg.offsetLeft + 'px'
        div.style.marginTop = pos1[1] - vwimg.offsetTop + 'px'
        div.style.width = Math.abs(pos2[0] - pos1[0]) + 'px'
        div.style.height = Math.abs(pos2[1] - pos1[1]) + 'px'
        div.style.backgroundColor = "rgba(255,0,0,0.2)"
        document.getElementsByClassName('pdf-barra')[0].appendChild(div)
        fclick = true
      }
    }
  }
})
