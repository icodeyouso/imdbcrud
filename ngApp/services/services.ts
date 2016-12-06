namespace imdbcrud.Services {
    export class NflPlayer{
        public playerResource;
        public getPlayers(){
            this.playerResource.get().$promise;
        }
        constructor(private $resource){
            this.playerResource = $resource('/api/nflplayer');
        }
    }
    

    }
