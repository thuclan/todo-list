import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoReducer";
import styles from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";

function AppHeader() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  console.log(initialFilterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      <SelectButton
        id="status"
        onClick={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">all</option>
        <option value="incompleted">incompleted</option>
        <option value="complete">complete</option>
      </SelectButton>
      {/* Todo modal */}
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
