class JSCalculator extends HTMLElement {
  constructor() {
    super();

    this.btnClearAC = this.querySelector(".btn-clear-ac");
    this.btnClearC = this.querySelector(".btn-clear-c");

    this.result = this.querySelector(".result");
    this.btnNumbers = this.querySelectorAll(".btn-number");
    this.btnOperations = this.querySelectorAll(".btn-operation");

    this.btnEqual = this.querySelector('.btn-equal');

    this.firstValue = '';
    this.operador = '';

    this.init();
  }

  init() {
    for (let i = 0; i < this.btnNumbers.length; i++) {
        this.btnNumbers[i].addEventListener('click', () => {
        if (this.result.textContent == '0') {
          this.result.innerHTML = '';
        }
        this.result.append(this.btnNumbers[i].textContent);
      })
    }
  
    for (let i = 0; i < this.btnOperations.length; i++) {
      this.btnOperations[i].addEventListener('click', () => {
        if (this.btnOperations[i].textContent == '÷' ) {
          this.operador = '/';
        } else if (this.btnOperations[i].textContent == '×') {
          this.operador = '*';
        } else if (this.btnOperations[i].textContent == '-') {
          this.operador = '-';
        } else if (this.btnOperations[i].textContent == '+') {
          this.operador = '+';
        }
        this.firstValue = parseFloat(this.result.textContent);
        this.result.innerHTML = '';
      })
    }

    this.btnEqual.addEventListener('click', () => {
      if (this.operador == '/' ) {
        this.result.innerHTML = this.firstValue / parseFloat(this.result.textContent);
      } else if (this.operador == '*' ) {
        this.result.innerHTML = this.firstValue * parseFloat(this.result.textContent);
      } else if (this.operador == '-' ) {
        this.result.innerHTML = this.firstValue - parseFloat(this.result.textContent);
      } else if (this.operador == '+' ) {
        this.result.innerHTML = this.firstValue + parseFloat(this.result.textContent);
      }
     })

     this.btnClearC.addEventListener('click', () => {
      this.result.innerHTML = '0';
     })
     
     this.btnClearAC.addEventListener('click', () => {
      this.result.innerHTML = '0';
      this.firstValue = '';
     })
  }
}



customElements.define("js-calculator", JSCalculator);
