import { create } from "zustand";
import INPUT_BASE_SCHEMA from "../../components/basics/input/constants";
import { SELECT_PROPS_BASE } from "../../common/dictionary-components";
import { persist, createJSONStorage } from "zustand/middleware";

const updateForm = (oldFormSchema, newSection) =>
  oldFormSchema.map((section) =>
    section.id !== newSection?.id ? section : newSection
  );

const useFormStore = create(
  persist(
    (set) => ({
      formSchema: [],
      sectionSelected: null,
      openMenu: false,
      addSection: () =>
        set((state) => ({
          ...state,
          formSchema: [
            ...state.formSchema,
            {
              id: crypto.randomUUID(),
              position: state.formSchema?.length,
              name: `Seccion ${state.formSchema?.length}`,
              components: [],
            },
          ],
        })),
      addComponent: () =>
        set((state) => {
          const newSection = {
            ...state.sectionSelected,
            components: [
              ...state.sectionSelected.components,
              {
                id: crypto.randomUUID(),
                position: state.sectionSelected.components.length,
                editmenuopen: false,
                name: `Input ${state.sectionSelected.components.length}`,
                ...INPUT_BASE_SCHEMA,
              },
            ],
          };
          return {
            ...state,
            formSchema: updateForm(state.formSchema, newSection),
            sectionSelected: newSection,
          };
        }),
      openMenuContainerComponent: (idComponent) =>
        set((state) => {
          const newSection = {
            ...state.sectionSelected,
            components: state.sectionSelected.components.map((component) =>
              component.id !== idComponent
                ? component
                : { ...component, editmenuopen: !component.editmenuopen }
            ),
          };
          return {
            ...state,
            formSchema: updateForm(state.formSchema, newSection),
            sectionSelected: newSection,
          };
        }),
      changeElementProperties: (value, idComponent, property) =>
        set((state) => {
          const newSection = {
            ...state.sectionSelected,
            components: state.sectionSelected.components.map((component) => {
              const propsChangeElement =
                property != "element"
                  ? null
                  : {
                      id: component.id,
                      position: component.position,
                      editmenuopen: component.editmenuopen,
                      name: `${value} ${component.position}`,
                      ...(SELECT_PROPS_BASE[value] ?? {}),
                    };

              return component.id !== idComponent
                ? component
                : propsChangeElement ?? { ...component, [property]: value };
            }),
          };
          return {
            ...state,
            formSchema: updateForm(state.formSchema, newSection),
            sectionSelected: newSection,
          };
        }),
      selectSection: (section) =>
        set((state) => ({
          ...state,
          sectionSelected: section,
          openMenu: true,
        })),
      setOpenMenu: (open) => set((state) => ({ ...state, openMenu: open })),
    }),
    {
      name: "FORM_SCHEMA",
    }
  )
);

export default useFormStore;
