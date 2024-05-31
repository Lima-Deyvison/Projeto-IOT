alert("Conectado!!!")

var estado = "LIGADA";
function mudar()
{
    var on = document.getElementById("lamp_on");
    var off = document.getElementById("lamp_off");
    if(estado === "LIGADA"){
        on.attributes.removeNamedItem("hidden");
		off.setAttribute("hidden", true);
    }else if(estado === "DESLIGADA"){
        on.setAttribute("hidden", true);
        off.attributes.removeNamedItem("hidden");
    }
    estado = estado == "LIGADA"? "DESLIGADA": "LIGADA";
}
