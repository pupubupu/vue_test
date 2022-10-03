export const huise = {
    methods:{
        showName(){
            console.log(this.name)
        }
    },
    mounted() {
        console.log("被调用了")
    }
}

export const huise2 = {
    data(){
        return{
            x:100,
            y:200
        }
    }
}