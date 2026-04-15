function panggilToast(pesan, status) {
    const toastElemen = document.getElementById("toast");
    
    toastElemen.textContent = pesan;
    
    if (status === "error") {
        toastElemen.style.backgroundColor = "#e74c3c";
    } else {
        toastElemen.style.backgroundColor = "#2ecc71"; 
    }
    
    toastElemen.classList.add("tampil");
    
    setTimeout(function() {
        toastElemen.classList.remove("tampil");
    }, 3000);
}

function validasiForm() {
    const nilaiNama = document.getElementById("nama_lengkap").value.trim();
    const nilaiNik = document.getElementById("nik").value.trim();
    const nilaiJalur = document.getElementById("jalur").value;
    
    if (nilaiNama === "" || nilaiNik === "" || nilaiJalur === "") {
        panggilToast("Pendaftaran Gagal: Seluruh kolom wajib diisi!", "error");
        return;
    }
    
    if (nilaiNik.length !== 16) {
        panggilToast("Pendaftaran Gagal: NIK wajib terdiri dari persis 16 digit angka!", "error");
        return;
    }
    
    panggilToast("Pendaftaran Sukses! Data Anda telah terekam di sistem.", "success");
    
    document.getElementById("formDaftar").reset();
}