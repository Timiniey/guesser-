var answer=document.forms[0];
answer.addEventListener("submit",function(e){
        e.preventDefault();
        const guess=answer.querySelector('input[type="number"]').value;
        let secret=5;
        let count=0
        let limit=3;
        while(count<limit){
            count++;
            if(guess==secret){
                document.querySelector("#title").textContent="Correct ";
                document.querySelector("#title").style.color="Green";
                break
            }else{
                document.querySelector("#title").textContent="Wrong";
                document.querySelector("#title").style.color="red";
            }
        }
})
