var button=document.querySelector("#menu_icon_button");
var menu_contents=document.getElementById("hamburger_menu_contents");
var button_icon=document.getElementById("menu_icon");
function toggleMenu() {
    let left=menu_contents.style.left;
    if(left=="0px")
    {
        button_icon.style.transform="rotate(0deg)";
        menu_contents.style.left="-110%";
    }
    else{
        menu_contents.style.left="0";
        button_icon.style.transform="rotate(90deg)";
    }

}
function closeMenu(){
    button_icon.style.transform="rotate(0deg)";
    menu_contents.style.left="-110%";
}