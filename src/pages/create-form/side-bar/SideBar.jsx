import ELEMENTS from "../../../common/disctionary-components";
import Button from "../../../components/basics/button/Button";
import MenuInput from "../../../components/basics/input/MenuInput";
import MenuSelect from "../../../components/basics/select/MenuSelect";
import Select from "../../../components/basics/select/Select";
import styles from "./SideBar.module.css";

import React, { useState } from "react";

const MENU_OPTION = {
  input: MenuInput,
  select: MenuSelect,
};

const SideBar = ({
  sectionSelected,
  openMenuContainerComponent,
  changeElementProperties,
  addComponent,
  setOpenMenu,
  openMenu,
}) => {
  if (!openMenu) return null;

  return (
    <div className={styles.container_sidebar}>
      <section className={styles.sidebar}>
        <span className={styles.header}>
          <h3>{sectionSelected?.name}</h3>
          <Button
            className={styles.button_close}
            onClick={() => setOpenMenu(false)}
          >
            x
          </Button>
        </span>
        {sectionSelected?.components.map((component) => {
          const Element = ELEMENTS[component.element];
          const MenuElement = MENU_OPTION[component.element];
          return (
            <span className={styles.container_element} key={component.id}>
              <h3>{`Component ${component.position}`}</h3>
              <Element disabled={true} {...component} />
              <p
                onClick={() => openMenuContainerComponent(component.id)}
                className={styles.edit_element}
              >{`Edit properties >`}</p>
              {component.editmenuopen && (
                <>
                  <MenuElement
                    {...component}
                    listElements={component.listElements}
                    changeElementProperties={changeElementProperties}
                  />
                  <Select
                    name={"Type"}
                    listElements={[
                      { id: "input", nameOption: "input", value: "input" },
                      { id: "select", nameOption: "select", value: "select" },
                    ]}
                    onChange={(e) =>
                      changeElementProperties(
                        e.target.value,
                        component.id,
                        "element"
                      )
                    }
                  />
                </>
              )}
            </span>
          );
        })}

        {sectionSelected && (
          <Button onClick={addComponent}>Add component</Button>
        )}
      </section>
      <div
        onClick={() => setOpenMenu(false)}
        className={styles.background_menu}
      />
    </div>
  );
};

export default SideBar;
