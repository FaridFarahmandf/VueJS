<template>
    <div class="modal-holder">
        <div class="modal">
           <p>
               My Modal Content...
           </p> 
        </div>
    </div>
</template>

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
</style>