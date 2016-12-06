namespace imdbcrud.Controllers {

    export class HomeController {
        public pokemons;
        public nflplayers;
        public message = 'Hello from the home page!';
        public loginUser (){
        //    this.$http.post('/login').then((res)=>{
            // console.log(res);
            // })
        }
        constructor(private $http:ng.IHttpService){

            
            $http.get('/api/nflplayer').then((res)=>{
                this.nflplayers = res.data;
                console.log(res);
            })
        }
        
     }
        


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}