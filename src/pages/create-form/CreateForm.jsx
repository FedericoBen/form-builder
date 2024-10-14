import { useState } from "react";
import styles from "./CreateForm.module.css";
import FormBoard from "./form-board/FormBoard";
import SideBar from "./side-bar/SideBar";

const CreateForm = () => {
  // const [openMenu, setOpenMenu] = useState(false);

  // function updateForm(newSection) {
  //   setFormSchema((oldFormSchema) =>
  //     oldFormSchema.map((section) =>
  //       section.id !== newSection?.id ? section : newSection
  //     )
  //   );
  // }

  // function addSection() {
  //   setFormSchema((oldFormSchema) => [
  //     ...oldFormSchema,
  //     {
  //       id: crypto.randomUUID(),
  //       position: oldFormSchema.length,
  //       name: `Seccion ${oldFormSchema.length}`,
  //       components: [],
  //     },
  //   ]);
  // }

  // function selectSection(section) {
  //   setSectionSelected(section);
  //   setOpenMenu(true);
  // }

  // function addComponent() {
  //   const newSection = {
  //     ...sectionSelected,
  //     components: [
  //       ...sectionSelected.components,
  //       {
  //         id: crypto.randomUUID(),
  //         position: sectionSelected.components.length,
  //         editmenuopen: false,
  //         name: `Input ${sectionSelected.components.length}`,
  //         ...INPUT_BASE_SCHEMA,
  //       },
  //     ],
  //   };
  //   updateForm(newSection);
  //   setSectionSelected(newSection);
  // }

  // function openMenuContainerComponent(idComponent) {
  //   const newSection = {
  //     ...sectionSelected,
  //     components: sectionSelected.components.map((component) =>
  //       component.id !== idComponent
  //         ? component
  //         : { ...component, editmenuopen: !component.editmenuopen }
  //     ),
  //   };
  //   updateForm(newSection);
  //   setSectionSelected(newSection);
  // }

  // function changeElementProperties(value, idComponent, property) {
  //   const newSection = {
  //     ...sectionSelected,
  //     components: sectionSelected.components.map((component) => {
  //       const propsChangeElement =
  //         property != "element"
  //           ? null
  //           : {
  //               id: component.id,
  //               position: component.position,
  //               editmenuopen: component.editmenuopen,
  //               name: `${value} ${component.position}`,
  //               ...(SELECT_PROPS_BASE[value] ?? {}),
  //             };

  //       return component.id !== idComponent
  //         ? component
  //         : propsChangeElement ?? { ...component, [property]: value };
  //     }),
  //   };
  //   updateForm(newSection);
  //   setSectionSelected(newSection);
  // }

  return (
    <main className={styles.container_app}>
      <SideBar />
      <FormBoard />
    </main>
  );
};

export default CreateForm;
