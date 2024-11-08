const cat = {
    color: "white",
    habit: function(name){
        console.log(`${name}'s device`, this);
    },
}
console.log(this);
cat.habit("linlin");
