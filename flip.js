/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var src = "orc-warrior-256x256.png";

function toggleLogo() {
    var logoEl = document.getElementById("logoImg"),
        tmp = null;
    tmp = logoEl.src;
    logoEl.src = src;
    src = tmp;
}

var extra = document.getElementById("extra");
extra.addEventListener("click", toggleLogo);

