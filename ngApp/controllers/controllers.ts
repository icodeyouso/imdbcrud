namespace imdbcrud.Controllers {

    export class HomeController {
        public pokemons;
        public nflplayers;
        public nbaplayers;
        public message = 'Hello from the home page!';
        public loginUser;
        public f;
        public errFile;
        public errorMsg
        //    this.$http.post('/login').then((res)=>{
            // console.log(res);
            // })
        
        constructor(private $http:ng.IHttpService){

            
            $http.get('/api/nflplayer').then((res)=>{
                this.nflplayers = res.data;
                console.log(res);
            })
            $http.get('/api/nbaplayers').then((res)=>{
                this.nbaplayers = res.data;
                console.log(res);
            })
        }   
        
     }
        


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}