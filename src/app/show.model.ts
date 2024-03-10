// these are the attributes that define a show object

export class Show {
    name: string; 
    description: string; 
    imageUrl: string;
    watch: string;
    actors: string;
    seasons: number;

    constructor(
        name: string, 
        description: string, 
        imageUrl: string, 
        watch: string, 
        actors: string,
        seasons: number
    ) 
        {
            this.name = name; 
            this.description = description; 
            this.imageUrl = imageUrl; 
            this.watch = watch;
            this.actors = actors; 
            this.seasons = seasons;
        }
}