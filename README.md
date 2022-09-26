# MovieApp

Langkah-langkah menginstall dan menjalankan aplikasi

Beberapa hal yang harus kamu persiapkan sebelum memulai semua ini.

Sebelum memulai menyentuh repository, pastikan komputer anda sudah memiliki berikut ini:

- sudah Download & install Android Studio [Download Android studio](https://developer.android.com/studio)
- sudah Download & install Node.js & NPM [Download Node.js](https://nodejs.org)
- sudah Download & install git [Download git](https://git-scm.com/downloads)
- sudah Download & instalasi code editor, saya pribadi menggunakan Visual Studio Code [Download Node.js](https://code.visualstudio.com)

Silakan download dan instalasi

jika sudah tersedia maka:

## Langkah Pertama

### Persiapkan Device

jika menggunakan Device/hp ikuti panduan berikut ini:
[Preparing the Android device](https://reactnative.dev/docs/running-on-device)

jika menggunakan emulator komputer, buka android studio open project movieApp
[running from emulator](https://reactnative.dev/docs/environment-setup)

## Langkah Kedua

### Project setup

1. Mengcopy repository ke lokal PC dengan meng-klik Code (button warna hijau)

## Screenshots

![Klik Button Code](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/klikCode.png)

2. Clone repository / copy repository

```bash
 https://github.com/witrikomalasari/MovieApp.git
```

## Screenshots

![Copy HTTP](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/copyLinkHTTPS.png)

setelah meng-clone/copy repository diGit, langkah selanjutnya dilakukan di terminal local komputer anda

### Terminal Local ( di komputer anda )

3. Buka terminal, jalankan perintah berikut

```bash
 git clone https://github.com/witrikomalasari/MovieApp.git
```

## Screenshots

![git Clone di terminal](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/cloneProject.png)

Setelah meng-Clone/copy repository, memindahkan nya dilocal komputer anda, maka langkah selanjutnya:

4. Masuk kedalam repository project yang sudah diclone

## Screenshots

![Masuk/akses kedalam repo MovieApp](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/aksesRepoLocal.png)

5. Install dependencies

Lakukan proses instalasi dependecies, ada 2 cara pilihan:

jika ingin menggunakan yarn, copy dan jalankan perintah ' yarn install' didalam repository project
jika ingin menggunakan npm, copy dan jalankan perintah ' npm install ' dididalam repository project

```bash
 yarn install
 or
 npm install
```

## Screenshots

![yarn install](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/yarnInstal.png)

![npm install](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/nmpInstall.png)

Biarkan proses yarn/npm instal berjalan sampai selesai

![yarn proses install](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/yarnInstall2.png)

Setelah proses instalasi dependecies, maka jalankan code berikut ini:

6. Jalankan Aplikasi MovieApp

### Running aplikasi

Untuk menjalankan aplikasi MovieApp ini, cukup jalankan perintah berikut

### Yarn / npm start

```bash
 yarn start
 or
 npm start atau npx react-native start
```

## Screenshots

![yarn start](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/yarnStart2.png)

Setelah jalankan yarn/nmp start, layar akan muncul atau terlihat sepert ini

![yarn start view](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/yarnStart.png)

setelah berhasil tampil seperti gambar diatas, jangan tutup terminal yarn start anda, biarkan seperti itu dahulu
lanjutkan dengan membuka tab baru di terminal anda dan lakukan perintah dibawah ini:

Jalankan yarn / npm android (buka tab baru di terminal anda untuk menjalankan yarn android ini) dan tunggu sampai selesai/succes proses instalasinya

### Yarn / npm android

```bash
yarn android
or
npm android atau npx react-native android
```

## Screenshots

![yarn android running](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/yarnAndroid2.png)

Setelah instalasi yarn android selesai, jika kembali pada tab yarn/npm start, maka akan terlihat app sedang jalan atau loading

![Proses Loading aplikasi running to Device or Emulator](https://github.com/witrikomalasari/MovieApp/blob/Master/TestAplikasi/src/Documentasi/yarnLoadingApp.png)

Demikian langkah-langkah untuk menginstall dan menjalankan aplikasi project movieApp ini di emulator atau device anda melalui repository movieApp local di komputer anda
