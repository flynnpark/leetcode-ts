class RecentCounter {
  queue: number[] = [];

  ping(t: number): number {
    while (this.queue.length && this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    this.queue.push(t);
    return this.queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

export { RecentCounter };
