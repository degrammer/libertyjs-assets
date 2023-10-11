
export interface Organizer {
    name: string;
    description?: string | undefined;
    photo: string;
}
const organizersList: Organizer[] = [
    {
        name: 'CF',
        description: 'Swagmaster and Web Wizard',
        photo: 'cf.jpg'
    },
    {
        name: 'Jenn Voss',
        description: 'Chief JavaScript Officer',
        photo: 'jennifer-voss.jpg'
    },
    {
        name: 'Kat Stracquatanio',
        description: 'Speakers',
        photo: 'kat-stracquatanio.jpg'
    },
    {
        name: 'Chelsea Simek',
        photo: 'chelsea_simek.jpeg',
    },
    {
        name: 'Monica Lucas',
        description: 'Professional Dot Connector',
        photo: 'monica.jpg',
    },
    {
        name: 'James Sacra',
        description: 'Party and happiness',
        photo: 'james-sacra.jpg'

    },
    {
        name: 'Qunicy Iheme',
        photo: 'quincy-iheme.jpg',
        description: 'Captain of the Code Crusaders'
    },

];

export {
    organizersList
}