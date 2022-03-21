const getdata = () => {
    let pok = document.getElementById("pname").value;
    pok = pok.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pok}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log("ND");
        }
        else{
            console.log('here')
            return res.json();
        }
    }).then((data) => {
        if (data) {
            update(data.sprites["front_default"],data.stats,data.weight,data.height,data.types,data.abilities);
        }
    }).catch(error => {
      throw(error);
})
}

/*getdata() */
let s_a= ["PS","ATK","DEF","SPATK","SPDEF","SPEED"]

const update = (img,stats,p,h,t,movs) => {
    document.getElementById("img").src = img;
    for(let i = 0; i <= 5; i++){
        document.getElementById(s_a[i]).height = stats[i]["base_stat"]*1;
    }
    document.getElementById("peso").innerHTML = `PESO: ${p} KG`
    document.getElementById("altura").innerHTML = `ALTURA: ${h*10} CM`
    let text = ""
    for(let i =0; i < t.length; i++){
        text += `${t[i]["type"]["name"]} `;
    }
    console.log(document.getElementById("tipo").innerHHTML);
    console.log(`TIPO: ${text}`)
    document.getElementById("tipo").innerHTML = `TIPO: ${text}`
    
    text = ""
    for(let i = 0; i < movs.length; i++){
        text += `${movs[i].ability.name}<br>`
    }
    document.getElementById("at").innerHTML = text
}

let shown = 0;
const ab = () => {
    if (shown){
        shown = 0;
        console.log("hola");
        document.getElementById("at").style.visibility = 'hidden';
    }
    else{
        shown = 1;
        console.log("adios");
        document.getElementById("at").style.visibility = 'visible';
    }
}