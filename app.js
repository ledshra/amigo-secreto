let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Ingrese un nombre");
        return;
    }
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya fue ingresado");
        input.value = "";
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = 
        `El amigo sorteado es: <strong>${ganador}</strong>`;
    amigos = [];
    actualizarLista();
}
