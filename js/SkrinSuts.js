$('#skrins').click(function(){
	html2canvas(document.body, {
  onrendered: function(canvas){
	var img = canvas.toDataURL();
	window.open(img);
  }
})});