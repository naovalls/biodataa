<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biodata Mahasiswa dengan JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 50%;
            margin: auto;
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .biodata {
            margin-top: 20px;
        }
        .biodata table {
            width: 100%;
            border-collapse: collapse;
        }
        .biodata table, .biodata th, .biodata td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .biodata th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Biodata Mahasiswa</h1>
        <div class="biodata">
            <table id="biodataTable">
                <tr>
                    <th>Informasi</th>
                    <th>Detail</th>
                </tr>
            </table>
        </div>
    </div>

    <script>
        // Data biodata mahasiswa
        const biodata = {
            nama: "Naoval Ilyas Zulfikar",
            nim: "STI202303453",
            jurusan: "Teknik Informatika",
            fakultas: "Fakultas Teknologi Informatika",
            tanggalLahir: "18 Januari 2005",
            email: "naovalilyas123@gmail.com",
            alamat: "Kalibagor, Banyumas"
        };

        // Ambil elemen tabel biodata
        const biodataTable = document.getElementById("biodataTable");

        // Fungsi untuk menambahkan baris ke tabel
        function tambahBaris(label, value) {
            const tr = document.createElement("tr");
            const tdLabel = document.createElement("td");
            const tdValue = document.createElement("td");

            tdLabel.textContent = label;
            tdValue.textContent = value;

            tr.appendChild(tdLabel);
            tr.appendChild(tdValue);
            biodataTable.appendChild(tr);
        }

        // Menambahkan data biodata ke tabel
        tambahBaris("Nama", biodata.nama);
        tambahBaris("NIM", biodata.nim);
        tambahBaris("Jurusan", biodata.jurusan);
        tambahBaris("Fakultas", biodata.fakultas);
        tambahBaris("Tanggal Lahir", biodata.tanggalLahir);
        tambahBaris("Email", biodata.email);
        tambahBaris("Alamat", biodata.alamat);
    </script>
</body>
</html>
