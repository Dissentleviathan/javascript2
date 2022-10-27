console.log("Selamat Pagi")

//variabel
//let npm = 2125250072
//let nama = "M Agha Setya Pratama"
//array
//let arrayMahasiswa =["Agha", "Zega"]
//let arrayDosen = Array("Ahmad", "Ali")
//objek
//let mahasiswa = {npm: 2125250072, nama: "Agha", hobi:["ngoding", "gaming"] }

//console.log(arrayMahasiswa[0])
//console.log(arrayDosen[1])
//console.log(mahasiswa.nama) //output agha
//console.log(mahasiswa.hobi[0]) // output ngoding


let txtnpm = document.getElementById("npm")
let txtnama = document.getElementById("nama")
let listMhs = document.getElementById("listmahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")

let data = []
tampil()

function simpan() {
    console.log("Button simpan ditekan")

    console.log(txtnpm.value)
    console.log(txtnama.value)

    if (localStorage.getItem("lsMahasiswa") === null) {
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))

        //simpan object ke array data
        data.push({
            "npm": txtnpm.value,
            "nama": txtnama.value
        })
        //simpan localStorage dengan key lsMahasiswa
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))

    } else {

        //Jika localStorage dengan  key lsMahasiswa sudah ada/sudah disimpan sebelumnya

        //ambil dulu data di localStorage dengan key lsMahasiswa
        let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
        console.log(dataLs)
        //push data baru ke dalam array
        dataLs.push({
            "npm": txtnpm.value,
            "nama": txtnama.value
        })
        //simpan data baru di dalam localStorage
        localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))
    }

    //panggil funciton tampil
    tampil()
}


function tampil() {
    //clear elemen listMahasiswa
    listMhs.innerHTML = ""
    //gunakan forEach
    data.forEach(listData)

    // ambil data localStorage dengan key  lsMahasiswa
    let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    console.log(dataTampil)
    dataTampil.forEach(listData)
}

function listData(item, index) {
    listMhs.innerHTML += "<li>" + item.npm + "-" + item.nama + "</li>"
    tblMhs.innerHTML += `<tr> <td>${item.npm}</td><td>${item.nama}</td></tr>`
}