var form = document.getElementById("formulario");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add('enviado')
        status.innerHTML = "Dados enviados! Aguarde nosso contato";
        form.reset()
      }).catch(error => {
        status.classList.add('erro')
        status.innerHTML = "Erro."
      });
    }
    form.addEventListener("submit", handleSubmit)