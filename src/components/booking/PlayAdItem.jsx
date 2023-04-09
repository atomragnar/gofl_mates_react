export const PlayAdItem = () => {






    return (
        <><article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            {token && (
                <menu className={classes.actions}>
                    <button onClick={startDeleteHandler}>Delete</button>
                </menu>
            )}
        </article>
            );</>
    )
}
