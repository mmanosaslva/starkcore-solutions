// plan-legal.md §3.2 and §3.3.3: the policy's effective date doubles as its version and is copied
// into the consent block of every form submission (T3.2). Update it whenever the policy changes.
// null while the draft is under legal review (T4.3): the page shows it as pending.
export const privacyPolicy = {
  path: '/privacidad',
  effectiveDate: null as string | null,
};
