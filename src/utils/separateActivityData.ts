import { ActivityHour, SeparatedActivityData } from "../types/types";

export const separateActivityData = (
  activityHours: ActivityHour[]
): SeparatedActivityData => {
  const dates: string[] = [];
  const examsCompleted: number[] = [];
  const hours: number[] = [];
  const lessonsTaken: number[] = [];

  activityHours.forEach((activity) => {
    dates.push(activity.date);
    examsCompleted.push(activity.exams_completed);
    hours.push(activity.hours);
    lessonsTaken.push(activity.lessons_taken);
  });

  return {
    x_axis: { dates },
    y_axes: {
      examsCompleted,
      hours,
      lessonsTaken,
    },
  };
};
