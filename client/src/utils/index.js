import { saveAs } from 'file-saver';

import { surpriseMePrompts } from '../constants';

export function getRandomPrompts(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    
    if (randomPrompt === prompt) return getRandomPrompts(prompt);
    
    return randomPrompt;
}

export function downloadImage(_id, photo) {
    saveAs(photo, `download-${_id}.jpg`);
}