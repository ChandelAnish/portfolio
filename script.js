let prjno=3;
function addproject()
{
    let prj=document.getElementById("name");
    prj.innerHTML=prj.innerHTML+`<div class="projectbox button" id='project${prjno}' onclick="loaddescription('project${prjno}')"><input class="inputproject" type="text" placeholder="project name" onkeypress="enterfun(event,'project${prjno}')"></div>`
    prjno++;
}
function enterfun(event,iddiv)
{
    if(event.key=="Enter")
    {
        document.getElementById(iddiv).innerHTML=document.getElementById(iddiv).firstElementChild.value;
    }
}
function loaddescription(id)
{
    let did=document.getElementById("description");
    let linkid=document.getElementById("link");
    if(id=="project1")
    {
        did.innerHTML=`A simple calculator project created using HTML, CSS, and JavaScript. The project allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The interface consists of a display screen to show input and results, buttons for numbers 0-9, decimal point, and operation symbols (+, -, *, /). The calculator has a simple but intuitive design, with buttons styled using CSS to make them visually appealing. JavaScript handles the logic of the calculator, processing input, performing calculations, and updating the display. This project is a great way to practice fundamental web development skills and understand the relationship between HTML, CSS, and JavaScript.`
        linkid.innerHTML=`Link  : <a href="https://chandelanish.github.io/calculator/">calculator project link</a>`
    }
    else if(id=="project2")
    {
        did.innerHTML=`The To-Do List project is a simple web application built using HTML, CSS, and JavaScript. The HTML file contains the structure of the list, with an input field to add new tasks and a list element to display existing tasks. The CSS file styles the appearance of the list, including fonts, colors, and layout. The JavaScript file adds interactivity to the list, enabling users to add, delete, and mark tasks as complete. It also saves tasks to local storage, so they persist even when the page is refreshed. This project is a great way to practice web development basics and learn about DOM manipulation and local storage.`
        linkid.innerHTML=`Link  : <a href="https://chandelanish.github.io/ToDo-list/">To DO list project link</a>`
    }
    else
    {
        did.innerHTML=`<textarea id="destextarea" cols="120" rows="10" onkeypress="enterfundes(event)"></textarea>`
        linkid.innerHTML=`Link  : &nbsp<input class="inputlink" type="text" onkeypress="enterfunlink(event)">`
    }
}
function enterfundes(event)
{
    if(event.key=="Enter")
    {
        document.getElementById("description").innerHTML=document.getElementById("destextarea").value;
    }
}
function enterfunlink(event)
{
    if(event.key=="Enter")
    {
        let linkid=document.getElementById("link");
        let url=linkid.firstElementChild.value;
        linkid.innerHTML=`Link  : &nbsp<a href="${url}">${url}</a>`;
    }
}