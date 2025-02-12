import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import Player from './Player.js';
import QuestSystem from "./QuestSystem.js";
import Quests from "./Quests.js";
import GameControl from "./GameControl.js";

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
                // Add logic to give the player random quests
                if (this.isPlayerNear()) {
                    let randQuest = this.findRandomQuest(this.listOfDeactivatedQuests());
                    this.assignQuest(randQuest);
                }
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

    /**
     * Check if the player is near the NPC.
     * @returns {boolean} - True if the player is near the NPC, false otherwise.
     */
    isPlayerNear() {
        let objects = GameEnv.gameObjects
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            if (object instanceof Player) {
                this.isCollision(object);
                return this.collisionData.hit;
            }
            
        }

        const player = GameEnv.gameObjects.player; 
        return this.isCollision(player);
    }

    findRandomQuest(deactivatedQuests) {
        if (deactivatedQuests.length === 0) {
            return false;
        }
        function findRandIndex() {
            let randIndex = Math.floor(Math.random() * deactivatedQuests.length);
            let quest = deactivatedQuests[randIndex];

            if (quest.Activated === false) {
                return quest;
            }
        }
        return findRandIndex();
    }

    assignQuest(quest) {
        if (quest === false || quest === undefined) {
            console.log("No quests to give");
            return;
        }
        quest.Activated = true;
        console.log(`Quest assigned: ${quest.Name}`);
        console.log(QuestSystem.quests);
        this.sendMessage(quest);
    }

    listOfDeactivatedQuests() {
        let deactivatedQuests = [];
        for (let i = 0; i < QuestSystem.quests.length; i++) {
            if (QuestSystem.quests[i].Activated === false && QuestSystem.quests[i].Completed === false) {
                deactivatedQuests.push(QuestSystem.quests[i]);
            }
        }
        console.log("got list of deactivated quests");
        return deactivatedQuests;
    }

    sendMessage(quest) {
        const type = quest.Type;
        let text = "";

        if (type === "Scavenger") {
            text = this.scavengerMessage(quest);
            QuestSystem.message(text);
        }
        if (type === "NPCtalks") {
            text = this.npcQuestMessage(quest);
            QuestSystem.message(text);
        }
    }

    scavengerMessage(quest) {
        let text = `Can you talk to ${quest.TypeOValues.NPCsToTalkTo[0]}`;
        return text;
    }

    npcQuestMessage(quest) {
        console.log(quest);
        let text = `Can you talk to ${quest.TypeOValues.NPCsToTalkTo}`;
        return text;
    }
}

export default QuestNpc;