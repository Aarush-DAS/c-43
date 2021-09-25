class Player{
    constructor() {
        this.name=null;
    }

    update(name){
        database.ref('/').update({
            name:name
        })
    }

    
}