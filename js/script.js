// Tugas Mini Coding Project
// RevoU Software Engineer
// Nama: Beni Krisbiantoro

function isNumber(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
}

function hitung_luas() {
    var sisi = document.getElementById("sisi_luas").value;

    if (isNumber(sisi)) {
        var luas = sisi * sisi;
        var teks_hasil = "";
        teks_hasil = "L = S x S <br>" + "L = " + sisi + " x " + sisi + " <br>" + "L = " + luas;
        document.getElementById("hasil_text_luas").innerHTML = teks_hasil;
    }else {
        alert("Nilai sisi yang dimasukkan harus berupa angka !");
    }
}


function hitung_keliling() {
    var sisi = document.getElementById("sisi_keliling").value;

    if (isNumber(sisi)) {
        var keliling = 4 * sisi;
        var teks_hasil = "";
        teks_hasil = "K = 4 x S <br>" + "K = 4 " + " x " + sisi + " <br>" + "K = " + keliling;
        document.getElementById("hasil_text_keliling").innerHTML = teks_hasil;
    }else{
        alert("Nilai sisi yang dimasukkan harus berupa angka !");
    }
}


function reset_form_luas() {
    document.getElementById("sisi_luas").value = "";
    document.getElementById("hasil_text_luas").innerHTML = "";
}

function reset_form_keliling() {
    document.getElementById("sisi_keliling").value = "";
    document.getElementById("hasil_text_keliling").innerHTML = "";
}

function setup_awal() {
    // hide box keliling
    document.getElementById("box-keliling").style.display = "none";

}

function view_form_luas() {
     // hide box keliling
     document.getElementById("box-keliling").style.display = "none";
     
     //show box luas
     document.getElementById("box-luas").style.display = "block";
}

function view_form_keliling() {
    // hide box luas
    document.getElementById("box-luas").style.display = "none";

    // show box keliling
    document.getElementById("box-keliling").style.display = "block";
}