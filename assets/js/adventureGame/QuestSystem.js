

export class QuestSystem{
static quests = [];

    constructor(){
        
    }

    static load(){
        console.log("Loading quest system")
    }

    static addQuest(questObject){
        this.quests.push(questObject)
        console.log(this.quests)
        console.log("Quest added: ", questObject.Name)
    }

    static interactionChecks(objectID){
        console.log(`quest checks for ${objectID} `)
    }
}

export default QuestSystem;