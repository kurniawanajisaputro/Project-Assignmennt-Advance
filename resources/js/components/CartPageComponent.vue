<template>
    <div>
      <cart-list-component/>
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
      <td>
        <checkout-component/>
      </td>
    </div>
    
</template>

<script>

  </script>
