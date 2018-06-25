<template>
  <div>
    <b-form-group v-for="(resource,resourceIndex) in pluralResources" :key="resourceIndex">
      <b-form-group horizontal
                    :label-cols="1"
                    label="Name:"
                    description="Example: numberOfSongsAvailable">
        <b-row>
          <b-col sm="3">
            <b-form-input v-model="resource.name"></b-form-input>
          </b-col>
          <b-col>
            <DeleteButton v-on:click.native="deleteResource(resourceIndex)"/>
          </b-col>
        </b-row>
      </b-form-group>
      <div v-for="(value, valueIndex) in resource.values" :key="valueIndex">
        <b-row>
          <b-col sm="4">
            <b-form-group v-if="valueIndex == 0" horizontal :label-cols="3" label="Quantity:" description="Example: one, two, other etc">
              <b-form-input v-model="value.quantity"/>
            </b-form-group>
            <b-form-group v-else horizontal :label-cols="3">
              <b-form-input v-model="value.quantity"/>
            </b-form-group>
          </b-col>
          <b-col sm="8">
            <b-form-group v-if="valueIndex == 0" horizontal :label-cols="1" label="Value:" description="Example: %d song found.">
              <b-row>
                <b-col sm="5">
                  <b-form-textarea :rows="1" v-model="value.value"/>
                </b-col>
                <b-col sm="2">
                  <DeleteButton v-on:click.native="deleteValue(resourceIndex, valueIndex)"/>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group v-else horizontal :label-cols="1">
              <b-row>
                <b-col sm="5">
                  <b-form-textarea :rows="1" v-model="value.value"/>
                </b-col>
                <b-col sm="2">
                  <DeleteButton v-on:click.native="deleteValue(resourceIndex, valueIndex)"/>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-button size="sm" variant="success" v-on:click="addValue(resourceIndex)">
        Add value +
      </b-button>

    </b-form-group>
    <b-button size="sm" variant="outline-success" v-on:click="addResource()">
      Add array resource +
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'PluralResourceList',
  props: ['pluralResources'],
  methods: {
    deleteResource: function (index) {
      this.pluralResources.splice(index, 1)
    },
    addResource: function () {
      let newLength = this.pluralResources.push({name: '', values: []})
      this.addValue(newLength - 1)
    },
    addValue: function (resourceIndex) {
      this.pluralResources[resourceIndex].values.push({name: '', values: []})
    },
    deleteValue: function (resourceIndex, valueIndex) {
      this.pluralResources[resourceIndex].values.splice(valueIndex, 1)
    }
  }
}
</script>
