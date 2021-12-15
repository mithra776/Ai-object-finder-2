object_name = "";
staatus = "";

function setup()
{
    canvas = createCanvas(350 , 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(350 , 350);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("model loaded");
    staatus = true;
}