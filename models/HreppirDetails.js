/**
 * Represents details about a municipality (hreppur) in the historical registry.
 * @class
 */
class HreppirDetails {
    
    constructor(data) {
        this.fjIbua = data.fj_ibua;
        this.fjLogbyla = data.fj_logbyla;
        this.dyrleiki = data.dyrleiki;
        this.hreppurId = data.hreppur_id;
        this.hreppurNafn = data.hreppur_nafn;
    }
}

module.exports = HreppirDetails; 