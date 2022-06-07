function Calculator() {

    this.display = document.querySelector('.display');

    this.start = () => {
        this.buttonsClicked();
        this.keyEnter();
    };

    this.keyEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.doMath();
            }
        });
    }

    this.buttonsClicked = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('button-num')) this.showInScreen(el.innerText);
            if (el.classList.contains('button-clear')) this.clear();
            if (el.classList.contains('button-del')) this.delete();
            if (el.classList.contains('button-eq')) this.doMath();
        });
    }

    this.showInScreen = (value) => {
        this.display.value += value;
        this.display.focus();
    }

    this.clear = () => {
        this.display.value = '';
    }

    this.delete = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.doMath = () => {

        try {
            const value = eval(this.display.value);

            if (!value) {
                this.display.value = 'Invalid';
                return;
            }

            this.display.value = String(value);

        } catch (e) {
            this.display.value = 'Invalid';
            return;
        }
    }
}

const calculator = new Calculator();
calculator.start();








