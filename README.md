# Filtrar Vagas - Espro
Um script de usuário (userscript) para o Tampermonkey que filtra vagas de emprego no quadro de vagas do Espro. Este script oculta as vagas de emprego que não estão no seu perfil (indicadas por um círculo vermelho) e remove vagas de São Paulo (SP) ou Lauro de Freitas (BA).
## Recursos Principais
* Oculta vagas de emprego marcadas com um círculo vermelho (indicando que não estão no seu perfil).
* Remove vagas de emprego de São Paulo (SP) e Lauro de Freitas (BA).
* Usa uma lista configurável de termos indesejados para filtrar vagas.
* Atualiza automaticamente a filtragem quando o conteúdo da página muda.

## Instalação
1. **Instale um gerenciador de userscripts:** Um gerenciador de userscripts como [Violentmonkey](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) (recomendado).
2. **Instale o script:** Você pode instalar o script diretamente do [Greasy Fork](https://greasyfork.org/en/scripts/525955-filtrar-vagas-espro). Como alternativa, você pode baixar `filtrar-vagas-espro.user.js` e instalá-lo através do seu gerenciador de userscripts.
3. **Acesse o quadro de vagas do Espro:** Vá para o [quadro de vagas do Espro](https://espro-app.taqe.com.br/#!/taqe/tabs/vacancies).
4. **Selecione "Vagas no meu perfil":** Certifique-se de ter selecionado o filtro "Vagas no meu perfil" no site do Espro. O script então filtrará automaticamente as vagas restantes.

## Uso
O script filtra automaticamente as vagas de emprego no quadro de vagas do Espro assim que instalado e a página for carregada. Ele monitora continuamente a página em busca de mudanças, garantindo que novas vagas carregadas também sejam filtradas.

## Configuração
O comportamento de filtragem do script é controlado pela matriz `termosIndesejados` dentro do arquivo `filtrar-vagas-espro.user.js`. Essa matriz contém uma lista de palavras-chave. Se uma vaga de emprego contiver qualquer uma dessas palavras-chave (não diferencia maiúsculas de minúsculas), ela será ocultada ou removida. Você pode modificar essa matriz para personalizar a filtragem conforme suas necessidades. Por exemplo:
```javascript
const termosIndesejados = ["SAO PAULO", "OSASCO", "COTIA", "LAURO DE FREITAS", "SIMOES FILHO", "CLOSER", "CONSULTORA", "TRAINEE", "JUNIOR", "TESTE", "GERENTE", "ANALISTA"];
```
Para alterar o filtro, você precisa editar essa matriz diretamente no userscript.

## Estrutura do Projeto
O projeto consiste nos seguintes arquivos:
* `README.md`: Este arquivo.
* `filtrar-vagas-espro.user.js`: O código principal do userscript.
* `logo.png`: (Possivelmente) um ícone usado pelo script (não incluído no código fornecido).

## Contribuição
Sinta-se à vontade para bifurcar este repositório e enviar pull requests com melhorias ou correções de bugs. Consulte o rastreador de problemas para questões conhecidas e solicitações de recursos.

## Licença
[Licença MIT](https://opensource.org/licenses/MIT) (conforme declarado no userscript)

## Tratamento de Erros e Solução de Problemas
* **Script não funciona:** Certifique-se de que seu gerenciador de userscripts está instalado e habilitado corretamente. Verifique novamente se você instalou o script corretamente. Certifique-se de que a página do Espro foi totalmente carregada antes de esperar que o script funcione.
* **Comportamento inesperado:** Inspecione a matriz `termosIndesejados` para garantir que as palavras-chave sejam apropriadas e reflitam com precisão seus requisitos de filtragem. Se você ainda encontrar problemas, relate-os através do rastreador de problemas.