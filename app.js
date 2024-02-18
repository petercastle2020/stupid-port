const sayHello = () => {
  console.log("say Hello clicked.");
};

const getInputValues = () => {
  const espacoInternoValue = document.getElementById("espaco-interno").value;
  const quantidadePortasValue =
    document.getElementById("quantidade-portas").value;
  const quantidadeDivisoriasValue = document.getElementById(
    "quantidade-divisorias"
  ).value;
  const vaoPortasValue = document.getElementById("vao-portas").value;

  //   console.log("Espaço Interno:", espacoInternoValue);
  //   console.log("Quantidade de Portas:", quantidadePortasValue);
  //   console.log("Quantidade de Divisórias:", quantidadeDivisoriasValue);
  //   console.log("Vão entre as Portas:", vaoPortasValue);

  // Convert to centimeters and millimeters
  const convertToCentimetersAndMillimeters = (value) => {
    const centimeters = Math.floor(value);
    const millimeters = Math.round((value - centimeters) * 100);
    return { centimeters, millimeters };
  };

  const espacoInternoConverted =
    convertToCentimetersAndMillimeters(espacoInternoValue);
  const quantidadePortasConverted = convertToCentimetersAndMillimeters(
    quantidadePortasValue
  );
  const quantidadeDivisoriasConverted = convertToCentimetersAndMillimeters(
    quantidadeDivisoriasValue
  );
  const vaoPortasConverted = convertToCentimetersAndMillimeters(vaoPortasValue);

  const calculateDivisionAndShowInfo = (
    espacoInternoConverted,
    quantidadeDivisoriasConverted,
    vaoPortasValue
  ) => {
    const espacoInternoConvertedCentimetro = espacoInternoConverted.centimeters;
    const quantidadePortasConvertedCentimetro =
      quantidadePortasConverted.centimeters;
    const quantidadeDivisoriasConvertedCentrimetro =
      quantidadeDivisoriasConverted.centimeters;
    const vaoPortasConvertedCentrimetro = vaoPortasValue;

    const numberofvaos = quantidadePortasConvertedCentimetro - 1;
    // console.log(
    //   "the number ovaoPortasConvertedCentrimetro : ",
    //   vaoPortasConvertedCentrimetro
    // );
    // console.log("the number of vao is : ", numberofvaos);

    totalSizeAllvaos = numberofvaos * vaoPortasConvertedCentrimetro;

    // here we add  1 cm to both end of the doors, so it will take half of the 1.5mdf on both sides
    // then we take the total size of vaos which is calculated above by " totalSizeAllvaos = numberofvaos * vaoPortasConvertedCentrimetro;"
    const doorTotalArea = espacoInternoConvertedCentimetro + 1;
    // console.log("totalSizeAllVaos", totalSizeAllvaos);
    const newDoorTotalArea = doorTotalArea - totalSizeAllvaos;
    // Calculate doorSize
    const doorSize = newDoorTotalArea / quantidadePortasConvertedCentimetro;
    const singleDoordivisoriaSpace = doorSize - 1;
    const twoDoorDivisoraSpace = doorSize * 2 - 1;
    // console.log("The door size is:", doorSize);
    // console.log("buraco uma porta:", singleDoordivisoriaSpace);
    // console.log("burraco duas porta:", twoDoorDivisoraSpace);

    const newDiv = document.createElement("div");

    // Create a new h2 element
    const doorSizeINFO = document.createElement("h2");
    const singleDoordivisoriaSpaceINFO = document.createElement("h2");
    const twoDoorDivisoraSpaceINFO = document.createElement("h2");
    const vaoPortasConvertedCentrimetroINFO = document.createElement("h2");

    doorSizeINFO.textContent = `Porta Tamanho: ${doorSize}`;
    singleDoordivisoriaSpaceINFO.textContent = `Buraco uma porta: ${singleDoordivisoriaSpace}`;
    twoDoorDivisoraSpaceINFO.textContent = `Burraco duas porta: ${twoDoorDivisoraSpace}`;
    vaoPortasConvertedCentrimetroINFO.textContent = `Vao entre portas medida: ${vaoPortasConvertedCentrimetro}`;

    // Append the new div to the existing div with id "info-div"
    const infoDiv = document.getElementById("info-div");
    infoDiv.appendChild(doorSizeINFO);
    infoDiv.appendChild(singleDoordivisoriaSpaceINFO);
    infoDiv.appendChild(twoDoorDivisoraSpaceINFO);
    infoDiv.appendChild(vaoPortasConvertedCentrimetroINFO);

    // console.log(
    //   "Espaço Interno:",
    //   espacoInternoConverted.centimeters,
    //   "cm",
    //   espacoInternoConverted.millimeters,
    //   "mm"
    // );
    // console.log(
    //   "Quantidade de Portas:",
    //   quantidadePortasConverted.centimeters,
    //   "cm",
    //   quantidadePortasConverted.millimeters,
    //   "mm"
    // );
    // console.log(
    //   "Quantidade de Divisórias:",
    //   quantidadeDivisoriasConverted.centimeters,
    //   "cm",
    //   quantidadeDivisoriasConverted.millimeters,
    //   "mm"
    // );
    // console.log(
    //   "Vão entre as Portas:",
    //   vaoPortasConverted.centimeters,
    //   "cm",
    //   vaoPortasConverted.millimeters,
    //   "mm"
    // );
  };

  calculateDivisionAndShowInfo(
    espacoInternoConverted,
    quantidadeDivisoriasConverted,
    vaoPortasValue
  );
};

document.querySelector("button").addEventListener("click", getInputValues);
