const GamesWon = ({ score, totalGames }) => {
    return (
        <div className="centre card reverse">
            <p>Total Games Played: {totalGames}</p>
            <p>Games won against SHELDON: {score}</p>
        </div>
    );
}

export default GamesWon;