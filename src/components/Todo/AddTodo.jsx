function AddTodo() {
    return (
        <section className="mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-xl-8 col-xxl-6">
                        <div className="input-group">
                            <form className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    placeholder="Todo title"
                                />
                                <button
                                    className="btn btn-outline-primary border-2 fw-bolder"
                                    type="submit"
                                >
                                    Add Todo
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddTodo;
