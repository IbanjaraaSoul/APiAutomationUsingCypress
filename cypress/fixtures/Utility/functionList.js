export function apicall(sampleMethod, sampleUri) {
  return cy.request(sampleMethod, sampleUri);
}
