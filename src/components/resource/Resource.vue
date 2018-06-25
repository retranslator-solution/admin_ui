<template>
  <b-card>
    <!--break into multiple components-->
    <b-form-group horizontal
                  :label-cols="1"
                  description="Enter resource name like: en, ru, kz, us etc"
                  label="Resource name">
      <b-form-input size="sm" v-model="resource.name"></b-form-input>
    </b-form-group>
    <b-tabs>
      <b-tab title="String resources">
        <br/>
        <StringResourceList v-bind:stringResources="resource.stringResources"/>
      </b-tab>
      <b-tab title="Array resources">
        <br/>
        <ArrayResourceList v-bind:arrayResources="resource.arrayResources"/>
      </b-tab>
      <b-tab title="Plural resources">
        <br/>
        <PluralResourceList v-bind:pluralResources="resource.pluralResources"/>
      </b-tab>
    </b-tabs>
    <br/>
    <b-button id="saveButton" size="md" variant="success" class="float-md-right" v-on:click="save">
      Save
    </b-button>
  </b-card>
</template>

<script>

import StringResourceList from './StringResourceList.vue'
import ArrayResourceList from './ArrayResourceList.vue'
import PluralResourceList from './PluralResourceList.vue'
import {ResourceService} from '../../services/ResourceService'

export default {
  name: 'AddNewResource',
  props: ['resourceName'],
  components: {StringResourceList, ArrayResourceList, PluralResourceList},
  data: function () {
    return {
      resource: {
        name: '',
        stringResources: [],
        arrayResources: [],
        pluralResources: []
      }
    }
  },
  methods: {
    save: function () {
      ResourceService.saveResource(this.resource).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    setResource: function (resource) {
      if (resource != null) {
        this.resource = resource
      } else {
        this.resource = {
          name: '',
          stringResources: [],
          arrayResources: [],
          pluralResources: []
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    // unfortunately vue-router didn't work with single component for multiple routes
    // https://github.com/vuejs/vue-router/issues/779
    if (to.params.resourceName !== 'add') {
      ResourceService.getResource(to.params.resourceName).then(
        function (resource) {
          next(function (vm) {
            vm.setResource(resource)
          })
        }
      )
    } else {
      next(function (vm) {
        vm.setResource(null)
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.setResource(null)
    if (to.params.resourceName !== 'add') {
      let self = this
      ResourceService.getResource(to.params.resourceName).then(
        function (resource) {
          self.setResource(resource)
          next()
        }
      )
    } else {
      next()
    }
  }
}
</script>

<style scoped>

</style>
