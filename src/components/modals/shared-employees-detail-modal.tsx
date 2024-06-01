import {
  Card,
  CardContent,
  Grid,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { closeEmployeeModal } from "../../redux/slice/modalSlice";

export const StyledGridBox = styled(Grid)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "350px",
  backgroundColor: "#f8f9fa",
  paddingRight: "15px",
  borderRadius: "10px",
  overflowY: "auto",
});

export const SharedEmployeesDetailModal: React.FC = () => {
  const modalState = useAppSelector((state) => state.modalSlice.employeeModal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeEmployeeModal());
  };

  const employeesCard = modalState.employees.map((employee) => {
    return (
      <Grid key={employee.email} item xs={12} sm={6} md={4} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="body2" fontWeight={600} component="div">
              {employee.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography variant="body2" component={"span"} color="black">
                Email:
              </Typography>{" "}
              {employee.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography variant="body2" component={"span"} color="black">
                Score:
              </Typography>{" "}
              {employee.current_score}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography variant="body2" component={"span"} color="black">
                Lessons Taken:
              </Typography>{" "}
              {employee.lessons_taken}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography variant="body2" component={"span"} color="black">
                Skills:
              </Typography>{" "}
              {employee.skills_being_developed.join(", ")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Modal open={modalState.isOpen} onClose={handleClose}>
      <StyledGridBox container spacing={2}>
        {employeesCard}
      </StyledGridBox>
    </Modal>
  );
};
