import { Course } from "../types/types";

export const transformCoursesTableData = (courses: Course[]): Course[] => {
  // for datagrid, it is necessary to have an id field
  return courses.map((course, index) => ({
    ...course,
    id: index + 1,
  }));
};
