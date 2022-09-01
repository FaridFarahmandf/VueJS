console.log("hello world");

const app = Vue.createApp({
    //data,function
    // template: "<h2>I am a inner Vue template</h2>"
    data() {
        return {
            author: "Farid Farahmand",
            age: 25,
            title: "Junior Front- End developer",
            showBook:false,
            buttonInner:"Show Content",
            x:0,
            y:0,
            books: [
                {author:"Stave Toltz", title:"The fraction of whole", img:"assets/1.jpg", isFav:true},
                {author:"Matt Heig", title:"the midnight library", img:"assets/2.jpg", isFav:true},
                {author:"George Orwell", title:"1984", img:"assets/nineteen-eighty-four-1984-george.jpg", isFav:false},
            ]
        }
    },

    methods: {
        // changeTitle(){
        //     this.title= "Architect";
        // },
        // changeTitleArg(title){
        //     this.title = title;
        // },
        // toggleShow(){
            // if(this.showBook === false){
            //     this.showBook = true;
            //     this.buttonInner = "Hide Content";
            // }else {
            //     this.showBook = false;
            //     this.buttonInner = "Show Content";
            // }
        //     this.showBook = !this.showBook;
        // }


        // eventHandler(e, number) {
        //     console.log(e, e.type);
        //     if(number){
        //         console.log('====================================');
        //         console.log(number);
        //         console.log('====================================');
        //     }
        // },
        // mouseMoveHandler(e){
        //     this.x = e.offsetX;
        //     this.y = e.offsetY;
        // }

        toggleClass(book){
            console.log(book.isFav);
            book.isFav = !book.isFav;
        }
    },

    computed: {
        filteredBooks(){
            return this.books.filter(b => b.isFav);
        }
    }
});

app.mount("#app");