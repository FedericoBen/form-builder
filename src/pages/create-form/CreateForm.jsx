import { useState } from "react";
import styles from "./CreateForm.module.css";
import FormBoard from "./form-board/FormBoard";
import SideBar from "./side-bar/SideBar";

const CreateForm = () => {
  return (
    <main className={styles.container_app}>
      <SideBar />
      <FormBoard />
    </main>
  );
};

export default CreateForm;
