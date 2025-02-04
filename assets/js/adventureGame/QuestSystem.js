

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
        console.log(`quest checks for ${objectID} `)
        // GameEnv -> Game Objects -> Index -> SpriteData -> ID
        for (let i = 0; i < this.quests.length; i++) {
            const quest = this.quests[i];
            if (quest.Type === "NPCtalks") {
                if (quest.TypeOValues.NPCsToTalkTo.includes(objectID)) {
                    console.log(`quest checks for ${objectID} `)
                }
            }
        }
    }


    static npcQuestChecks(NPCsToTalkTo){
        //this function gets called repidly

    }
    static scavengerQuestChecks(itemToFind, amountToFind){
        //this function gets called repidly

    }

}

export default QuestSystem;