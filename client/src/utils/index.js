import FileSaver from 'file-saver';
import {surpriseMePrompts} from '../constants';

export function getRandomPropt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const randomPropt = surpriseMePrompts[randomIndex];

    if (randomPropt === prompt) return getRandomPropt(prompt);

    return randomPropt;
}


export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo,  `download-${_id}.jpg`);
}
