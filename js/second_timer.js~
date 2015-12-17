var id;
window.onload = function() 
{
    check();
}

function check()
{   
    var current_date = new Date();
    var end_date = new Date("December 18, 2015 03:13:00");
    time_left = (end_date - current_date);
    //alert( time_left );
    if( time_left <= 0 )
    {
        execute();
    }
    id = setTimeout(check, 1000);
}

function execute()
{
    clearTimeout(id);
    document.getElementById("header1").innerHTML = "Happy Birthday Sreya !!!";
    document.getElementById("header1").className = "header1";
    document.getElementById("header2").innerHTML = "Happy Birthday and Many Happy Returns of the Day ! Have a LEGEND... Wait for it ... DARY 22nd !!! :D";
    parent = document.getElementById("Content");
    child = document.getElementById("countdown_div");
    
    //<iframe width="1280" align="middle" height="720" src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
    //</iframe> 
    var link = "http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1"    // Put the Link to the Video Here !!!
    var iframe = document.createElement('iframe');
    iframe.frameBorder=0;
    iframe.width="480px";
    iframe.height="360px";
    //iframe.className="centered-thing";
    iframe.id="randomid";
    
    iframe.margin="auto";
    iframe.position="absolute";
    
    iframe.setAttribute("src", link);
    parent.replaceChild(iframe, child);
    iframe.contentWindow.focus();
    //document.getElementById("header1").innerHTML = "Happy Birthday Sreya !!!";
}
