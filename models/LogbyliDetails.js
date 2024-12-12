class LogbyliDetails {
    constructor(data) {
        this.byliId = data.byli_id;
        this.nafn = data.nafn;
        this.byliTegundId = data.byli_tegund_id;
        this.kirkjustadurTegundId = data.kirkjustadur_tegund_id;
        this.skraningarar = data.skraningarar;
        this.dyrleikiHeiltHdr = data.dyrleiki_heilt_hdr;
        this.dyrleikiAlnir = data.dyrleiki_alnir;
        this.heimiliId = data.heimili_id;
        this.kyr = data.kyr;
        this.kvigur = data.kvigur;
        this.naut = data.naut;
        this.kalfar = data.kalfar;
        this.aer = data.aer;
        this.saudir = data.saudir;
        this.vgSaudfe = data.vg_saudfe;
        this.lomb = data.lomb;
        this.geitur = data.geitur;
        this.hafrar = data.hafrar;
        this.kid = data.kid;
        this.hestar = data.hestar;
        this.hross = data.hross;
        this.folold = data.folold;
        this.tegund = data.tegund;
        this.kirkjustadurTegund = data.kirkjustadur_tegund;
        this.tilheyririByliId = data.tilheyrir_byli_id;
        this.hreppurId = data.hreppur_id;
        this.hreppurNafn = data.hreppur_nafn;
    }
}

module.exports = LogbyliDetails; 