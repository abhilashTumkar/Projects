let score = JSON.parse(localStorage.getItem('score')) || 
            {
                wins: 0,
                loss: 0,                    //truthly and falsly behavior right side works if score === null if it is not null then score left side will work
                tie: 0
            };

            document.querySelector('.js-score').
            innerHTML = `wins ${score.wins}, Loss ${score.loss}, tie ${score.tie}`;

            // if(!score){
            //     score = {
            //         wins: 0,
            //         loss: 0,
            //         tie: 0
            //     };
            // }
        let isAutoPlaying = false;

        let intervalId;

        //Autoplay mode for every interval of 1000ms === 1s
        function autoplay(){
            if(!isAutoPlaying){
                intervalId = setInterval(() => {
                    const playerMove = pickcomputerMove();
                    playGame(playerMove);
                    playGame();
                }, 1000);
                isAutoPlaying = true;
            }
            else{
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
            
        }

        //pick rock
        document.querySelector('.js-rock-button').addEventListener('click', () => {
            playGame('rock');

        });
        //pick paper
        document.querySelector('.js-paper-button').addEventListener('click', () => {
            playGame('paper');
        });
        //pick Scissor
        document.querySelector('.js-scissor-button').addEventListener('click', () => {
            playGame('scissors');

        });

        //pick moves through keyboard by p, r or s
        document.body.addEventListener('keydown', (event) => {
            if(event.key === 'r'){
                playGame('rock');
            } else if(event.key === 'p'){
                playGame('paper');
            } else if(event.key === 's'){
                playGame('scissors');
            }

        });

        //playing Game and Displaying Result
        function playGame(playerMove){
            const computerMove = pickcomputerMove();
            let result = '';
            if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                    result = 'tie';
                }
                if(computerMove === 'paper'){
                    result = 'You Lose';
                }
                if(computerMove === 'scissors'){
                    result = 'You win';
                }
                localStorage.setItem('score', JSON.stringify(score));
                
                gameScore(result);
                updateScoreElement();
                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
        
            }

            else if(playerMove === 'paper'){
                if(computerMove === 'rock'){
                    result = 'You win';
                }
                if(computerMove === 'paper'){
                    result = 'tie';
                }
                if(computerMove === 'scissors'){
                    result = 'You Lose';
                }
                localStorage.setItem('score', JSON.stringify(score));

                gameScore(result);
                updateScoreElement();
                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
        
            }

            else if(playerMove === 'scissors'){
                if(computerMove === 'rock'){
                    result = 'You Lose';
                }
                if(computerMove === 'paper'){
                    result = 'You win';
                }
                if(computerMove === 'scissors'){
                    result = 'tie';
                }

                localStorage.setItem('score', JSON.stringify(score));
                gameScore(result);
                updateScoreElement();
                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
        
            }

        }

        //update Score log
        function updateScoreElement(){
            document.querySelector('.js-score').
            innerHTML = `wins ${score.wins}, Loss ${score.loss}, tie ${score.tie}`;

        }

        //Pick computer move
        function pickcomputerMove(){
            let computerMove = '';
            const randomNumber = Math.random();
            
            if(randomNumber >=0 && randomNumber < 1/3){
                computerMove = 'rock';
            }
            else if(randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            } 
            else if(randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors'
            }
            return computerMove;

        }
        //add scores to the score log
        function gameScore(result){
                if(result === 'You win'){
                    score.wins += 1;
                }
                else if(result === 'You Lose'){
                    score.loss += 1;
                }
                else if(result === 'tie'){
                    score.tie += 1;
                }
        }
        //for resetting the game
        function reset(){
            score.wins = 0;
            score.loss = 0;
            score.tie = 0;
        }