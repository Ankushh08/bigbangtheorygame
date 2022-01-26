const Moves = ({currentMove, setcurrentMove }) => {
    const btnClick = (e) => {
        // console.log(e, 'click');
        setcurrentMove(e);
    }
    return (
        <div className="centre">
            <button onClick={() => { btnClick("Rock") }}
                className="buttonMP btn-1">Rock</button>
            <button onClick={() => { btnClick("Paper") }}
                className="buttonMP btn-1">Paper</button>
            <button onClick={() => { btnClick("Scissor") }}
                className="buttonMP btn-1">Scissor</button>
            <button onClick={() => { btnClick("Lizard") }}
                className="buttonMP btn-1">Lizard</button>
            <button onClick={() => { btnClick("Spock") }}
                className="buttonMP btn-1">Spock</button>
            {currentMove && <p className="card reverse">You chose: {currentMove}</p>}
        </div>
    );
}

export default Moves;