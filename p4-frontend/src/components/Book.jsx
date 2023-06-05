import React, { useState } from "react";
import styles from "./Book.module.css";
import UpdateModal from "./UpdateModal";

const Book = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      {showUpdateModal && (
        <UpdateModal setShowUpdateModal={setShowUpdateModal} />
      )}

      <div className={`row ${styles.book}`}>
        <div className="col-sm-3">{props.title}</div>
        <div className="col-sm-3">{props.author}</div>
        <div className="col-sm-2">{props.yearPublished}</div>
        <button className="col-sm-2" onClick={() => props.deleteBook(props.id)}>
          delete
        </button>
        <button className="col-sm-2" onClick={() => setShowUpdateModal(true)}>
          update
        </button>
      </div>
    </>
  );
};

export default Book;
