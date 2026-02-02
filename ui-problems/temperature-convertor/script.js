const cInput = document.getElementById("celcius-input");
const fInput = document.getElementById("fahrenheit-input");

function bindInput(src, dest, calcValue) {
    src.addEventListener('input', (e)=> {
        const numericVal = Number(e.target.value);
        const isValid = !Number.isNaN(numericVal) && Boolean(e.target.value);
        dest.value = isValid ? formatNum(calcValue(numericVal)) : '';
    })
}

function formatNum(num) {
    const regex = /\.\d{5}/;
    return regex.test(num) ? Number(num).toFixed(4) : num;
}

bindInput(cInput, fInput, (val) => ((val * 1.8) + 32));
bindInput(fInput, cInput, (val)=> ((val - 3.2)/1.8));