import { SubjectService }
from "../src/SubjectService";

describe("SubjectService", () => {

  it("deve adicionar matéria", () => {

    const service =
      new SubjectService();

    expect(
      service.add("Matemática")
    ).toBe("Matemática");

  });

});