var s="";
var c=1;
const random=Math.floor(Math.random() *100);
document.getElementById("ch").onclick = function(){
    var a=parseInt(document.getElementById("chk").value);
{
     if(a>random)
            {
            s="Try lesser numbers";
            c=c+1;
            document.getElementById("check").textContent = s;
        }
        else if(a<random)
        {
           
            s="Try Greater numbers";
            c=c+1;
            document.getElementById("check").textContent = s;
        }
        else if(a==random){
       
            s= "Congratulation's, You Guessed it correctly in"+c+" try.";
           
            document.getElementById("check").textContent = s;
            
        }

    }

}

