$(function() {
// キャンバスのサイズをCSSで指定
  var w = $('.canvas__wrapper').width();
  var h = $('.canvas__wrapper').height();
  $('#canvas').attr('width', w);
  $('#canvas').attr('height', h);

// トップページサンプルキャンバスのサイズをCSSで指定
  var sw = $('.s-canvas__wrapper').width();
  var sh = $('.s-canvas__wrapper').height();
  $('#canvas').attr('width', sw);
  $('#canvas').attr('height', sh);

// 選択要素が一番上に来るのを防ぐ
  var canvas = new fabric.Canvas('canvas', {
    preserveObjectStacking: true
  });

// テキスト入力
  $("#addtext__button").on("click",function(){
    var color = document.getElementById('canvas-text-color').value;
    var stroke_color = document.getElementById('text-stroke-color').value;
    canvas.add(new fabric.IText('テキスト', {
          left: 50,
          top: 100,
          fontFamily: 'arial black',
          fill: color,
          stroke: stroke_color,
          strokeWidth: 2,
          fontSize: 50,
    }));
  });

// 画像ファイル選択
  // document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('file').addEventListener("change", function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function (img) {
        var oImg = img.set({left: 0, top: 0, angle: 0}).scale(0.3);
        canvas.add(oImg).renderAll();
        var a = canvas.setActiveObject(oImg);
        var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
      });
    };
    reader.readAsDataURL(file);
  });
  // }, false);

// ダウンロードボタン
  $("#b").on("click",function(){
    $("#canvas").get(0).toBlob(function(blob){
      saveAs(blob, "PokeArt.png");
    });
  });

});
