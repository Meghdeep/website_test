window.onload = function() 
{
    alert("hi");
    document.getElementById("Content").innerHTML = "
    setTimeout(check,3000);
}

function check()
{   
    alert("hi");
    document.getElementById("Content").innerHTML = "";
}

function execute()
{
    clearTimeout(id);
    document.getElementById("header1").innerHTML = "Happy Birthday Sreya !!!";
    document.getElementById("header1").className = "header1";
    document.getElementById("header2").innerHTML = "Happy Birthday and Many Happy Returns of the Day ! Have a LEGEND... Wait for it ... DARY 22nd !!! :D";
    
    //document.getElementById("header1").innerHTML = "Happy Birthday Sreya !!!";
}
