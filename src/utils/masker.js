export function unmaskCellphone(cellphone) {
    let unmasked = '';
    for (let i = 0; i < cellphone.length; i++) {
        const c = cellphone[i];
        if (c >= '0' && c <= '9') {
            unmasked += c;
        }
    }
    return unmasked;
}