# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[x ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount /ok
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito /ok
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques /ok

[x ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount /ok
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo /ok
  - Apenas contas com o status true podem fazer empréstimo /ok

[x ] Criar um novo tipo de conta a partir da DioAccount /ok
  - Esta conta não deve receber novos atributos /ok
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final) /ok

[x ] Todos os atributos de qualquer conta devem ser privados /ok

[x ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente /ok

[x ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis. /ok
