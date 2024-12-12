class LogbyliSummary {
    constructor(data) {
        this.id = data.id;
        this.nafn = data.nafn;
        this.hreppurId = data.hreppur_id;
        this.dyrleikiHeimild = data.dyrleiki_heimild;
        this.fjIbua = data.fj_ibua;
        this.dyrleiki = data.dyrleiki;
        this.fjByla = data.fj_byla;
        this.hreppurNafn = data.hreppur_nafn;
    }
}

module.exports = LogbyliSummary; 