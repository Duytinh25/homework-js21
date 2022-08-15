function getEle(id){
    return document.getElementById(id);
}


var dsnv = new dsNhanVien()
var Validation = new Validation();
getLocalStorage();

function getInfor(isAdd){
    var account = getEle('tknv').value;
    var name = getEle('name').value;
    var Email = getEle('email').value;
    var Pass = getEle('password').value;
    var dayWork = getEle('datepicker').value;
    var salary = getEle('luongCB').value;
    var job = getEle('chucvu').value;
    var hours = getEle('gioLam').value;

    var isValid = true;
    if(isAdd){
        isValid &= Validation.kiemTraRong(account,"tbTKNV","vui long nhap ten account") && Validation.kiemTraDoDaiKyTu(account,"tbTKNV","4-6 ki tu",4,6)&& Validation.checkAccount(account,"tbTKNV","Account da ton tai",dsnv.arr);
    }
    isValid&= Validation.kiemTraRong(name,"tbTen","Vui long nhap ten") && Validation.kiemTraDinhDang(name,"tbTen","chi nhap chu","^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
    isValid &= Validation.kiemTraRong(Pass,"tbMatKhau","vui long nhap ten account") && Validation.kiemTraDoDaiKyTu(Pass,"tbMatKhau","4-6 ki tu",6,10);
    isValid &= Validation.kiemTraRong(Email,"tbEmail","Vui long nhap Email") && Validation.kiemTraDinhDang(Email,"tbEmail","Email sai dinh dang",/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    isValid &= Validation.kiemTraRong(dayWork,"tbNgay","vui long nhap ngay");
    isValid &= Validation.kiemTraRong(salary,"tbLuongCB","Vui long nhap luong CB") && Validation.checkInfo(salary,"tbLuongCB","luong ti 1tr - 20tr",1000000,20000000);
    isValid &= Validation.checkJob(job,"tbChucVu","vui long chon chuc vu");
    isValid &= Validation.kiemTraRong(hours,"tbGiolam","vui long nhap gio lam") && Validation.checkInfo(hours,"tbGiolam","Vui long nhap dung gio lam",80,200)
    if(!isValid) return null
    var emp = new nhanVien(account,name, Email, Pass,dayWork,salary,job,hours);
    emp.allSalaryCount();
    emp.count(hours);
    return emp;
}
//them Nhan vien
getEle('btnThemNV').addEventListener("click", function(){
    var NhanVien = getInfor(true);
    if(NhanVien){
        dsnv.themNv(NhanVien);
    }
    setLocalStorage();
    renderTable(dsnv.arr);
})

function renderTable(data){
    var content = "";
    data.forEach( function(NhanVien) {
         
    content+= ` 
    <tr>
        <td>${NhanVien.account}</td>
        <td>${NhanVien.name}</td>
        <td>${NhanVien.Email}</td>
        <td>${NhanVien.dayWork}</td>
        <td>${NhanVien.job}</td>
        <td>${NhanVien.allSalary}</td>
        <td>${NhanVien.typeOfEmp}</td>

        <td>
                <button class= "btn btn-danger" onclick = "xoaNV('${NhanVien.account}')">xoa</button>
                <button class= "btn btn-primary" onclick = "suaNV('${NhanVien.account}')">fix</button>
        </td>
    </tr>
    `
    });
   
    getEle('tableDanhSach').innerHTML = content;
}
//xoa nhan vien
function xoaNV(account){
    dsnv.xoaNv(account);
    renderTable(dsnv.arr);
    setLocalStorage();
}
//sua nhan vien
function suaNV(account){
    var NV= dsnv._getInfo(account);
    document.querySelector("body").className= "modal-open"
    if(NV){
        getEle('tknv').value = NV.account;
        getEle('tknv').disabled = true;
        getEle('name').value = NV.name;
        getEle('email').value = NV.Email;
        getEle('password').value = NV.Pass;
        // getEle('daypicker').value = NV.dayWork;
        getEle('luongCB').value = NV.salary;
        getEle('chucvu').value = NV.job;
        // getEle('giolam').value = NV.hours;
    }
    var nv = getInfor(false);
    setLocalStorage();
}
//cap nhat nhan vien
getEle("btnCapNhat").addEventListener("click", function(){
    var NV = getInfor(false);
    dsnv.upDateNV(NV);
    renderTable(dsnv.arr);
    setLocalStorage();
})
//tim kiem nhan vien theo loai
getEle("searchName").addEventListener("keyup",function(){
    var keyWord = getEle("searchName").value;
    var array = dsnv.findNV(keyWord);
    renderTable(array);
});

function setLocalStorage(){
    var data = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", data);
}
function getLocalStorage(){
    if(localStorage.getItem("DSNV")){
        var dataString = localStorage.getItem("DSNV");
        var dataJSON = JSON.parse(dataString);
        dsnv.arr = dataJSON;
        renderTable(dataJSON);
    }
}
