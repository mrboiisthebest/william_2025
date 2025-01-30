import QuestSystem from "./QuestSystem.js";

const Quest = {

    Name: "",
    Compleated: false,
    Count: null,
    ID: null,
    
    
    createQuest: function(name, count, id) {
        this.Name = name;
        this.Count = count;
        this.ID = id;
    
        console.log("Quest created: ", this.Name, this.Count, this.ID)
        QuestSystem.addQuest(this);
    
    },
    
    updateQuest: function(quest){
        this.Compleated = quest.Compleated;
        this.Count = quest.Count;
        this.ID = quest.ID;
    }
    
    
    }
    
    export default Quest;