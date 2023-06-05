function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (const asteroid of asteroids) {
    let collision = false;
    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
      if (stack[stack.length - 1] === -asteroid) {
        stack.pop();
        collision = true;
        break;
      } else if (stack[stack.length - 1] < -asteroid) {
        stack.pop();
        continue;
      } else if (stack[stack.length - 1] > -asteroid) {
        collision = true;
        break;
      }
    }

    if (!collision) stack.push(asteroid);
  }

  return stack;
}

export { asteroidCollision };
