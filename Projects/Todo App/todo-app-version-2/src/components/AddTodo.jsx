function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row newrow">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success mybutton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
