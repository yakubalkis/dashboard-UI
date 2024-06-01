import React from "react";
import { Grid, Modal, IconButton, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { closeEmployeeModal } from "../../redux/slice/modalSlice";
import { EmployeeCard } from "../cards/employee-card/employee-card";

const StyledGridBox = styled(Grid)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "350px",
  paddingBottom: "10px",
  backgroundColor: "#f8f9fa",
  paddingRight: "15px",
  borderRadius: "10px",
  overflowY: "auto",
});

const CloseButton = styled(IconButton)({
  position: "fixed",
  top: "0px",
  right: "5px",
  zIndex: 1,
});

export const SharedEmployeesDetailModal: React.FC = () => {
  const modalState = useAppSelector((state) => state.modalSlice.employeeModal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeEmployeeModal());
  };

  const employeesCard = modalState.employees.map((employee) => {
    return <EmployeeCard key={employee.email} employee={employee} />;
  });

  return (
    <Modal open={modalState.isOpen} onClose={handleClose}>
      <StyledGridBox container spacing={2}>
        <CloseButton onClick={handleClose}>
          <CloseIcon color={"action"} />
        </CloseButton>

        {employeesCard}
      </StyledGridBox>
    </Modal>
  );
};
