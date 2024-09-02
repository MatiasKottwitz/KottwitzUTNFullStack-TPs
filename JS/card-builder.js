document
.getElementById("form-card")
.addEventListener("submit",function(e){
    e.preventDefault();

    //obtencion de datos.
    const title = document.getElementById("titutlo-card").value;
    const valor = document.getElementById("imagen-card").value;
    const cant = document.getElementById("cantidad-card").value;
    const descript = document.getElementById("descripcion-card").value;
    const br_color = document.getElementById("color-borde-card").value;
    const bg_color = document.getElementById("color-fondo-card").value;

    function obtenerImagen(valor){
        let img = "";
        const productos ={
            0:"../images/capuchino.png",
            1:"../images/cafe-frio-helado.png",
            2:"../images/leche-caliente.png",
            3:"../images/mocacino.png",
            4:"../images/waffle-helado.png",
            5:"../images/sandwich.png"
        }
        // console.log(dir,img);
        return productos[valor];
    }

    
    
    const image = obtenerImagen(valor);

    //Crear Tarjeta
    const cardContainer = document.getElementById("card-container");
    const nuevaCard = document.createElement("div");
    nuevaCard.className = "card";
    nuevaCard.style.backgroundColor = bg_color;
    nuevaCard.style.borderColor = br_color;

    nuevaCard.innerHTML = `
        <img src="${image}" alt="Descripción de la imagen 1" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${title}</h3>
                <p class="card-text">${descript}</p>
            </div>
            <div class="card-quantity">
                <span class="quantity-label">Cantidad:</span>
                <span class="quantity-value">${cant}</span>
            </div>
    `;

    cardContainer.appendChild(nuevaCard);


    console.log({
        titulo: title,
        image:image,
        cantidad:cant,
        descripcion:descript,
        borde: br_color,
        fondo:bg_color
    });
    document.getElementById("form-card").reset();
});
