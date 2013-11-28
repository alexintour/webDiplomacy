/*   tabs  per l'index di webdiplomacy*/
/* idTabs ~ Sean Catchpole - Version 2.2 - MIT/GPL */


jq(document).ready(function(){
jq('#tabs div').hide();
jq('#tabs div:first').show();
jq('#tabs ul li:first').addClass('active');
jq('#tabs ul li a').click(function(){ 
jq('#tabs ul li').removeClass('active');
jq(this).parent().addClass('active'); 
var currentTab = jq(this).attr('href'); 
jq('#tabs div').hide();
jq(currentTab).show();
return false;
});
});

/* FINE  tabs  per l'index di webdiplomacy */

/* rotazione poster */
 <!-- 
 NumberOfImagesToRotate = 5;
 // Specify the first and last part of the image tag. 
 FirstPart = '<img src="mod/img/posters/ww1-diplomacy-poster';
 LastPart = '.jpg" height="283" width="180" alt="Diplomacy ww1 poster" title=""style="float:right;margin: 10px">';
 function printImage() {
 var r = Math.ceil(Math.random() * NumberOfImagesToRotate);
 document.write(FirstPart + r + LastPart);
 }
 //-->
 /* FINE  rotazione poster */
