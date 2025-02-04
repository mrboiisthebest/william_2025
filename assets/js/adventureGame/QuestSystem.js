

export class QuestSystem{
static quests = [];

    constructor(){
        
    }

    static load(){
        console.log("Loading quest system")
    }

    static addQuest(questObject){
        this.quests.push(questObject)
        console.log(questObject)
        console.log("Quest added: ", questObject.Name)

                //Game Env -> Game Objects -> Index -> SpriteData -> ID

    }
    static interactionChecks(objectID){
        //this function gets called repidly
        // GameEnv -> Game Objects -> Index -> SpriteData -> ID
        for (let i = 0; i < this.quests.length; i++) {
            const quest = this.quests[i];
            //console.log(`quest checks for ${objectID} `)
            if(quest.Type === "NPCtalks"){
                for (let j = 0; j < quest.TypeOValues.NPCsToTalkTo.length; j++) {
                    const npcID = quest.TypeOValues.NPCsToTalkTo[j];
                    //console.log(`checking ${npcID}`)
                    if(npcID === objectID){
                        console.log("NPCtalks quest updated")
                        //add logic for when the quest is completed
                    }
                }
            }
            if(quest.Type === "Scavenger"){
                if(quest.TypeOValues.itemToFind === objectID){
                    console.log("Scavenger quest updated")
                    //add logic for when the quest is completed
                }
            }

        }
    }
}

export default QuestSystem;