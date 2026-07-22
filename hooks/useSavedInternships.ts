"use client";

import { useEffect, useState } from "react";

import { Internship } from "@/types/internship";

import {
  getSavedInternships,
  saveInternship,
  removeInternship,
} from "@/utils/localStorage";

export function useSavedInternships() {
  const [savedInternships, setSavedInternships] = useState<Internship[]>([]);

  useEffect(() => {
    setSavedInternships(getSavedInternships());
  }, []);

  function isSaved(id: number) {
    return savedInternships.some((internship) => internship.id === id);
  }

  function save(internship: Internship) {
    saveInternship(internship);

    setSavedInternships(getSavedInternships());
  }

  function remove(id: number) {
    removeInternship(id);

    setSavedInternships(getSavedInternships());
  }

  return {
    savedInternships,
    isSaved,
    save,
    remove,
  };
}
