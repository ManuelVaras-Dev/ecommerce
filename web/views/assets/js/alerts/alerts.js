/*=============================================
Formatear envío de formulario lado servidor
=============================================*/

function fncFormatInputs() {
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
}

/*=============================================
Alerta Notie
=============================================*/

function fncNotie(type, text) {
  notie.alert({
    type: type,
    text: text,
    time: 10,
  });
}

/*=============================================
Alerta SweetAlert
=============================================*/

function fncSweetAlert(type, text, url) {
  switch (type) {
    case "error":
      if (url == "") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: text,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: text,
        }).then((result) => {
          if (result.value) {
            window.open(url, "_top");
          }
        });
      }

      break;

    case "success":
      if (url == "") {
        Swal.fire({
          icon: "success",
          title: "Correcto",
          text: text,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Correcto",
          text: text,
        }).then((result) => {
          if (result.value) {
            window.open(url, "_top");
          }
        });
      }

      break;

    case "success2":
      Swal.fire({
        position: "center",
        icon: "success",
        title: text,
        showConfirmButton: false,
        timer: 1800,
      });

      break;

    case "success3":
      Swal.fire({
        position: "center",
        icon: "error",
        title: text,
        showConfirmButton: false,
        timer: 1500,
      });

      break;

    case "loading":
      Swal.fire({
        allowOutsideClick: false,
        //icon: 'info',
        imageUrl: "http://ecommerce.com/views/assets/img/template/logo.png",
        imageWidth: 420,
        imageHeight: 200,
        title: text,
      });
      Swal.showLoading();

      break;

    case "confirm":
      return new Promise((resolve) => {
        Swal.fire({
          title: text,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Si, continuar!",
        }).then(function (result) {
          resolve(result.value);
        });
      });
     
    case "close":	  
      Swal.close();

      break;

    case "footer":

			Swal.fire({
				icon: "success",
				title: text,
				confirmButtonText: "¡Continuar comprando!",
				footer: '<a href="'+url+'">Ir al carrito de compras</a>'
			});

		break;
  }
}

/*=============================================
Alerta Toast
=============================================*/

function fncToastr(type, text) {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: type,
    title: text,
  });
}

/*=============================================
Alerta Línea Precarga
=============================================*/

function fncMatPreloader(type) {
  var preloader = new $.materialPreloader({
    position: "top",
    height: "5px",
    col_1: "#159756",
    col_2: "#da4733",
    col_3: "#3b78e7",
    col_4: "#fdba2c",
    fadeIn: 200,
    fadeOut: 200,
  });

  if (type == "on") {
    preloader.on();
  }

  if (type == "off") {
    $(".load-bar-container").remove();
  }
}
