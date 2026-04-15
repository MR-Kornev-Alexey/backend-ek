import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('form_submissions')
export class FormSubmission {
  @PrimaryGeneratedColumn()
  id: number;

  // Связь с пользователем (внешний ключ на users.id)
  @Column({ name: 'user_id', type: 'int', nullable: true })
  userId: number;

  // Согласие
  @Column({ name: 'consent', type: 'boolean', default: false })
  consent: boolean;

  // Контактные данные
  @Column({ name: 'name', type: 'varchar', length: 255, nullable: true })
  name: string;

  // Вместо phone теперь email
  @Column({ name: 'email', type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ name: 'messenger', type: 'varchar', length: 100, nullable: true })
  messenger: string;

  @Column({
    name: 'messenger_account',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  messengerAccount: string;

  @Column({
    name: 'contact_time',
    type: 'enum',
    enum: ['morning', 'day', 'evening'],
    default: 'day',
  })
  contactTime: string;

  // Данные о ребёнке
  @Column({ name: 'child_name', type: 'varchar', length: 255, nullable: true })
  childName: string;

  @Column({ name: 'child_age', type: 'varchar', length: 50, nullable: true })
  childAge: string;

  // Энергетические опции
  @Column({ name: 'energy_options', type: 'json', nullable: true })
  energyOptions: string[];

  @Column({ name: 'energy_other', type: 'text', nullable: true })
  energyOther: string;

  // Уровень выгорания
  @Column({ name: 'burnout_level', type: 'int', default: 5 })
  burnoutLevel: number;

  // Опыт со специалистами
  @Column({
    name: 'prev_specialist',
    type: 'enum',
    enum: ['yes', 'no'],
    nullable: true,
  })
  prevSpecialist: string;

  @Column({
    name: 'prev_methods',
    type: 'enum',
    enum: ['yes', 'no'],
    nullable: true,
  })
  prevMethods: string;

  @Column({ name: 'prev_experience_details', type: 'text', nullable: true })
  prevExperienceDetails: string;

  // Страхи и сценарии
  @Column({ name: 'future_scenarios', type: 'json', nullable: true })
  futureScenarios: string[];

  @Column({ name: 'future_scenario_other', type: 'text', nullable: true })
  futureScenarioOther: string;

  // Приоритетные навыки
  @Column({ name: 'priority_skills', type: 'json', nullable: true })
  prioritySkills: string[];

  @Column({ name: 'priority_skill_other', type: 'text', nullable: true })
  prioritySkillOther: string;

  // Приоритеты в работе
  @Column({ name: 'work_priorities', type: 'json', nullable: true })
  workPriorities: string[];

  // Бюджет времени и денег
  @Column({
    name: 'daily_time_budget',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  dailyTimeBudget: string;

  @Column({ name: 'budget', type: 'varchar', length: 100, nullable: true })
  budget: string;

  // Готовность
  @Column({ name: 'readiness', type: 'varchar', length: 100, nullable: true })
  readiness: string;

  // Системные поля
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'ip_address', type: 'varchar', length: 45, nullable: true })
  ipAddress: string;
}
