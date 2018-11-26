class FotografiaModel{
    constructor(foto, tipo){
        this._foto = foto
        this._tipo = new  TipoFotografiaModel(tipo)
    }

    get foto(){
        return this._foto
    }
    get tipo(){
        return this._tipo.tipoFoto
    }

}