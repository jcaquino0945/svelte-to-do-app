import { localStore } from './localStore'
import { writable } from 'svelte/store';

export const theme = localStore('theme', 'dark')
export const tasks = writable([
    { id: '0', title: 'Feed The Dogs!', description: 'Remember to feed phairo and phaira!', status: 'Pending'},
    { id: '1', title: 'Study UI/UX Design Best Practices', description: 'Catch up on saved ui/ux videos on coursera', status: 'Pending'},
    { id: '2', title: 'Meeting With Client', description: 'E-commerce App Test', status: 'Completed'},
]);
