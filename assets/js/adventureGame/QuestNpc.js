import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import QuestSystem from "./QuestSystem.js";
import Quests from "./Quests.js";

class QuestNpc extends Character {
    constructor(data = null) {
        super(data);
        this.bindEventListeners();
    }

    update() {
        this.draw();
    }

    
    /**
     * Bind key event listeners for proximity interaction.
     */
    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }
    /**
     * Handle keydown events for interaction.
     * @param {Object} event - The keydown event.
     */
    handleKeyDown({ key }) {
        switch (key) {
            case 'e': // Player 1 interaction
            case 'u': // Player 2 interaction
                //add logic to give the player random quests
                this.assignQuest(this.findRandomQuest());
                break;
        }
    }
    /**
     * Handle keyup events to stop player actions.
     * @param {Object} event - The keyup event.
     */
    handleKeyUp({ key }) {
        if (key === 'e' || key === 'u') {
            // Clear any active timeouts when the interaction key is released
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
            }
        }
    }
    findRandomQuest(){
        let randIndex = Math.floor(Math.random() * QuestSystem.quests.length);
        return QuestSystem.quests[randIndex];
    }

    assignQuest(quest){
        quest.Activated = true;
        console.log(`Quest assigned: ${quest.Name}`);
        console.log(quest);
    }
}
export default QuestNpc;

