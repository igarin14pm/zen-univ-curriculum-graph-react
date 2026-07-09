export class SyllabusReferenceError extends Error {
  override name = 'SyllabusReferenceError';
}

export interface Subject {
  id: string;
  name: string;
  highlyRecommendedPrerequisites: string[];
  recommendedPrerequisites: string[];
  recommendedSuccessors: string[];
}

export class Syllabus {

  static readonly mockSubjectIdMap = new Map<string, string>([
    ['科目A', 'SBJ-A'],
    ['科目B', 'SBJ-B'],
    ['科目C', 'SBJ-C'],
    ['科目D', 'SBJ-D'],
    ['科目E', 'SBJ-E'],
    ['科目F', 'SBJ-F'],
    ['科目K', 'SBJ-K'],
    ['科目L', 'SBJ-L']
  ]);

  static getSubjectIdByName(name: string): string {
    const id: string | undefined = this.mockSubjectIdMap.get(name);
    if (id === undefined) {
      throw new SyllabusReferenceError(`Subject name ${name} not found.`);
    }
    return id;
  }

  static generateSubject(
    name: string,
    highlyRecommendedPrerequisiteNames: string[],
    recommendedPrerequisiteNames: string[],
    recommendedSuccessorNames: string[]
  ): Subject {
    return {
      id: Syllabus.getSubjectIdByName(name),
      name: name,
      highlyRecommendedPrerequisites: highlyRecommendedPrerequisiteNames.map((name) => {
        return Syllabus.getSubjectIdByName(name);
      }),
      recommendedPrerequisites: recommendedPrerequisiteNames.map((name) => {
        return Syllabus.getSubjectIdByName(name);
      }),
      recommendedSuccessors: recommendedSuccessorNames.map((name) => {
        return Syllabus.getSubjectIdByName(name);
      })
    };
  }

  static readonly mockSubjects: Subject[] = [
    Syllabus.generateSubject('科目A', [], [], ['科目B', '科目D']),
    Syllabus.generateSubject('科目B', [], [], ['科目D']),
    Syllabus.generateSubject('科目C', [], [], ['科目E']),
    Syllabus.generateSubject('科目D', ['科目A'], ['科目B'], []),
    Syllabus.generateSubject('科目E', [], [], ['科目F']),
    Syllabus.generateSubject('科目F', ['科目D'], [], []),
    Syllabus.generateSubject('科目K', [], [], ['科目L']),
    Syllabus.generateSubject('科目L', [], [], [])
  ];

  static getSubjectById(id: string): Subject {
    const filteredSubject: Subject[] = Syllabus.mockSubjects.filter((subject) => {
      return subject.id === id;
    });
    if (filteredSubject.length === 0) {
      throw new SyllabusReferenceError(`Subject ID ${id} not found.`);
    } else if (filteredSubject.length >= 2) {
      throw new SyllabusReferenceError(`Multiple subjects found for id ${id}. Expected exactly 1, but found ${filteredSubject.length}.`);
    }
    return filteredSubject[0];
  }

}
