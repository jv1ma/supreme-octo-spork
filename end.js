function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function downloadfile() {
    const link = document.createElement("a");
    const file = new Blob([getCookie('F1'), getCookie('F2'), getCookie('F3'), getCookie('F4'), getCookie('F5'), getCookie('F6'),  getCookie('F7'),
    getCookie('A1'), getCookie('A2'), getCookie('A3'), getCookie('B1'), getCookie('B2'), getCookie('B3')], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${getCookie(F1)}+_+${getCookie('testid')}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
}

downloadfile();
