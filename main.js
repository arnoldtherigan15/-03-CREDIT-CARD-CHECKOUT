new Vue ({
    el: '#App',
    data: {
      number1: '',
      number2: '',
      number3: '',
      number4: '',
      name: '',
      date1: '',
      date2: '',
      ccv: ''
    },
    watch: {
        number1 (val) {
            if(val.length>4) {
                this.number1 = this.number1.slice(0,4); 
            }
        },
        number2 (val) {
            if(val.length>4) {
                this.number2 = this.number2.slice(0,4); 
            }
        },
        number3 (val) {
            if(val.length>4) {
                this.number3 = this.number3.slice(0,4); 
            }
        },
        number4 (val) {
            if(val.length>4) {
                this.number4 = this.number4.slice(0,4); 
            }
        },
        date1 (val) {
            if(val.length>2) {
                this.date1 = this.date1.slice(0,2); 
            }
        },
        date2 (val) {
            if(val.length>2) {
                this.date2 = this.date2.slice(0,2); 
            }
        },
        ccv (val) {
            if(val.length>3) {
                this.ccv = this.ccv.slice(0,3); 
            }
        }
    }
})