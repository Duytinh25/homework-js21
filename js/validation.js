function Validation(){
    this.kiemTraRong = function(value, errorId, mess){
        if(value === ""){
            getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess;
            return false;
        }
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;
    };
    this.kiemTraDoDaiKyTu = function(value,errorId,mess,min,max){
        if(value.length >= min && value.length <= max){
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess
        return false;
    };
    this.kiemTraDinhDang = function(value,errorId,mess,letter){
        if(value.match(letter)){
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = ""
            return  true;
        }
        getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess
            return  false;
    };
    this.checkInfo = function(value,errorId,mess,min,max){
        if(value >= min && value <= max){
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        }
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess
        return false;
    }
    this.checkJob = function(value,errorId,mess){
        if(value === "Sếp" || value === "Trưởng phòng" || value ==="Nhân viên"){
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true
        }
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    }
    this.checkAccount = function(value, errorId,mess,list){
        var i = list.some(function(NV){
            return value === NV.account;
        })
        
        if(i){
            getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
        }
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;
    }
}