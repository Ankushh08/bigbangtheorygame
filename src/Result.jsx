const Result = ({ result }) => {
    return (

        result === 1 ? (<div className="centre card"> I won </div >) : result === 0 ? (<div className="centre card"> Sheldon Won </div>) : (<div className="centre card"> Draw </div>)

    );
}

export default Result;