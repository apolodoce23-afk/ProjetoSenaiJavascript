const form = document.getElementById('duvidasForm');
const show = document.getElementById('show');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede reload automático

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = parseInt(document.getElementById('telefone').value.trim());
    let duvidas = document.getElementById('mensagem').value.trim();

 // verificar se estão vazios
    if (nome === "" || email === "" || mensagem === "" || Number.isNaN(telefone)) {
        event.preventDefault(); // impede envio
        alert("Preencha todos os campos antes de enviar.");
        return; 
    }else{
        show.style.display = "block"; // mostra a mensagem
    }

    console.log(nome, email, telefone, duvidas); // TESTE PARA VER SE NÃO HÁ INSETO, E SE TIVER CONHECERÃO A DORRR!!

    

    // simulação de envio como se tivesse back-end
    setTimeout(() => {
        form.reset(); // limpa tudo
        show.style.display = "none"; // esconde
    }, 9000); // 9 segundos depois
});
