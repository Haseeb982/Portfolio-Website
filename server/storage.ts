import { users, type User, type InsertUser } from "@shared/schema";
import { projects, skills, messages } from "@shared/schema";
import type { Project, InsertProject, Skill, InsertSkill, Message, InsertMessage } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  // Projects
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Skills
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  // Projects
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.createdAt);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db
      .insert(projects)
      .values(project)
      .returning();
    return newProject;
  }

  // Skills
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.name);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db
      .insert(skills)
      .values(skill)
      .returning();
    return newSkill;
  }

  // Messages
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db
      .insert(messages)
      .values(message)
      .returning();
    return newMessage;
  }
    async getUser(id: number): Promise<User | undefined> {
        return await db.select().from(users).where(eq(users.id, id)).limit(1).then(result => result[0]);
    }

    async getUserByUsername(username: string): Promise<User | undefined> {
        return await db.select().from(users).where(eq(users.username, username)).limit(1).then(result => result[0]);
    }

    async createUser(insertUser: InsertUser): Promise<User> {
        const [newUser] = await db.insert(users).values(insertUser).returning();
        return newUser;
    }
}

export const storage = new DatabaseStorage();