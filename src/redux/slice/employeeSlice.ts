import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "../../types/types";

interface EmployeesState {
  teams: Team[];
}

interface ModalState {
  data: EmployeesState;
}

const initialState: ModalState = {
  data: {
    teams: [],
  },
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setTeams(state, action: PayloadAction<Team[]>) {
      state.data.teams = action.payload;
    },
  },
});

export const { setTeams } = employeeSlice.actions;
