 // variabel untuk menyimpan data
var nama = "";
var jumlah = 0;
var pilihan = [];
var dipilih = "";
var email = "";

// tampilkan bagian 1 saat pertama dibuka
document.getElementById("bagian1").style.display = "block";

// fungsi untuk pindah dari bagian "dari" ke bagian "ke"
function pindah(dari, ke) {
  document.getElementById(dari).style.display = "none";
  document.getElementById(ke).style.display = "block";
}

// ---------- Bagian 1 ----------
function ok1() {
  nama = document.getElementById("nama").value.trim();
  jumlah = parseInt(document.getElementById("jumlah").value);

  // cek nama
  if (nama == "") {
    alert("Nama harus diisi!");
    return;
  }
  // cek angka tidak boleh huruf
  if (/[0-9]/.test(nama)) {
    alert("Nama tidak boleh berisi angka!");
    return;
  }

  // cek jumlah pilihan
  if (isNaN(jumlah)) {
    alert("Jumlah pilihan harus diisi dengan angka!");
    return;
  }
  if (jumlah < 1 || jumlah > 10) {
    alert("Jumlah pilihan harus antara 1 sampai 10!");
    return;
  }

  // buat kotak input sebanyak jumlah
  var teks = "";
  for (var i = 1; i <= jumlah; i++) {
    teks += "<p>Pilihan " + i + " : <input type='text' id='pilihan" + i + "'></p>";
  }
  document.getElementById("tempatPilihan").innerHTML = teks;

  pindah("bagian1", "bagian2");
}

// ---------- Bagian 2 ----------
function ok2() {
  pilihan = [];

  for (var i = 1; i <= jumlah; i++) {
    var isi = document.getElementById("pilihan" + i).value.trim();
    if (isi == "") {
      alert("Pilihan " + i + " belum diisi!");
      return;
    }
    pilihan.push(isi);
  }

  // buat radio button
  var teks = "";
  for (var i = 0; i < pilihan.length; i++) {
    teks += "<p><input type='radio' name='pilih' value='" + pilihan[i] + "'> " + pilihan[i] + "</p>";
  }
  document.getElementById("tempatRadio").innerHTML = teks;

  pindah("bagian2", "bagian3");
}

// ---------- Bagian 3 ----------
function ok3() {
  var radio = document.getElementsByName("pilih");
  dipilih = "";

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      dipilih = radio[i].value;
    }
  }

  if (dipilih == "") {
    alert("Pilih salah satu dulu!");
    return;
  }

  pindah("bagian3", "bagian4");
}

// ---------- Bagian 4 ----------
function ok4() {
  email = document.getElementById("email").value.trim();

  // pola email: tulisan@tulisan.tulisan
  var pola = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,}$/;

  if (email == "") {
    alert("Email harus diisi!");
    return;
  }
  if (!pola.test(email)) {
    alert("Format email salah! Contoh: nama@domain.com");
    return;
  }

  // tampilkan hasil akhir
  var hasil = "Hallo, nama saya " + nama + ", email " + email +
    " saya mempunyai sejumlah " + jumlah + " pilihan yaitu " +
    pilihan.join(", ") + ", dan saya memilih " + dipilih;

  document.getElementById("hasil").innerText = hasil;
  pindah("bagian4", "bagian5");
}
