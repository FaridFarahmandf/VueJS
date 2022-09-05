<template>
    <div class="modal-holder" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <slot>this is default slot!!! [when there were no tags in slot component</slot>
            <div class="links">
                <slot name="links"></slot>
            </div>
            <div class="links">
                <slot name="links2"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:["theme"],
        methods:{
            closeModal(){
                this.$emit("close")
            }
        }
    }
</script>

<style>
    .modal-holder {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        width:400px;
        padding: 10px;
        font-size: 15pt;
        background: white;
        border-radius:8px;
    }
    .modal h1 {
        color: coral;
    }
    .modal p{
        font-weight: bold;
    }
    .modal.sale{
        background: rgb(91, 192, 91);
        color: white;
    }
    .modal.sale h1{
        color: wheat;
    }
    .links{
        display: flex;
        justify-content: space-evenly;
    }
    .links a{
        border: 1px solid black;
        border-radius: 10px;
        padding: 15px;
        margin: 10px 0;
        font-size: 13pt;
        text-decoration: none;
        color: black;
    }
</style>