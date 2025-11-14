export function generateRandomEmail(domain = "example.com") {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${randomString}@${domain}`;
}
