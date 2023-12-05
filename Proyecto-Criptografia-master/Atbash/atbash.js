let activar = false;

      let espejo = [
        ["A", "Z"],
        ["B", "Y"],
        ["C", "X"],
        ["D", "W"],
        ["E", "V"],
        ["F", "U"],
        ["G", "T"],
        ["H", "S"],
        ["I", "R"],
        ["J", "Q"],
        ["K", "P"],
        ["L", "O"],
        ["M", "N"],
        ["N", "M"],
        ["O", "L"],
        ["P", "K"],
        ["Q", "J"],
        ["R", "I"],
        ["S", "H"],
        ["T", "G"],
        ["U", "F"],
        ["V", "E"],
        ["W", "D"],
        ["X", "C"],
        ["Y", "B"],
        ["Z", "A"],
      ];

      let text_encode = [];
      let valor = "";

      const encriptar = () => {
        let texto = document.querySelector("#texto");

        if (texto.value.length == 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Input Vacio!",
          });
          return;
        }

        text_encode = [];

        valor = texto.value.toUpperCase().split("");

        valor.forEach((element) => {
          for (valor of espejo) {
            if (valor[0] == element) {
              text_encode.push(valor[1]);
            }
          }
        });
        console.log("ecn");
        Swal.fire({
          icon: "success",
          title: "Encriptado",
          text: `${JSON.stringify(text_encode)}`,
        });
        console.log(text_encode);
      };

      const descencriptar = () => {

        let texto = document.querySelector("#texto");

        let text_decode = [];
        
        if (texto.value.length == 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Input Vacio!",
          });
          return;
        }

        let nuevo = texto.value.toUpperCase().split("");

        nuevo.forEach((element) => {
          for (dato of espejo) {
            if (dato[0] == element) {
              text_decode.push(dato[0]);
            }
          }
        });

        Swal.fire({
          icon: "success",
          title: "Descencriptado",
          text: `${JSON.stringify(text_decode)}`,
        });
        text_encode = [];
      };