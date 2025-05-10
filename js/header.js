function LoadSidebar(){
    const sidebar_html=`
        <ul>
            <li><a href="index.html">
                <i class="fa-solid fa-house"></i>
                <span>Inicio</span>
            </a></li>

            <li><a href="model.html">
                <i class="fa-solid fa-diagram-project"></i>
                <span>Modelo</span>
            </a></li>

            <li><a href="service.html">
                <i class="fa-solid fa-gears"></i>
                <span>Service</span>
            </a></li>

            <li><a href="table.html">
                <i class="fa-solid fa-table"></i>
                <span>Tabla</span>
            </a></li>

            <li><a href="form.html">
                <i class="fa-brands fa-wpforms"></i>
                <span>Formulario</span>
            </a></li>

            <li><a href="delete.html">
                <i class="fa-solid fa-trash"></i>
                <span>Eliminar</span>
            </a></li>

            <li><a href="segurity.html">
                <i class="fa-solid fa-shield-halved"></i>
                <span>Segurity</span>
            </a></li>
        </ul>
    `;
    document.querySelector(".sidebar").innerHTML=sidebar_html
}

LoadSidebar()