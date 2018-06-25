<template>
  <div class="container-fluid clearfix">
    <div id="app">
    <b-container fluid style="margin-top: 15px">
      <b-row>
        <b-col sm="2">
          <nav id="navbar-example3" class="navbar navbar-light bg-light">
            <b-nav vertical>
              <b-nav-item :to="{name:'edit_resource', params:{'resourceName':'add'}}">Add new resource +</b-nav-item>
              <b-nav-item :to="{name:'edit_resource', params:{'resourceName':resourceName}}" v-for="(resourceName, index) in listResources" :key="index">{{resourceName}}</b-nav-item>
            </b-nav>
          </nav>
        </b-col>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

import {ResourceService} from './services/ResourceService'

export default {
  name: 'App',
  components: {},
  data: function () {
    let self = this
    ResourceService.getListResources().then(
      function (data) {
        self.listResources = data
      }
    )
    return {
      listResources: []
    }
  }
}
</script>
