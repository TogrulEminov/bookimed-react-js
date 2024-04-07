import { create } from 'zustand';

const FORM_STATE = {
  selectedIndex: 0,
  steps: {
    firstDoctors: {
      value: {
        img: '',
        name: '',
        dueDate: '',
        online: false,
        publish: true,
        year: {
          min: 1950,
          max: new Date().getFullYear(),
          current: new Date().getFullYear(),
        },
        speciality: '',
        language: '',
        video: '',
      },
    },
    secondInformation: {},
    thirdInformation: {},
  },
};

export const useFormStore = create((set) => ({
  formState: FORM_STATE,
  updateFormState: (newState) =>
    set((state) => ({
      formState: { ...state.formState, ...newState },
    })),
}));

export const useDoctors = create((set) => ({
  selectedIndex: 0,
  steps: {
    firstDoctors: {
      value: {
        img: '',
        name: '',
        dueDate: '',
        online: false,
        publish: true,
        year: {
        
        },
        speciality: '',
        language: '',
        video: '',
      },
    },
    secondInformation: {},
    thirdInformation: {},
  },
  updateDoctors: (step, data) =>
    set((state) => ({
      steps: { ...state.steps, [step]: data },
    })),
}));
