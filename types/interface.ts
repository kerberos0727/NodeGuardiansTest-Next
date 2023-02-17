export interface IGuardianSummnaryData {
  id: number,
  skillTree: string,
  skill: string,
  title: string,
  difficulty: number,
  experience: number,
  gold: number,
  type: string,
  cover: string
}

export interface IGuardianFullData extends IGuardianSummnaryData{
  description: string,
  rewards: {
    experience: number,
    gold: number
  }
}