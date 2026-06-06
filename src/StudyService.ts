export class StudyService {

  private sessions: number[] = [];

  register(minutes: number): void {

    this.sessions.push(minutes);
  }

  getTotalMinutes(): number {

    return this.sessions.reduce(
      (acc, value) => acc + value,
      0
    );
  }
}