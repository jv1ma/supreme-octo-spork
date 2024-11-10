function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

data = [getCookie('F1'), getCookie('F2'), getCookie('F3'), getCookie('F4'), getCookie('F5'), getCookie('F6'),  getCookie('F7'),
    getCookie('A1'), getCookie('A2'), getCookie('A3'), getCookie('B1'), getCookie('B2'), getCookie('B3')];

const link = document.createElement("a");
const file = new Blob([data.join(',\n')], { type: 'text/plain' });
link.href = URL.createObjectURL(file);
link.download = `${getCookie('testid')}.dat`;
link.click();
URL.revokeObjectURL(link.href);
