"use strict";
// // Các kiểu dữ liệu
// let trangThai:boolean = true;
// let tong:number = 23
// let title:string = "bae"
// let mangUser:number[] = [1,2,3,4]
// let mangKhoaHoc:Array<any> = ["Javascript", "Typescript", true]
// let mangPhim:[string, number] = ["Life of Pi", 3.14]
// let thamSo:any = true
// // Arrow function
// function In(title:any) {
//     console.log(title)
// }
// let InHoaDon = (title:any) => {
// console.log(title)
// }
// let tinhTong = (a:number =3,b:number = 5) =>  a+b
// console.log(tinhTong())
// // REST PARAMETER
// let displayAnimals = (...animals:string[]) => {
//     for (let animal of animals) {
//         console.log(animal)
//     }
// }
// let animals:string[] = ["Panda", "Tiger", "Elephant"]
// displayAnimals(...animals)
// class NguoiDung{
//     private hoTen:string;
//     public matKhau:string;
//     public taiKhoan:string;
//     constructor(hoTen:string, matKhau:string, taiKhoan:string) {
//         this.hoTen = hoTen;
//         this.matKhau = matKhau;
//         this.taiKhoan = taiKhoan;
//     }
//     public getHoTen() {
//         return this.hoTen
//     }
//     static say() {
//         alert("Xin chào")
//     }
// }
// let user1 = new NguoiDung("ThienNT", "091099", "thiennt")
// console.log(user1.getHoTen())
// NguoiDung.say()
// class NhanVien {
//   public ten: string;
//   public maNV: string;
//   public luongCB: number;
//   constructor(ten: string, maNV: string, luongCB: number) {
//     this.ten = ten;
//     this.maNV = maNV;
//     this.luongCB = luongCB;
//   }
//   public tinhLuong() {
//     return 1000;
//   }
// }
// class TruongPhong extends NhanVien {
//   public tienHoaHong: number;
//   constructor(ten: string, maNV: string, luongCB: number, tienHoaHong: number) {
//     super(ten, maNV, luongCB);
//     this.tienHoaHong = tienHoaHong;
//   }
//   public tinhLuong() {
//     return super.tinhLuong() * 3 + this.tienHoaHong;
//   }
// }
// let nhanVien1 = new NhanVien("AnhPP", "0910", 1000);
// let truongPhong1 = new TruongPhong("ThienNT", "0910", 1000, 300);
// console.log(nhanVien1);
// console.log(truongPhong1);
// Interface
// interface NhanVien {
//   hoTen: string;
//   maNV: string;
//   luongCB: number;
//   tienHoaHong?: number;
//   tinhLuong(): any;
// }
// class NhanVienQuen implements NhanVien {
//   public hoTen: string;
//   public maNV: string;
//   public luongCB: number;
//   constructor(hoTen: string, maNV: string, luongCB: number) {
//     this.hoTen = hoTen;
//     this.maNV = maNV;
//     this.luongCB = luongCB;
//   }
//   tinhLuong() {
//     return this.luongCB;
//   }
// }
// DOM and events in Typescript
let btnGetEmail = document.getElementById("btnGetEmail");
btnGetEmail.addEventListener("click", function () {
    let email = document.getElementById("txtEmail").value;
    alert(email);
});
