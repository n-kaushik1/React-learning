function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container ">
      <div className="row newrow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger mybutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
