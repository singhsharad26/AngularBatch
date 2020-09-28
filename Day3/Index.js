function write(){
    console.log("external js file");
    
}
//calback function
runContent(function(val){
    console.log("inside js runcontent");
    console.log(val);
})