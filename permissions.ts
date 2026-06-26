export const canView = (u: { role: string }) => true;
export const canEdit = (u: { role: string }) => u.role === 'editor';
