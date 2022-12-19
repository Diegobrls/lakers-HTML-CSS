/*********************************************************************/
/*  Web Historia de los Lakers  - Estilo de landing page             */
/*  CSS de Lakers                                                    */
/*  Autor: Diego Sánchez Briales                                     */
/*  versión 1.0                                                      */
/*********************************************************************/

/* FUNCIÓN PARA BARRA DE NAVEGACIÓN (W3SCHOOLS) ****************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

window.addEventListener('load', function(){
	new Glider(document.querySelector('.lista-jugadores'), {
		slidesToShow: 28,
		slidesToScroll: 4,
		draggable: true,
		dots: '.carousel-indicadores',
		arrows: {
			prev: '.carousel-anterior',
			next: '.carousel-siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			    breakpoint: 450,
			    settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			  // screens greater than >= 1024px
			    breakpoint: 800,
			    settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
			}
		]
	});
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 
