const MAX_DEX_ID = 151;

export function getRandomIds() {
  // Generate a random number between min and max
  const firstId = Math.floor(Math.random() * MAX_DEX_ID) + 1;

  // Generate a random number between min and max that is different from randomNumber1
  let secondId = Math.floor(Math.random() * MAX_DEX_ID) + 1;
  while (secondId === firstId) {
    secondId = Math.floor(Math.random() * MAX_DEX_ID) + 1;
  }

  return { firstId, secondId };
}
