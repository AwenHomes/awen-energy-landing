/**
 * Problem statement data for the landing page
 * Describes customer pain points
 */

export interface Problem {
  iconPath: string;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    title: "Your Installer Went Bankrupt",
    description: "Over 100 solar companies failed in 2024 alone. You're left with no one to service your system or help with warranty claims."
  },
  {
    iconPath: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Equipment Is Still Under Warranty",
    description: "Your panels, inverters, or batteries are covered by manufacturer warranties—but you don't know how to file a claim without your installer."
  },
  {
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "The Process Is Confusing",
    description: "Which manufacturer? What documentation? Who will do the repair work? You're stuck in limbo with a broken system."
  },
  {
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Every Day Costs You Money",
    description: "A non-working solar system means higher electric bills. Every month without a fix is money out of your pocket."
  }
];
