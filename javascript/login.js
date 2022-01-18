
document.getElementsById("login button").addEventListener("click",Login);

function Login()
{
    inputname = document.getElementByName("username").innerHTML;
    inputpassword = document.getElementByName("password").innerHTML;
    alert(inputname + inputpassword)
    window.open("/HTML/Home.html", "_self")
}
