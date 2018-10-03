<template>
      <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-Header-Global></app-Header-Global>
            </div>
        </div>
        <hr>
     <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
            <li>
            <server-Local class="list-group-item" v-for="index in 5"></server-Local>
            </li>
            </ul>
        </div>
         <div class="col-xs-12 col-sm-6">
            <serverDetails-Local></serverDetails-Local>
         </div>
    </div>
          <hr>
      <div class="row">
          <div class="col-xs-12">
              <app-Footer-Global></app-Footer-Global>
          </div>
      </div>
      </div>
</template>

<script>

    import Server from './components/Server/Server.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            'server-Local': Server,
            'serverDetails-Local': ServerDetails
        }
    }
</script>

<style>

</style>
