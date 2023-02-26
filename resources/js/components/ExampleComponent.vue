<template>
  <div class="container">
    <background-component/>
    <!-- <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center mb-3">Contoh Axios</h1>
                <div class="card">
                    <div class="card-header">Contoh Axios</div>
                    <div class="card-body text-center">
                        <button class="mx-1 btn btn-success" @click="getData">GET</button>
                        <button class="mx-1 btn btn-primary" @click="postData">POST</button>
                        <button class="mx-1 btn btn-warning" @click="putData">PUT</button>
                        <button class="mx-1 btn btn-info" @click="patchData">PATCH</button>
                        <button class="mx-1 btn btn-danger" @click="deleteData">DELETE</button>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-header">Data</div>

                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div> -->
      <div>
      <title-component title="TOKO SEMBAKO BAROKAH SAKINAH MAWADAH WAROMAH"></title-component>
      </div>
    <td>
    <div>
      <router-link to="/product">
          <button-component text="Product"></button-component>
      </router-link>
    </div>
    </td>
    <td>
    <div>
      <router-link to="/cart">
        <button-component text="Cart"></button-component>
      </router-link>
    </div>
    </td>
  </div>
</template>

<script>
      export default {

      methods: {
          getData(){
              console.log("getdata component");
              this.$store.dispatch("getAllData")
          },
          
          postData(){
              let payload = {}
              payload.name = this.inputData,
              payload.id = 4
              this.$store.dispatch("postData", payload)
          },
          putData(){
              let payload = {}
              payload.name = this.inputData,
              payload.id = 1
              this.$store.dispatch("putData", payload)
          },
          patchData(){
              let payload = {}
              payload.name = this.inputData,
              payload.id = 1
              this.$store.dispatch("patchData", payload)
          },
          deleteData(){
              let payload = {}
              payload.id = this.inputData,
              this.$store.dispatch("deleteData", payload)
          },
          // productPage(){
          //     this.$store.dispatch("productPage", payload)
          // },
          // cartPage(){
          //     this.$store.dispatch("cartPage", payload)
          // }
      }}
  </script>