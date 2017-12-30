<template>
  <div id="app">
    <div id="highlighted">
      <!-- Image Banner: Use the the data-bg-img functionality to create a simple image banner Use spacer classes to make the banner larger with padding, allows for easy responsive changes too see: elements-ctas.htm To make the banner full height/screen add the attributes: data-toggle="full-height" data-offset="#header" -->
      <div class="bg-white overlay overlay-primary overlay-op-7 text-center px-3 py-5 py-lg-10 flex-valign" data-css='{"background-position": "right bottom"}' data-toggle="full-height">
        <h2 class="display-4 text-white">
          {{ name }}
        </h2>
        <h3 class="text-grey font-weight-normal my-4">
          Create something <span class="font-weight-bold">awesome!</span>
        </h3>
        <hr class="hr hr-lg w-20 mx-auto my-4 mb-5" />
        <div class="col-md-4 mx-auto">
            <a href="https://github.com/ronanversendaal/webpack-simple">
              <icon name="github" scale="3"></icon>
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
