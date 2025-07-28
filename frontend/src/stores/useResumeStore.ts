// src/stores/useResumeStore.ts
import { create } from 'zustand';
import { Resume } from '../types';

interface ResumeStore {
  resumes: Resume[];
  currentResume: Resume | null;
  setResumes: (resumes: Resume[]) => void;
  setCurrentResume: (resume: Resume | null) => void;
  addResume: (resume: Resume) => void;
  updateResume: (updated: Resume) => void;
  deleteResume: (id: string) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resumes: [],
  currentResume: null,
  setResumes: (resumes) => set({ resumes }),
  setCurrentResume: (resume) => set({ currentResume: resume }),
  addResume: (resume) =>
    set((state) => ({ resumes: [resume, ...state.resumes] })),
  updateResume: (updated) =>
    set((state) => ({
      resumes: state.resumes.map((r) =>
        r.id === updated.id ? updated : r
      ),
    })),
  deleteResume: (id) =>
    set((state) => ({
      resumes: state.resumes.filter((r) => r.id !== id),
    })),
}));
