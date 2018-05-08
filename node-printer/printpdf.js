module.exports =function printFileOperation(printFiles){
 
   var pdfFiles=printFiles;
   
   //console.log(pdfFiles.length);
   
   var createFile="";
   createFile+='@echo off \n';
   createFile+='cd \n';
   for(var i=0;i < pdfFiles.length;i++){
	createFile+='SumatraPDF.exe -print-to-default "'+pdfFiles[i]+'" \n';  
 	}
	
   createFile+='exit /b 0 \n';


   createFile+='pause>nul \n';
   
   var fs=require("fs");
   fs.writeFile("printpdffilesumatra.bat",createFile,function(err){
	  if(err){
		  console.log("something going wrong .....");
	  } 
   });	
	
   var child_process = require('child_process');
   
   child_process.exec("printpdffilesumatra.bat", function(error, stdout) {
   if(error){
   	console.log("*************");
   	console.log(error);
   }else{
   	console.log(stdout);
   }
});

};
