export class SubmitFormDto {
  consent: boolean;
  name: string;
  email: string;
  messenger: string;
  messengerAccount: string;
  contactTime: string;
  childName: string;
  childAge: string;
  energyOptions: string[];
  energyOther: string;
  burnoutLevel: number;
  prevSpecialist: string;
  prevMethods: string;
  prevExperienceDetails: string;
  futureScenarios: string[];
  futureScenarioOther: string;
  prioritySkills: string[];
  prioritySkillOther: string;
  workPriorities: string[];
  dailyTimeBudget: string;
  budget: string;
  readiness: string;
}