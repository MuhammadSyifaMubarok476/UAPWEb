// Data barang
let barang = [
    {
        kode: "001", 
        nama: "A",
        harga: 10000  
    },
    {
        kode: "002", 
        nama: "B", 
        harga: 20000
    },
    {
        kode: "003",
        nama: "C", 
        harga: 30000
    }
];

function cariBarang(kode) {
    for(let i = 0; i < barang.length; i++) {
        if(barang[i].kode === kode) {
        return barang[i];
        }
    }
    return null;
    }
    function proses() {
        let kode = document.getElementById("kode").value;  
        let jumlah = parseInt(document.getElementById("jumlah").value);
        //cari barang
        let dataBarang = cariBarang(kode);
        if(!dataBarang) {
            // alert jika barang tidak ditemukan
            alert("Kode barang tidak ditemukan!");
            return;  
        }
        // total harga
        let total = dataBarang.harga * jumlah;
        // alert harga
        alert("Total yang harus dibayar: Rp." + total); 
        // uang masuk
        let bayar = parseInt(prompt("Uang yang dibayar:"));
        // kembalian
        let kembalian = bayar - total;
        //alert kembalian
        alert("Kembalian: Rp." + kembalian);
    }
    
    