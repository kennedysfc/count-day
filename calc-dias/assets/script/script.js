function calcularDiferenca() {
      const dataInicial = new Date(document.getElementById('dataInicial').value);
      const dataFinal = new Date(document.getElementById('dataFinal').value);

      const diffEmMS = Math.abs(dataFinal - dataInicial);
      const diffEmDias = Math.ceil(diffEmMS / (1000 * 60 * 60 * 24));

      document.getElementById('resultado').innerText = `A diferença entre as datas é de ${diffEmDias} dias.`;
    }