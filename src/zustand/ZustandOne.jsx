import { create } from 'zustand';

const FORM_STATE = {
  value: {
    img: '',
    name: '',
    online: false,
    degree:"",
    publish: true,
    year: {
      min: 1950,
      max: new Date().getFullYear(),
      current: new Date().getFullYear(),
    },
    speciality: [],
    language: [],
    video: '',
    doctorSpec: [],
    doctorAbout: '',
    CV: '',
  },
};

export const useFormStore = create((set) => ({
  initialIndex: 1,
  formState: FORM_STATE,
  nextForm: () => set((state) => ({ initialIndex: state.initialIndex + 1 })),
  prevForm: () => set((state) => ({ initialIndex: state.initialIndex - 1 })),
  updateFormState: (newState) =>
    set((state) => ({
      formState: { ...state.formState, ...newState },
    })),
}));

export const useCheckboxState = (key) => {
  const { formState, updateFormState } = useFormStore();

  return {
    checked: formState.value[key],
    onChange: (event) => {
      const { checked } = event.target;
      updateFormState({ value: { ...formState.value, [key]: checked } });
    },
  };
};
