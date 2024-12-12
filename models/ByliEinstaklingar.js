/**
 * Represents a resident in a historical farm registry.
 * @class
 * @description A class representing an individual living on a farm in the 1703 census.
 */
class ByliEinstaklingar {
   
    
    constructor(data) {
        this.manntal_id = data.manntal_id;
        this.heimili_id = data.heimili_id;
        this.einstaklingur_id = data.einstaklingur_id;
        this.einstaklingur_rod = data.einstaklingur_rod;
        this.manntal_lysing = data.manntal_lysing;
        this.heimilisstada = data.heimilisstada;
        this.nafn = data.nafn;
        this.fornafn = data.fornafn;
        this.eftirnafn = data.eftirnafn;
        this.kyn = data.kyn;
        this.aldur = data.aldur;
        this.heimili_lysing = data.heimili_lysing;
        this.byli_id = data.byli_id;
        this.byli_nafn = data.byli_nafn;
        this.logbyli_id = data.logbyli_id;
        this.logbyli_nafn = data.logbyli_nafn;
        this.tilheyrir_byli_id = data.tilheyrir_byli_id;
        this.dyrleiki = data.dyrleiki;
        this.jardabok = data.jardabok;
        this.manntal = data.manntal;
        this.kvikfjartal = data.kvikfjartal;
        this.bjorn_l = data.bjorn_l;
    }

    
}

module.exports = ByliEinstaklingar; 