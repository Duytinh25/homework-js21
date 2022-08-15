function nhanVien(account, name,Email,Pass, dayWork,salary,job,hours){
    this.account = account;
    this.name = name;
    this.Email = Email;
    this.Pass = Pass;
    this.dayWork = dayWork;
    this.salary = salary ;
    this.job = job;
    this.hours = hours;
    this.allSalary = 0;
    this.typeOfEmp ="";

    this.allSalaryCount = function(x){
        if(job === "Sếp"){
            x = 3;
            this.allSalary = parseFloat(salary)*x;
        }else if(job === "Trưởng phòng"){
            x =2;
            this.allSalary = parseFloat(salary)*x;
        }else if(job === "Nhân viên"){
            x = 1;
            this.allSalary = parseFloat(salary)*x;
        }
        };

    this.count = function(hours){
        if(hours >= 192){
            this.typeOfEmp = "nhan vien xuat sac"
        }else if(hours >= 176){
            this.typeOfEmp = "nhan vien gioi"
        }else if(hours >= 160){
            this.typeOfEmp = "nhan vien kha"
        }else{
            this.typeOfEmp = "nhan vien trung binh"
        }
    };
}