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
window.onload = function () {

VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a tab stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.TabStave(10, 40, 400);
stave.addClef("tab").setContext(context).draw();

var notes = [
    // A single note
    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),


    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }), 
    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),


    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),

    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }), 
    new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
     new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "q"
    }),
];

VF.Formatter.FormatAndDraw(context, stave, notes);
}