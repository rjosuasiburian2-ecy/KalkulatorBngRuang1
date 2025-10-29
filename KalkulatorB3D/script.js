function showForm() {
    const shape = document.getElementById('shape').value;
    const formContainer = document.getElementById('form-container');
    const result = document.getElementById('result');
    result.innerHTML = '';
    let html = '';
switch (shape) {
    case 'kubus':
        html = `
            <label> Masukkan sisi: </label>
            <input type="number" id="sisi" />
            <button onclick="hitungKubus()"> Hitung Volume Kubus </button>`;
        break;
    case 'balok':
        html = `
            <label> Masukkan Panjang Balok: </label><input type="number" id="panjang" />
            <label> Masukkan lebar Balok: </label><input type="number" id="lebar" />
            <label> Masukkan tinggi Balok: </label><input type="number" id="tinggi" />
            <button onclick="hitungBalok()"> Hitung Volume Balok </button>`;
        break;
    case 'bola':
        html = `
            <label> Input jari-jari Bola: </label><input type="number" id="jariJari" />
            <button onclick="hitungBola()"> Hitung Volume Bola </button>`;
        break;
    case 'tabung':
        html = `
            <label> Input jari-jari Tabung: </label><input type="number" id="jariJariTabung" />
            <label> Input tinggi Tabung: </label><input type="number" id="tinggiTabung" />
            <button onclick="hitungTabung()"> Hitung Volume Tabung </button>`;
        break;
    case 'kerucut':
        html = `
            <label> Input jari-jari Kerucut: </label><input type="number" id="jariJariKerucut" />
            <label> Input tinggi Kerucut: </label><input type="number" id="tinggiKerucut" />
            <label> Input Selimut Kerucut: </label><input type="number" id="selimutKerucut" />
            <button onclick="hitungKerucut()"> Hitung Volume Kerucut </button>`;
        break;
    case 'limas':
        html = `
            <label> Input luas alas Limas(persegi): </label><input type="number" id="alasLimas" />
            <label> Input tinggi Limas: </label><input type="number" id="tinggiLimas" />
            <button onclick="hitungLimas()"> Hitung Volume Limas </button>`;
        break;
    case 'limas3': 
        html = `
            <label> Input luas alas Limas Segitiga: </label><input type="number" id="alasLimas3" />
            <label> Input tinggi Limas Segitiga: </label><input type="number" id="tinggiLimas3" />
            <button onclick="hitungLimas3()"> Hitung Volume Limas Segitiga </button>`;
        break;
    case 'prisma':
        html = `
            <label> Input luas alas Prisma: </label><input type="number" id="alasPrisma" />
            <label> Input tinggi Segitiga Prisma: </label><input type="number" id="tinggiSegitiga" />
            <label> Input tinggi Prisma: </label><input type="number" id="tinggiPrisma" />
            <button onclick="hitungPrisma()"> Hitung Volume Prisma </button>`;
        break;
    }
    formContainer.innerHTML = html;
}

function tampilkanHasil(volume, luas) {
    const result = document.getElementById('result');
    result.innerHTML = `
        <div clss="card">
            <h3>Hasil Perhitungan:</h3>
            <p>Volume: ${volume.toFixed(2)}</p>
            <p>Luas Permukaan: ${luas.toFixed(2)}</p>
        </div>`;
        result.classList.add('fade-in');
}

function hitungKubus() {
    const s = parseFloat(document.getElementById("sisi").value);
    const volume = s ** 3;
    const luas = 6 * s ** 2;
    tampilkanHasil(volume, luas);
  }
  
  function hitungBalok() {
    const p = parseFloat(document.getElementById("panjang").value);
    const l = parseFloat(document.getElementById("lebar").value);
    const t = parseFloat(document.getElementById("tinggi").value);
    const volume = p * l * t;
    const luas = 2 * (p * l + p * t + l * t);
    tampilkanHasil(volume, luas);
  }
  
function hitungBola() {
    const r = parseFloat(document.getElementById("jariJari").value);
    const volume = (4 / 3) * Math.PI * r ** 3;
    const luas = 4 * Math.PI * r ** 2;
    tampilkanHasil(volume, luas);
  }
  
function hitungTabung() {
    const r = parseFloat(document.getElementById("jariJariTabung").value);
    const t = parseFloat(document.getElementById("tinggiTabung").value);
    const volume = Math.PI * r ** 2 * t;
    const luas = 2 * Math.PI * r * (r + t);
    tampilkanHasil(volume, luas);
  }
  
function hitungKerucut() {
    const r = parseFloat(document.getElementById("jariJariKerucut").value);
    const s = parseFloat(document.getElementById("selimutKerucut").value);
    const t = parseFloat(document.getElementById("tinggiKerucut").value);
    const volume = (1 / 3) * Math.PI * r ** 2 * t;
    const luas = Math.PI * r * (r + s);
    tampilkanHasil(volume, luas);
  }
  
function hitungLimas() {
    const a = parseFloat(document.getElementById("alasLimas").value);
    const t = parseFloat(document.getElementById("tinggiLimas").value);
    const volume = (1 / 3) * a ** 2 * t;
    const luas = a ** 2 + 2 * a * Math.sqrt((a / 2) ** 2 + t ** 2);
    tampilkanHasil(volume, luas);
  }

  function hitungPrisma() {
    const a = parseFloat(document.getElementById("alasPrisma").value);
    const ts = parseFloat(document.getElementById("tinggiSegitiga").value);
    const tp = parseFloat(document.getElementById("tinggiPrisma").value);
    const luasAlas = 0.5 * a * ts;
    const volume = luasAlas * tp;
    const luas = 2 * luasAlas + 3 * a * tp;
    tampilkanHasil(volume, luas);
  }

  function hitungLimas3() {
    const a = parseFloat(document.getElementById("alasLimas3").value);
    const t = parseFloat(document.getElementById("tinggiLimas3").value);
    const volume = (1 / 3) * a * t;
    const luas = a + 3 * (0.5 * Math.sqrt((a ** 2) + (4 * t ** 2)));
    tampilkanHasil(volume, luas);
  }
  

