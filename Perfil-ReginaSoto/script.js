/*
    Seleccionamos todos los botones
    que pertenecen a las pestañas.
*/

const tabs = document.querySelectorAll(".tab");


/*
    Seleccionamos todas las secciones
    que contienen la información.
*/

const sections = document.querySelectorAll(".tab-content");

/* Recorremos cada botón. */

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        const sectionId = tab.dataset.section;
        tabs.forEach(item => {

            item.classList.remove("active");

        });
         tab.classList.add("active");

         sections.forEach(section => { 
            section.classList.remove("active");

        });

        const selectedSection =
            document.getElementById(sectionId);

                  if (selectedSection) {
                    selectedSection.classList.add("active");

        }

    });

});