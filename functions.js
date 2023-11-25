var num=0;

function button1() {
    num++;
    document.getElementById("output").innerHTML="Press x"+num;
}
function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style == null){
        page_style= "light.css";
    }
    document.getElementById("page_style").setAttribute("href", page_style)
}


function light_mode()
{
    localStorage.setItem("page_stylesheet_name", "light.css");
    load_style();
    }
function dark_mode()
{
    localStorage.setItem("page_stylesheet_name", "dark.css");
    load_style();
}   
function style_change()
{
if (page_style == "light.css"){
        localStorage.setItem("page_stylesheet_name", "dark.css");
        load_style();

    }else{
        (page_style== "dark.css")
        localStorage.setItem("page_stylesheet_name", "light.css");
        load_style();
    }

}

load_style();

