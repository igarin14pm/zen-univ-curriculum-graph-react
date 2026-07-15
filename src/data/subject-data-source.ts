export const mockSubjectNameIdMap = new Map<string, string>([
  ['科目A', 'SBJ-A'],
  ['科目B', 'SBJ-B'],
  ['科目C', 'SBJ-C'],
  ['科目D', 'SBJ-D'],
  ['科目E', 'SBJ-E'],
  ['科目F', 'SBJ-F'],
  ['科目K', 'SBJ-K'],
  ['科目L', 'SBJ-L']
]);

export class SubjectDetailByName {

  name: string;
  highlyRecommendedPrerequisiteNames: string[];
  recommendedPrerequisiteNames: string[];
  recommendedSuccessorNames: string[];

  constructor(
    name: string,
    highlyRecommendedPrerequisiteNames: string[],
    recommendedPrerequisiteNames: string[],
    recommendedSuccessorNames: string[]
  ) {
    this.name = name;
    this.highlyRecommendedPrerequisiteNames = highlyRecommendedPrerequisiteNames;
    this.recommendedPrerequisiteNames = recommendedPrerequisiteNames;
    this.recommendedSuccessorNames = recommendedSuccessorNames;
  }

}

export const mockSubjectDetailsByName: SubjectDetailByName[] = [
  new SubjectDetailByName('科目A', [], [], ['科目B', '科目D']),
  new SubjectDetailByName('科目B', [], [], ['科目D']),
  new SubjectDetailByName('科目C', [], [], ['科目E']),
  new SubjectDetailByName('科目D', ['科目A'], ['科目B'], []),
  new SubjectDetailByName('科目E', [], [], ['科目F']),
  new SubjectDetailByName('科目F', ['科目D'], [], []),
  new SubjectDetailByName('科目K', [], [], ['科目L']),
  new SubjectDetailByName('科目L', [], [], [])
];
