export function load() {
  const number = Math.floor(Math.random() * 10);
  console.log("In +page.server.js:", number);
  return {
    number,
  };
}
