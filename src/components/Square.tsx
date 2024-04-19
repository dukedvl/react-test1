interface SquareProps {
    color: string,
    text:string
}

const Square = (props: SquareProps) => {
    return (
        <div style={{backgroundColor: props.color,width:100,height:100,margin:5}}><span>{props.text}</span></div>
    )
}

export default Square