// console.log("food ready");
// function getfood(callback){
//     setTimeout(()=>{
//         const food='food'
//         callback(food)
//     },3000)
// }
// function foodready(food){
//     console.log(`food is ready ${food}`);
// }
// getfood(foodready)
// console.log("ready");
setTimeout(()=>{
    document.getElementById("count").innerHTML="<b>10</b>"
    setTimeout(()=>{
        document.getElementById("count").innerHTML="<b>9</b>"
        setTimeout(()=>{
            document.getElementById("count").innerHTML="<b>8</b>"
            setTimeout(()=>{
                document.getElementById("count").innerHTML="<b>7</b>"
                setTimeout(()=>{
                    document.getElementById("count").innerHTML="<b>6</b>"
                    setTimeout(()=>{
                        document.getElementById("count").innerHTML="<b>5</b>"
                        setTimeout(() => {
                            document.getElementById("count").innerHTML="<b>4</b>"
                            setTimeout(()=>{
                                document.getElementById("count").innerHTML="<b>3</b>"
                                setTimeout(()=>{
                                    document.getElementById("count").innerHTML="<b>2</b>";
                                    setTimeout(()=>{
                                        document.getElementById("count").innerHTML="<b>1</b>"
                                        setTimeout(()=>{
                                            document.getElementById("count").innerHTML="<b>Happy Independece Day😍</b>"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000);
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)