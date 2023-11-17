function Button({children,click}){
    return(
        <div>
            <button onClick={click}>{children}</button>
        </div>
    )
}
export default Button;