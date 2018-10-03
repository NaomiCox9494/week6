<template>
    <div class="col-xs-12">
        <header>
            <h1>Server Status: {{status}}</h1>
            <hr>
            <button @click="changeStatus">Change Status</button>
        </header>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                status: 'Just OK'
            }
        },
        methods: {
            changeStatus (){
                this.status = 'Fan-freaking-tastic'
            }
        }

    }
</script>

<style>

</style>