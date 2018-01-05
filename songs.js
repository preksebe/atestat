function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavv() {
    document.getElementById("mySidenavv").style.width = "250px";
}

function closeNavv() {
    document.getElementById("mySidenavv").style.width = "0";
}

function splitNotes(notes, chunkSize){    
    var chunks = [];
    for (var i = 0; i < notes.length; i += chunkSize) {
        chunks.push(notes.slice(i, i + chunkSize));
    }
    return chunks;
}

window.onload = function () {
    var url = new URL(window.location);
    var songId = url.searchParams.get("songId");

    if (songs[songId] === undefined) {
        alert("You shall not pass (cuz I don't know this song)!!");
        $("#songTitle").text("Unknown song");
        return;
    }

    var song = songs[songId];

    $("#songTitle").text(song.title);
    $("#audioSource").attr("src", song.audioSource);
    $("#songPlayer")[0].load();

    // Create an SVG renderer and attach it to the DIV element named "boo".
    var div = document.getElementById("boo")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(1100, 500);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a tab stave of width 400 at position 10, 40 on the canvas.
    var chunkSize = 15;
    var noteRows = splitNotes(song.notes, chunkSize) 


    noteRows.forEach(function (notes, index) {
        var stave = new VF.TabStave(10, index * 150 + 40, 1000);
        stave.setContext(context).draw();
        VF.Formatter.FormatAndDraw(context, stave, notes);      
    }, this);
}