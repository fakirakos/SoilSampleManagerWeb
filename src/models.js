class FieldModel{
    constructor(uniqueMapId,mapName, longitude=[], latitude=[])
    {
        this.uniqueMapId=uniqueMapId;
        this.mapName=mapName;
        this.longitude=longitude;
        this.latitude=latitude;
    }
    
}


class MarkerModel{
    constructor(id,uniqueMapId,latitude,longitude,ph,eC,cEC,pbs,nitrogen,
        organicMatter,iron,zinc,manganese,copper,potassium,calcium,
        magnesium,phosphorus,sodium,sulfur){
            this.id=id;
            this.uniqueMapId=uniqueMapId;
            this.latitude=latitude;
            this.longitude=longitude;
            this.ph=ph;
            this.eC=eC;
            this.cEC=cEC;
            this.pbs=pbs;
            this.nitrogen=nitrogen;
            this.organicMatter=organicMatter;
            this.iron=iron;
            this.zinc=zinc;
            this.manganese=manganese;
            this.copper=copper;
            this.potassium=potassium;
            this.calcium=calcium;
            this.magnesium=magnesium;
            this.phosphorus=phosphorus;
            this.sodium=sodium;
            this.sulfur=sulfur;
        }
        
}

class placeHolderMarkerModel{
    constructor(id,uniqueMapId,latitude,longitude,analysisId){
        this.id=id;
        this.uniqueMapId=uniqueMapId;
        this.latitude=latitude;
        this.longitude=longitude;
        this.analysisId=analysisId;
    }   
}

class placeHolderAnalysisModel{
    constructor(id,analysisId,info){
        this.id=id;
        this.analysisId=analysisId;
        this.info=info;
    }
    
}


class UserModel{
    constructor(accountId,userEmail,userPassword){
        this.accountId=accountId;
        this.userEmail=userEmail;
        this.userPassword=userPassword
    }
}

class MapDTO{
    constructor(uniqueMapId,mapName){
        this.uniqueMapId=uniqueMapId;
        this.mapName=mapName;
    }
}

class MapCoordinatesDTO{
    constructor(latitude,longitude){
        this.latitude=latitude;
        this.longitude=longitude;
    }
}

export {FieldModel,MarkerModel,UserModel,MapDTO,MapCoordinatesDTO,placeHolderAnalysisModel,placeHolderMarkerModel};