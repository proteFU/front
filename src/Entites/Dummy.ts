interface Playlist {
    id: number;
    title: string;
    image: string;
    createdBy: string;
}

export const playlists: Playlist[] = [
    {
        id: 1,
        title: "pop",
        image: "https://picsum.photos/200/300",
        createdBy: "User"
    },
    {
        id: 2,
        title: "loves",
        image: "https://picsum.photos/200/300",
        createdBy: "User2"
    },
    {
        id: 3,
        title: "rock",
        image: "https://picsum.photos/200/300",
        createdBy: "User3"
    },
    {
        id: 4,
        title: "jazz",
        image: "https://picsum.photos/200/300",
        createdBy: "User4"
    }
]