import { Employee, Team } from "../types/types";

export const getEmployeesWithSkill = (
  teams: Team[],
  skill: string
): Employee[] => {
  const employeesWithSkill: Employee[] = [];

  teams.forEach((team) => {
    team.employees.forEach((employee) => {
      if (employee.skills_being_developed.includes(skill)) {
        employeesWithSkill.push(employee);
      }
    });
  });

  return employeesWithSkill;
};
