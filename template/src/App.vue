<template>
  <div id="app">
    <div id="highlighted">
      <!-- Image Banner: Use the the data-bg-img functionality to create a simple image banner Use spacer classes to make the banner larger with padding, allows for easy responsive changes too see: elements-ctas.htm To make the banner full height/screen add the attributes: data-toggle="full-height" data-offset="#header" -->
      <div class="bg-white overlay overlay-primary overlay-op-7 text-center px-3 py-5 py-lg-10 flex-valign" data-bg-img="src/assets/img/backgrounds/young-man-standing-in-front-of-concrete-wall-picjumbo-com.jpg" data-css='{"background-position": "right bottom"}' data-toggle="full-height">
        <h2 class="display-4 text-white" data-animate="fadeIn" data-animate-delay="0.2">
          Choose <span class="font-weight-bold">to start building!</span>
        </h2>
        <h3 class="text-grey font-weight-normal" data-animate="fadeIn" data-animate-delay="0.35">
          Some random quote! 
        </h3>
        <hr class="hr-inverse hr-lg w-20 mx-auto my-4 mb-5" data-animate="fadeIn" data-animate-delay="0.45" />
        <div class="col-md-4 mx-auto">
          <form id="callback-form" action="#" role="form">
            <div class="input-group input-group-lg">
              <label class="sr-only" for="callback-number">Your Number</label>
              <input type="tel" class="form-control" id="callback-number" placeholder="Your Number">
              <span class="input-group-btn">
                <button class="btn btn-inverse" type="button">
                  <icon name="phone" scale="1" class="mr-md-1"></icon>
                  <span class="d-none d-lg-block text-sm">Get Callback</span></button>
              </span>
            </div>
            <small>or <a href="#content">find out more below</a></small>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
