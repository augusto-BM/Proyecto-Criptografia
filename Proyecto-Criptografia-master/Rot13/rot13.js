let activar = false;

      let espejo = [
        ["A", "N"],
        ["B", "O"],
        ["C", "P"],
        ["D", "Q"],
        ["E", "R"],
        ["F", "S"],
        ["G", "T"],
        ["H", "U"],
        ["I", "V"],
        ["J", "W"],
        ["K", "X"],
        ["L", "Y"],
        ["M", "Z"],
        ["N", "A"],
        ["O", "B"],
        ["P", "C"],
        ["Q", "D"],
        ["R", "E"],
        ["S", "F"],
        ["T", "G"],
        ["U", "H"],
        ["V", "I"],
        ["W", "J"],
        ["X", "K"],
        ["Y", "L"],
        ["Z", "M"], 
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

        valor = (texto.value).trim().toUpperCase().split("");

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
            if (dato[1] == element) {
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