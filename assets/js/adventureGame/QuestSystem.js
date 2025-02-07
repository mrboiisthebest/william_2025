import Quest from "./Quests.js";

export class QuestSystem{
static quests = [];//this contains all the quests that are currently active mainly contains current lvl quests

    constructor(){
        
    }

    static load(){
        console.log("Loading quest system")
    }

    static addQuest(questObject){
        this.quests.push(questObject)
        console.log("Quest added: ", questObject.Name)
        console.log(this.quests)
    }
    static interactionChecks(objectID){
        //this function gets called repidly
        // GameEnv -> Game Objects -> Index -> SpriteData -> ID
        for (let i = 0; i < this.quests.length; i++) {
            let quest = this.quests[i];
            if (quest.Activated === false){return;}
            
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