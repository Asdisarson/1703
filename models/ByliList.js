/**
 * Represents a farm (byli) in the historical registry.
 * @class
 */
class ByliList {

    constructor(data) {
        this.id = data.id;
        this.nafn = data.nafn;
        this.logbyli_id = data.logbyli_id;
        this.logbyli_nafn = data.logbyli_nafn;
        this.tilheyrir_byli_id = data.tilheyrir_byli_id;
        this.dyrleiki = data.dyrleiki;
        this.jardabok = data.jardabok;
        this.manntal = data.manntal;
        this.kvikfjartal = data.kvikfjartal;
        this.bjorn_l = data.bjorn_l;
        this.hreppur_id = data.hreppur_id;
    }
}

module.exports = ByliList; 