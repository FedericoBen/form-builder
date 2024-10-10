import ELEMENTS from "../../../common/disctionary-components";
import Button from "../../../components/basics/button/Button";
import styles from "./FormBoard.module.css";

const FormBoard = ({ formSchema, selectSection, addSection }) => {
  return (
    <section className={styles.container_form_board}>
      <section className={styles.form_board}>
        {formSchema.map((section) => {
          return (
            <article
              onClick={() => selectSection(section)}
              className={styles.section}
              key={section.id}
            >
              <h3>{section.name}</h3>
              <div>
                {section.components.map((component) => {
                  const Element = ELEMENTS[component.element];
                  return <Element key={component.id} {...component} />;
                })}
              </div>
            </article>
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
