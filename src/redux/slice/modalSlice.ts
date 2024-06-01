import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../../types/types";

interface EmployeesWithSkillModalState {
  isOpen: boolean;
  employees: Employee[];
}

interface ModalState {
  employeeModal: EmployeesWithSkillModalState;
}

const initialState: ModalState = {
  employeeModal: {
    isOpen: false,
    employees: [],
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEmployeeModal: (state, action: PayloadAction<Employee[]>) => {
      state.employeeModal.isOpen = true;
      state.employeeModal.employees = action.payload;
    },
    closeEmployeeModal: (state) => {
      state.employeeModal.isOpen = false;
      state.employeeModal.employees = [];
    },
  },
});

export const { openEmployeeModal, closeEmployeeModal } = modalSlice.actions;
