<template>
  <div id="app">

    <div class="container-fluid parentPic">
      <div class="container">
        <div class="row">
          <div class="col-md-12">

             <div class="row">
                <div class="col-md-6 subCols"></div>
                <div class="col-md-1 subCols"></div>
                <div class="col-md-4 subCols rightCol">
                  <router-view></router-view>
                </div>
                <div class="col-md-1 subCols"></div>
             </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.subCols{
  display: flex;
  justify-content: center;
  align-items: center;
}
.parentPic{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("./assets/signUp-In_page_background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.rightCol{
  margin-top: 25px;
  background-color: rgba(10,10,150,0.2);
  border-radius: 5px;
  border: 1px grey solid;
}
</style>
