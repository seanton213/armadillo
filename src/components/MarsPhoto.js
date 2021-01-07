function MarsPhoto(props) {
    return (
        <div>
            <img src={props.img} alt={props.date}/>
            <h3>{props.date}</h3>
        </div>
    );
}

export default MarsPhoto;
