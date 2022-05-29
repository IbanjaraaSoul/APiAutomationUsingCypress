import * as sampleurl from "../fixtures/urls.json";
import * as samplCode from "../fixtures/HttpCodes.json";
import { apicall } from "../fixtures/Utility/functionList";
describe("Test https://serverest.dev/", () => {
  it("Get Users test", () => {
    apicall("GET", sampleurl.geturl).then((response) => {
      expect(response.status).to.be.eq(samplCode[200]);
      expect(response.body).to.have.property("usuarios");
    });
  });
  it("POST Users test", () => {
    cy.request({
      method: "POST",
      url: "/usuarios",
      form: true,
      body: {
        nome: "Fulano da Silva",
        email: "beltrano@qa.com.br",
        password: "teste",
        administrador: "true",
      },
    }).then((response) => {
      expect(response.status).to.be.eq(201);
    });
  });
});
