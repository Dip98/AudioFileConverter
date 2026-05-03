const conversionComplete = document.getElementById('conversion-complete')
const selectElement = document.getElementById('select-format');
const loadingSymbol = document.getElementById('loader');
const downloadLink = document.getElementById('download-link');
function endConvertFile(){
    loadingSymbol.style.display = "none";
    conversionComplete.style.display = "block";
}
function convertFile(){
    loadingSymbol.style.display = "block";
    console.log(selectElement.value);
    switch(selectElement.value){
    case ".mp3":
        downloadLink.href = 'Output/output.mp3';
    break;
    case ".aac":
        downloadLink.href = 'Output/output.acc';
    break;
    case ".m4a":
        downloadLink.href = 'Output/output.m4a';
    break;
    case ".wav":
        downloadLink.href = 'Output/output.wav';
    break;
    case ".ogg":
        downloadLink.href = 'Output/output.ogg';
    break;
    }
    setTimeout(endConvertFile, 3000);
}