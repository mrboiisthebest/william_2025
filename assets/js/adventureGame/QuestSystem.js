import Quest from "./Quests.js";

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
            if(quest.Type === "NPCtalks"){
                    //add logic for when the quest is completed
                    Quest.updateQuest(quest, objectID)
            }
            if(quest.Type === "Scavenger"){
                    //add logic for when the quest is completed
                    Quest.updateQuest(quest, objectID)
            }

        }
    }
}

export default QuestSystem;