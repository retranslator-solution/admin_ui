<template>
  <div>
    <b-form-group v-for="(resource,resourceIndex) in arrayResources" :key="resourceIndex">
      <b-form-group horizontal
                    :label-cols="1"
                    label="Name:"
                    description="Example: planets_array">
        <b-row>
          <b-col sm="3">
            <b-form-input v-model="resource.name"></b-form-input>
          </b-col>
          <b-col>
            <DeleteButton v-on:click.native="deleteResource(resourceIndex)"/>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group horizontal :label-cols="1" label="Value:" description="Example: Mercury, Venus, Earth etc">
        <b-row v-for="(value, valueIndex) in resource.values" :key="valueIndex">
          <b-col sm="10">
            <b-form-textarea :rows="1" v-model="value.value"/>
          </b-col>
          <b-col sm="2">
            <DeleteButton v-on:click.native="deleteValue(resourceIndex, valueIndex)"/>
          </b-col>
        </b-row>
        <b-button size="sm" variant="success" v-on:click="addValue(resourceIndex)">
          Add value +
        </b-button>
      </b-form-group>
    </b-form-group>
    <b-button size="sm" variant="outline-success" v-on:click="addResource()">
      Add array resource +
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ArrayResourceList',
  props: ['arrayResources'],
  methods: {
    deleteResource: function (index) {
      this.arrayResources.splice(index, 1)
    },
    addResource: function () {
      let newLength = this.arrayResources.push({name: '', values: []})
      this.addValue(newLength - 1)
    },
    addValue: function (resourceIndex) {
      this.arrayResources[resourceIndex].values.push({name: '', values: []})
    },
    deleteValue: function (resourceIndex, valueIndex) {
      this.arrayResources[resourceIndex].values.splice(valueIndex, 1)
    }
  }
}
</script>
