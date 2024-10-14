import Button from "../../../components/basics/button/Button";
import MenuInput from "../../../components/basics/input/MenuInput";
import MenuSelect from "../../../components/basics/select/MenuSelect";
import Select from "../../../components/basics/select/Select";
import useFormStore from "../../../store/form-store";
import styles from "./SideBar.module.css";

const MENU_OPTION = {
  input: MenuInput,
  select: MenuSelect,
};

const SideBar = () => {
  const sectionSelected = useFormStore((state) => state.sectionSelected);
  const openMenuContainerComponent = useFormStore(
    (state) => state.openMenuContainerComponent
  );
  const changeElementProperties = useFormStore(
    (state) => state.changeElementProperties
  );
  const addComponent = useFormStore((state) => state.addComponent);
  const openMenu = useFormStore((state) => state.openMenu);
  const setOpenMenu = useFormStore((state) => state.setOpenMenu);

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
          const MenuElement = MENU_OPTION[component.element];
          return (
            <span className={styles.container_element} key={component.id}>
              <h3>{component.name}</h3>
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
                    name={"Component"}
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
