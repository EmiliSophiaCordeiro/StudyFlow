import { StudyService }
from "../src/StudyService";

describe("StudyService", () => {

  it("deve somar minutos", () => {

    const service =
      new StudyService();

    service.register(60);
    service.register(30);

    expect(
      service.getTotalMinutes()
    ).toBe(90);

  });

});