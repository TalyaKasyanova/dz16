$(document).ready(function(){
  $("#image-upload").on("change",function(){
    var $input = $(this),
        reader = new FileReader(); 
    reader.onload = function(){
      $("#image").attr("src", reader.result);
    } 
    reader.readAsDataURL($input[0].files[0]);
  });

  $("#upload-btn").on("click",function(){

    alert("Image dowload...");
  });

  $("#cancel-btn").on("click",function(){
    $('#image-upload').val("");
    $('#image').attr("src","");
  });
});