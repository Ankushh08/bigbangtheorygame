const SheldonMoves = ({ sheldonKaMove, setSheldonKaMove, decesionMaking, currentMove, setResult, increaseScore, increaseGames }) => {
    // const choice = [0, 1, 2, 3, 4];
    const choiceText = ["Rock", "Paper", "Scissor", "Lizard", "Spock"];
    const randomNumber = () => {
        let sheldonMove = Math.random() * 5;
        // console.log(Math.floor(sheldonMove));
        return Math.floor(sheldonMove);
    }
    const changeMove = () => {
        setSheldonKaMove(choiceText[randomNumber()]);
    }

    randomNumber();
    return (
        <div className="centre card reverse">
            <button className="buttonMP btn-1" onClick={() => {
                changeMove();

                let currentResult = decesionMaking(sheldonKaMove, currentMove);
                if (currentResult === 1) {
                    increaseScore();
                }
                setResult(currentResult);
                increaseGames();

            }}>Play</button>
            {/* {vissible && <Rpsls />} */}
            {sheldonKaMove !== "" && <div >Sheldon's Move: {sheldonKaMove}</div>}
        </div>
    );
}

export default SheldonMoves;