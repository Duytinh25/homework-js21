function dsNhanVien(){
    this.arr = [];

    this.themNv = function(NV){
        this.arr.push(NV);
    };
    this.findIndex = function(account){
        var index = -1;
        this.arr.forEach(function(NV , i){
            if(NV.account === account){
                index = i;
            }
        })
        return index;
    };
    this.xoaNv = function(account){
        var index = this.findIndex(account);
        if(index!== -1){
            this.arr.splice(index, 1)
        }
    }
    this._getInfo = function(account){
        var NV = null;
        var index = this.findIndex(account);
        if(index !== -1){
            NV = this.arr[index];
        }
        return NV;
    }
    this.upDateNV = function(nv){
        var index = this.findIndex(nv.account);
        if(index !== -1){
            this.arr[index] = nv;
        }
    }
    this.findNV = function(keyWord){
        var timkiem = [];

        this.arr.forEach(function(NV){
            var typeofNVlowercase = NV.typeOfEmp.toLowerCase();
            var keyWordLowerCase = keyWord.toLowerCase();
            if(typeofNVlowercase.indexOf(keyWordLowerCase) !== -1){
                timkiem.push(NV);
            }
        })
        return timkiem;
    }
}