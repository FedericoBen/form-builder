import ELEMENTS from "../../../common/dictionary-components";
import Button from "../../../components/basics/button/Button";
import useFormStore from "../../../store/form-store";
import styles from "./FormBoard.module.css";

const FormBoard = () => {
  const formSchema = useFormStore((state) => state.formSchema);
  const selectSection = useFormStore((state) => state.selectSection);
  const addSection = useFormStore((state) => state.addSection);
  const deleteSection = useFormStore((state) => state.deleteSection);
  return (
    <section className={styles.container_form_board}>
      <section className={styles.form_board}>
        {formSchema.map((section) => {
          return (
            <section className={styles.container_section} key={section.id}>
              <h3 className={styles.header_section}>
                {section.name}
                <span>
                  <Button
                    onClick={() => selectSection(section)}
                    className={styles.add_components}
                  >
                    Add component
                  </Button>
                  <Button
                    onClick={() => deleteSection(section.id)}
                    className={styles.add_components}
                  >
                    Delete section
                  </Button>
                </span>
              </h3>
              <article className={styles.section}>
                {section.components.map((component) => {
                  const Element = ELEMENTS[component.element];
                  return <Element key={component.id} {...component} />;
                })}
              </article>
            </section>
          );
        })}
      </section>
      <Button className={styles.add_section} onClick={addSection}>
        +
      </Button>
    </section>
  );
};

export default FormBoard;
