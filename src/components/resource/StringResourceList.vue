<template>
  <div>
    <b-form-group v-for="(resource,index) in stringResources" :key="index">
        <b-form-group horizontal
                      :label-cols="1"
                      label="Name:"
                      description="Example: greetings">
          <b-row>
            <b-col sm="3">
              <b-form-input v-model="resource.name"></b-form-input>
            </b-col>
            <b-col>
              <DeleteButton v-on:click.native="deleteResource(index)"/>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group horizontal :label-cols="1" label="Value:" description="Example: Welcome to our application %s!">
          <b-form-textarea :rows="3" v-model="resource.value"></b-form-textarea>
        </b-form-group>
    </b-form-group>
    <b-button size="sm" variant="outline-success" v-on:click="addResource()">
      Add string resource +
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'StringResourceList',
  props: ['stringResources'],
  methods: {
    deleteResource: function (index) {
      this.stringResources.splice(index, 1)
    },
    addResource: function () {
      this.stringResources.push({})
    }
  }
}
</script>
