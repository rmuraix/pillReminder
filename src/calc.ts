// Return the date difference
function dateDiff(start: Date, end: Date): number {
  return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

function calcPillColor(days: number): string {
  let pillColor: string;
  if (days <= 6) {
    pillColor = "赤";
  } else if (days <= 11) {
    pillColor = "白";
  } else if (days <= 21) {
    pillColor = "オレンジ";
  } else {
    pillColor = "白";
  }

  return pillColor;
}

// Calculate how many days in a term
// A term is 28 days.
function calcProgressDay(diff: number): number {
  let progressDay: number;
  if (diff >= 29) {
    progressDay = (diff % (28 * Math.floor(diff / 28))) + 1;
  } else {
    progressDay = diff;
  }

  return progressDay;
}

module.exports = { dateDiff, calcPillColor, calcProgressDay };
