import { Project } from '@data/interface/departmentsData';

export interface ProjectContentProps
  extends Omit<Project, 'projectName' | 'year'> {}
