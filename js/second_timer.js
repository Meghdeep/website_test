window.onload = function() 
{
    check();
}

function check()
{   
    var current_date = new Date();
    var end_date = new Date("December 17, 2015 23:00:00");
    time_left = (end_date - current_date);
    //alert( time_left );
    if( time_left <= 0 )
    {
        execute();
    }
    else
    {
        id = setTimeout(check, 1000);
    }
}

function execute()
{
    clearTimeout(id);
    document.getElementById("header1").innerHTML = "Happy Birthday Sreya !!!";
    document.getElementById("header1").className = "header1";
    document.getElementById("header2").innerHTML = "Happy Birthday and Many Happy Returns of the Day ! Have a LEGEND... Wait for it ... DARY 22nd !!! :D";
    
    //document.getElementById("header1").innerHTML = "Happy Birthday Sreya !!!";
}
