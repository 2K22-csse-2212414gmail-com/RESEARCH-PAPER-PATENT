let file=document.getElementById("myfiles");
let columns= document.querySelectorAll(".columns");
// event handler on input file type
file.onchange=()=>{
//get all files in directory
for(const key in file.files){
if(file.files.hasOwnProperty(key)){
    const element=file.files[key];
    console.log(element);
    if(element.type=="image/jpeg" || element.type=="image/png"){
        console.log(element.name.webKitRelativePath);
    }
}
}

}