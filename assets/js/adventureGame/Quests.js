import GameEnv from "./GameEnv.js";
import QuestSystem from "./QuestSystem.js";


const Quest = {

    Name: "",
    Completed: false,
    ID: null,
    Type: null,
    TypeOValues: null,
    
    
    createQuest: function(name, id, Values) {
        this.Name = name;
        this.ID = id;
        this.Type = Values.Type;
        this.TypeOValues = Values;
    
        console.log("Quest created: ", this.Name)
        QuestSystem.addQuest(this);

    
    },
    
    updateQuest: function(quest, objectID){
        this.Completed = quest.Completed;
        this.ID = quest.ID;

        //this function gets called repidly
        console.log("Updating quest: ", quest.Name)
        if(quest.Type === "NPCtalks"){
            for (let j = 0; j < quest.TypeOValues.NPCsToTalkTo.length; j++) {
                const npcID = quest.TypeOValues.NPCsToTalkTo[j];
                if(npcID === objectID){
                    //add logic for when the quest is completed
                    this.TypeOValues.NPCsToTalkTo.splice(j, 1);
                    console.log(`NPC ${npcID} was talked to. Quest progress updated`)
                    console.log(this)
                    if(this.TypeOValues.NPCsToTalkTo.length === 0){
                        this.Completed = true
                        console.log("Quest completed")}
                }
            }
        }

         if(quest.Type === "Scavenger"){
            if(quest.TypeOValues.itemToFind === objectID){
                console.log("Scavenger quest updated")
                //add logic for when the quest is completed
            }
        }
    },


    //scavenger type quest were you need to collect a certain amount of an object
    scavengerQuest: function(itemToFind, amountToFind){
        const values = {
            Type: "Scavenger",
            itemToFind: itemToFind,
            amountToFind: amountToFind
        }

        return values;
    },

    //you need to talk to all npcs listed in the array
    npcQuest: function(NPCsToTalkTo){
        const values = {
            Type: "NPCtalks",
            NPCsToTalkTo: NPCsToTalkTo,
        }

        console.log(NPCsToTalkTo)




        return values;
    }
}
    
    export default Quest;