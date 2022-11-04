type HangmanWordProps = {
    revealed?: boolean,
    guessedLetters: string[],
    wordToGuess: string
}

export function HangmanWord ({revealed = false, guessedLetters, wordToGuess}: HangmanWordProps) {
    return <div style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {wordToGuess.split("").map((letter, index) => {
            return <span style={{borderBottom: ".1em solid black"}}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || revealed ? "visible" : "hidden",
                    color: !guessedLetters.includes(letter) && revealed ? "red" : 'black'
                }}>
                    {letter}
                </span>
            </span>
        })}
    </div>;
}