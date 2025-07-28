export interface Resume {
  id: string;
  userId: string;
  title: string;
  sections: ResumeSection[];
  createdAt: string;
  updatedAt: string;
}

export interface ResumeSection {
  id: string;
  type: SectionType;
  title: string;
  content: string | object;
}

export type SectionType = 'profile' | 'experience' | 'education' | 'skills' | 'projects' | 'custom';

export interface ResumeContextType {
  resumes: Resume[];
  currentResume: Resume | null;
  setCurrentResume: (id: string) => void;
  createResume: (title: string) => void;
  updateResume: (resume: Resume) => void;
  deleteResume: (id: string) => void;
}
