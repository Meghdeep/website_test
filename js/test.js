window.onload = function() 
{
    alert("hi");
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
}
