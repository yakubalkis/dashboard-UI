export interface API_RESPONSE {
  data: {
    activity_hours: ActivityHour[];
    in_progress_courses: Course[];
    skills_in_development: Skill[];
    teams: Team[];
    top_employees: TopEmployee[];
    top_skills: Skill[];
    upcoming_courses: Course[];
    total_employees: number;
    total_completed_courses: number;
  };
}

export interface ActivityHour {
  date: string;
  exams_completed: number;
  hours: number;
  lessons_taken: number;
}

export interface Course {
  assigned_to: string;
  description: string;
  due_date: string;
  status: string;
  title: string;
  id?: number;
}

export interface Employee {
  current_score: number;
  email: string;
  lessons_taken: number;
  name: string;
  skills_being_developed: string[];
  title: string;
}

export interface TopEmployee {
  current_score: number;
  email: string;
  name: string;
  title: string;
}

export interface Skill {
  employees: number;
  skill: string;
}

export interface Team {
  description: string;
  employees: Employee[];
  overall_score: string;
  title: string;
  total_employee_count: number;
}

export interface ActivityHoursChartData {
  x_axis: { dates: string[] };
  y_axes: {
    examsCompleted: number[];
    hours: number[];
    lessonsTaken: number[];
  };
}
