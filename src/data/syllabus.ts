import { type SubjectDetailByName } from './subject-data-source';

export class Subject {
  id: string;
  name: string;
  highlyRecommendedPrerequisiteIds: string[];
  recommendedPrerequisiteIds: string[];
  recommendedSuccessorIds: string[];

  constructor(
    id: string,
    name: string,
    highlyRecommendedPrerequisiteIds: string[],
    recommendedPrerequisiteIds: string[],
    recommendedSuccessorIds: string[]
  ) {
    this.id = id;
    this.name = name;
    this.highlyRecommendedPrerequisiteIds = highlyRecommendedPrerequisiteIds;
    this.recommendedPrerequisiteIds = recommendedPrerequisiteIds;
    this.recommendedSuccessorIds = recommendedSuccessorIds;
  }
}

export class SyllabusReferenceError extends Error {
  override name = 'SyllabusReferenceError';
}

export class Syllabus {

  subjects: Subject[];

  constructor(subjectNameIdMap: Map<string, string>, subjectDetailsByName: SubjectDetailByName[]) {
    function getSubjectIdOrThrow(name: string): string {
      const id: string | undefined = subjectNameIdMap.get(name);
      if (id === undefined) {
        throw new SyllabusReferenceError(`Subject name ${name} not found.`);
      }
      return id;
    }
    this.subjects = subjectDetailsByName.map((subjectDetailByName) => {
      const subjectId: string = getSubjectIdOrThrow(subjectDetailByName.name);
      const name: string = subjectDetailByName.name;
      const highlyRecommendedPrerequisiteIds: string[] = subjectDetailByName.highlyRecommendedPrerequisiteNames.map((name) => {
        return getSubjectIdOrThrow(name);
      });
      const recommendedPrerequisiteIds: string[] = subjectDetailByName.recommendedPrerequisiteNames.map((name) => {
        return getSubjectIdOrThrow(name);
      });
      const recommendedSuccessorIds: string[] = subjectDetailByName.recommendedSuccessorNames.map((name) => {
        return getSubjectIdOrThrow(name);
      });
      return new Subject(subjectId, name, highlyRecommendedPrerequisiteIds, recommendedPrerequisiteIds, recommendedSuccessorIds);
    });
  }

  get(id: string): Subject {
    const filtered: Subject[] = this.subjects.filter((subject) => {
      return subject.id === id;
    });
    if (filtered.length === 0) {
      throw new SyllabusReferenceError(`Subject id ${id} not found.`);
    } else if (filtered.length >= 2) {
      throw new SyllabusReferenceError(`Multiple subjects found for id '${id}'. Expected exactly 1, but found ${filtered.length}.`);
    }
    return filtered[0];
  }

  has(id: string): boolean {
    return this.subjects.some((subject) => subject.id === id);
  }

}
