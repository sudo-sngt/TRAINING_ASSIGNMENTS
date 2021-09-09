import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import firebaseDb from "../firebase";

const Todos = () => {
  var [todoObjects, settodoObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    //

    firebaseDb.child("todos").on("value", (snapshot) => {
      if (snapshot.val() != null)
        settodoObjects({
          ...snapshot.val(),
        });
      else settodoObjects({});
    });
  }, []); // similar to componentDidMount

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("todos").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`todos/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      debugger;
      firebaseDb.child(`todos/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div className="">
        <div className="container">
          <h1 className="display-4 text-center">SANJEET TODO LIST</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <TodoForm {...{ addOrEdit, currentId, todoObjects }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>title</th>
                <th>description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(todoObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{todoObjects[id].task}</td>
                    <td>{todoObjects[id].description}</td>

                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Todos;
