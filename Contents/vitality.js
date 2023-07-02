//===========================================================================
// vitality.js
// Steampunk Widget  1.0.13
// Written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
//===========================================================================

/*property
    appendChild, createDocument, createElement, dockOpen, setAttribute,
    setDockItem
*/

/*jslint multivar */

"use strict";

//=========================================================================
// this function builds vitality for the dock
//=========================================================================
function buildVitality(bg, perc) {
    var d, v, dock_bg, w, x, vit, wName;

    if (!widget.dockOpen) {
        return;
    }

    d = XMLDOM.createDocument();
    v = d.createElement("dock-item");
    v.setAttribute("version", "1.0");
    d.appendChild(v);

    dock_bg = d.createElement("image");
    dock_bg.setAttribute("src", bg);
    dock_bg.setAttribute("hOffset", 0);
    dock_bg.setAttribute("vOffset", 0);
    v.appendChild(dock_bg);

    w = d.createElement("text");
    w.setAttribute("hOffset", "40");
    w.setAttribute("vOffset", "60");
    w.setAttribute("hAlign", "left");
    w.setAttribute("style", "text-align: left;font-family: 'Times New Roman'; font-stretch: condensed; font-size: 18px; color: #ffffff; -kon-shadow: 0px -1px rgba( 0, 0, 0, 0.7 )");

    vit = String(perc) + "%";

    w.setAttribute("data", vit);
    v.appendChild(w);

    x = d.createElement("text");
    x.setAttribute("hOffset", "25");
    x.setAttribute("vOffset", "13");
    x.setAttribute("hAlign", "left");
    x.setAttribute("style", "text-align: left;font-family: 'Times New Roman'; font-stretch: condensed; font-size: 10px; color: #0d0d0d; -kon-shadow: 0px -1px rgba( 0, 0, 0, 0.7 )");

    wName = "CPU";

    x.setAttribute("data", wName);
    v.appendChild(x);

    widget.setDockItem(d, "fade");
}
//=====================
//End function
//=====================
