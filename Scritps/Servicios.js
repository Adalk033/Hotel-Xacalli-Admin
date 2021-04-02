function archivo(evt) 
{
    var files = evt.target.files; // FileList object
     
      //Obtenemos la imagen del campo "file". 
    for (var i = 0, f; f = files[i]; i++) {         
         //Solo admitimos imágenes.
         if (!f.type.match('image.*')) {
              continue;
         }
     
         var reader = new FileReader();
         
         reader.onload = (function(theFile) {
             return function(e) {
             // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="imagen-pre" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
             };
         })(f);

         reader.readAsDataURL(f);
     }
}
function archivo2(evt) 
{
    var files = evt.target.files; // FileList object
     
      //Obtenemos la imagen del campo "file". 
    for (var i = 0, f; f = files[i]; i++) {         
         //Solo admitimos imágenes.
         if (!f.type.match('image.*')) {
              continue;
         }
     
         var reader = new FileReader();
         
         reader.onload = (function(theFile) {
             return function(e) {
             // Creamos la imagen.
                    document.getElementById("list2").innerHTML = ['<img class="imagen-pre" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
             };
         })(f);

         reader.readAsDataURL(f);
     }
}
function archivo3(evt) 
{
    var files = evt.target.files; // FileList object
     
      //Obtenemos la imagen del campo "file". 
    for (var i = 0, f; f = files[i]; i++) {         
         //Solo admitimos imágenes.
         if (!f.type.match('image.*')) {
              continue;
         }
     
         var reader = new FileReader();
         
         reader.onload = (function(theFile) {
             return function(e) {
             // Creamos la imagen.
                    document.getElementById("list3").innerHTML = ['<img class="imagen-pre" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
             };
         })(f);

         reader.readAsDataURL(f);
     }
}
document.getElementById('files').addEventListener('change', archivo, false);
document.getElementById('files2').addEventListener('change', archivo2, false);
document.getElementById('files3').addEventListener('change', archivo3, false);