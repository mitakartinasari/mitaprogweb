import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from'../shared/mahasiswa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  daftarMahasiswa:Mahasiswa[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mahasiswa;
  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this.mahasiswa = new Mahasiswa(this.nama, this.nim, this.kelas);
    this.daftarMahasiswa.push(this.mahasiswa);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
