console.log("Start of the execution queue");

function myFunction(){
    return new Promise((resolve) => {
        setTimeout(() => {
            for(let i = 1; i <= 100; i++){
                console.log(i);
            }
            console.log("End of the loop printing");
            resolve();
        }, 0);
    });
}

myFunction().then(() => {
    console.log("Final code block to be executed");
});
