<template>
    <div>
        <div>
        <button-component v-if="total>0" text="Checkout" color="green" @emitClick="showPopup = true"/>
        <button-component v-else text="Checkout" color="grey" @emitClick="checkout"/>
    <div>
        <div v-if="showPopup" class="popup-message">
        <h3>Total belanja anda Rp. {{ total }}</h3>
        <p>Konfirmasi pesanan anda</p>
        <button-component text="Iya" @emitClick="confirmOrder"/>
        <button-component text="Tidak" @emitClick="showPopup = false"/>
      </div>
      <div v-if="showConfirmation" class="popup-message">
        <p>Terima kasih telah berbelanja di toko barokah sakinah mawadah waromah</p>
        <button-component text="OK" @emitClick="showConfirmation = false"/>
      </div>
    </div>
    </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
      return {
        showPopup: false,
        showConfirmation: false
      };
    },
    computed: {
        ...mapGetters({
        total:"cartTotal"
    })
    },
  methods: {
    checkout() {
        alert("Belum Ada Pesanan");
          return;
    },
    confirmOrder() {
        this.showPopup = false;
        this.showConfirmation = true;
      }
}}

  </script>