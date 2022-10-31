const Tweet = ({username, name, date, message}) => {
    return (
        <div class="tweet">
            <p class="msg">{message}</p>
            <small><b>{name}</b> @{username}  <i>{date}</i></small>
        </div>
    )
}