
type Props = {
    onClick?: () => void;
};

function Button({ onClick }: Props) {
    return (<div className="center-full">
        <button type="button" className="btn btn-primary" onClick={onClick}>Search</button>
    </div>)
}

export default Button