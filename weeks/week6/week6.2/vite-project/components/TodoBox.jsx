const TodoBox = ({title , description , completed , createdAt}) => {

    const formattedDate = new Date(createdAt).toLocaleString();

    return (
        <div>
            <h1>{title}</h1>
            <p>Description : {description}</p>
            <label>
                Completed : <input type="checkbox" checked={completed} readOnly/>
            </label>
            <p>Created At : {formattedDate}</p>
            
        </div>
    )
}

export default TodoBox;