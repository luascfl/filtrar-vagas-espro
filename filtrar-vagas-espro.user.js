// ==UserScript==
// @name         Filtrar Vagas - Espro
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Oculta vagas que não estão no seu perfil (com círculo vermelho) e remove vagas de São Paulo (SP) ou Lauro de Freitas (BA).
// @author       luascfl
// @match        https://espro-app.taqe.com.br/#!/taqe/tabs/vacancies
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Função para verificar se a vaga é de São Paulo (SP) ou Lauro de Freitas (BA)
    function isVagaIndesejada(textoVaga) {
        const cidadesIndesejadas = ["SAO PAULO", "OSASCO", "COTIA", "LAURO DE FREITAS"];
        return cidadesIndesejadas.some(cidade => textoVaga.toUpperCase().includes(cidade));
    }

    // Função para ocultar vagas com círculo vermelho e remover vagas indesejadas
    function filtrarVagas() {
        // Seleciona todos os elementos 'ion-item' que representam as vagas
        const vagas = document.querySelectorAll('ion-item.vacancy-card');

        // Percorre cada vaga
        vagas.forEach(vaga => {
            // Verifica se a vaga tem um círculo vermelho
            const circuloVermelho = vaga.querySelector('path[style*="stroke: rgb(255, 0, 74)"]');
            if (circuloVermelho) {
                vaga.style.display = 'none'; // Oculta a vaga
                return; // Passa para a próxima vaga
            }

            // Verifica o texto da vaga para identificar São Paulo (SP) ou Lauro de Freitas (BA)
            const textoVaga = vaga.querySelector('p.text-green-light')?.textContent || '';
            if (isVagaIndesejada(textoVaga)) {
                vaga.remove(); // Remove a vaga do DOM
            }
        });
    }

    // Executa a função imediatamente após o carregamento da página
    filtrarVagas();

    // Observa mudanças no DOM para garantir que as vagas sejam filtradas mesmo que carreguem dinamicamente
    const observer = new MutationObserver(filtrarVagas);
    observer.observe(document.body, { childList: true, subtree: true });
})();