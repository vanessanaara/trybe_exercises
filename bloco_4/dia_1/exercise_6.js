let chessPiece;
chessPiece = "TORRE";

switch (chessPiece.toLowerCase()){
    case "rei":
        console.log("Horizontal, vertical ou diagonal, uma casa de cada vez.");
        break;

    case "rainha":
        console.log("Ao longo da horizontal, vertical ou diagonal, sem pular outras peças.");
        break;

    case "bispo":
        console.log("Ao longo da diagonal, sem pular outras peças.");
        break;

    case "cavalo":
        console.log("Em forma de 'L', único que pode pular outras peças.");
        break;

    case "torre":
        console.log("Ao longo da horizontal ou vertical, sem pular outras peças.");
        break;
    
    case "peão":
        console.log("Uma casa pra frente e captura peças na diagonal, pode avançar duas casas no primeiro movimento.");
        break;
    
    default:
        console.log("Erro! Peça inválida!");
}
