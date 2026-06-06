export class SubjectService {

  private subjects: string[] = [];

  add(name: string): string {

    this.subjects.push(name);

    return name;
  }

  getAll(): string[] {

    return this.subjects;
  }
}