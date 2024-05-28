function calc() {
    let euro = euroField.value;
    let result = euro * 0.9380;
    usd.value = result.toFixed(2).replace('.','.');
}