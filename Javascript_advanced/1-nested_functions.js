let globalVariable = "Welcome";
outer = function (){
    alert(globalVariable)
    let course = "Holberton";
    function inner(){
        alert(globalVariable + " " + course)
    }
    let exclamation = "!";
    function inception(){
        alert(globalVariable + " " + course + " " + exclamation);
    }
    inception();
    inner();
    inner();
}
outer();
outer();
