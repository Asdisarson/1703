class SyslurHreppar {
    constructor(data) {
        this.mainId = data.main_id;
        this.hreppurNafn = data.hreppur_nafn;
        this.syslaId = data.sysla_id;
        this.syslaHeiti = data.sysla_heiti;
    }
}

module.exports = SyslurHreppar; 