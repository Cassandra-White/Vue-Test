const randomDommage = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data(){
        return{
            logMessage: [],
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            specialAttackRound: 0,
            gameOver: false,
            win: false,
            draw: false,
            
        }
    },
    computed:{
        getMonsterHealth(){
            if(this.monsterHealth < 0)
                return '0%'
            return this.monsterHealth+'%'
        },
        getPlayerHealth(){
            if(this.playerHealth < 0)
                return '0%'
            return this.playerHealth+'%'
        },
        getSpecialAttackRound(){
            if(this.specialAttackRound < 3)
                return true;
            return false;
        }
    },
    methods:{
        newGame(){
            this.logMessage= []
            this.playerHealth = 100
            this.monsterHealth = 100
            this.gameOver = false
            this.win = false
            this.draw = false
        },
        playerAttack(){
            this.currentRound++;
            this.specialAttackRound++;

            const dommage = randomDommage(5, 12);
            this.monsterHealth -= dommage;
            this.addLogMessage('Player', 'Attack', dommage)
            this.monsterAttack();
        },
        monsterAttack(){
            const dommage = randomDommage(8, 15);
            this.playerHealth -= dommage

            console.log(this.playerHealth);
            console.log(this.monsterHealth);
            this.addLogMessage('Monster', 'Attack', dommage)

            this.isFinish()
        },
        playerSpecialAttack(){
            this.currentRound++;

            if(this.specialAttackRound >= 3){
                this.specialAttackRound = 0;
                const dommage = randomDommage(10, 25);
                this.monsterHealth -= dommage;
                this.monsterAttack();
                this.addLogMessage('Player', 'Special Attack', dommage)
            }
            else
                this.monsterAttack();
        },
        playerHeal(){
            this.currentRound++;
            this.specialAttackRound++;

            const heal = randomDommage(8, 13);
            if((this.playerHealth + heal) >= 100){
                this.playerHealth = 100;
                this.addLogMessage('Player', 'Heal', heal)
            }
            else{
                this.playerHealth += heal;
                this.addLogMessage('Player', 'Heal', heal)
            }    

            this.monsterAttack();
            
        },
        isFinish(){
            if(this.playerHealth <= 0 && this.monsterHealth > 0)
                this.gameOver = true;
            if(this.playerHealth > 0 && this.monsterHealth <= 0)
                this.win = true;
            if(this.playerHealth <= 0 && this.monsterHealth <= 0)
                this.draw = true;
                console.log(this.gameOver);
                console.log(this.win);
                console.log(this.draw);
        },
        playerSurrender(){
            this.gameOver = true;
        },
        addLogMessage(who, what, value){
            this.logMessage.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        }
    }
});

app.mount('#game');

