import QuestSystem from "./QuestSystem.js";


const Quest = {

    Name: "",
    Compleated: false,
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
    
    updateQuest: function(quest){
        this.Compleated = quest.Compleated;
        this.Count = quest.Count;
        this.ID = quest.ID;
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






        return values;
    }

    
    }
    
    export default Quest;