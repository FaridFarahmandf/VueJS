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
            buttonInner:"Show Content"
        }
    },

    methods: {
        changeTitle(){
            this.title= "Architect";
        },
        changeTitleArg(title){
            this.title = title;
        },
        toggleShow(){
            // if(this.showBook === false){
            //     this.showBook = true;
            //     this.buttonInner = "Hide Content";
            // }else {
            //     this.showBook = false;
            //     this.buttonInner = "Show Content";
            // }
            this.showBook = !this.showBook;
        }
    }
});

app.mount("#app");