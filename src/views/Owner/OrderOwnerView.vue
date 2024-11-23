<script>
import profileImage from "@/assets/img/bikeicon.png";

export default {
  name: "OrderOwnerView",
  data() {
    return {
      checked: false,
      profileImage
    }
  }
}
</script>

<template>
  <div class="Order">
    <pv-card>
      <template #content>
        <div class="containerorder">

          <div class="profileImage">
            <pv-image class="profileImage" :src="profileImage"  alt="Profile Image" width="350" preview />
          </div>

          <div class="profiledescription">

            <div class="titleinformation">
              <h1>Tu Pedido </h1>
            </div>

            <div class="detailsorder">
              <p>Detalles del Pedido</p>
              <p>Nombre: XXXXXXXXXXX</p>
              <p>Plan X: XXXXXXXXXXX</p>
            </div>

            <div class="containerinformation">


              <div class="containerv2information">
              <div class="section1containerinformation">
                <p>Plan:</p>
                <p>Standard:</p>
                <p>Descuento:</p>
                <p>Subtotal:</p>
                <p>Total:</p>

              </div>

              <div class="section2containerinformation">
                <p>Subtotal</p>
                <p>S/ X</p>
                <p>S/ X</p>
                <p>S/ X</p>
                <p>S/ X</p>
              </div>

              </div>
              <pv-button class="buttonpaypal" label="Pagar" ><p>Pagar</p> <img class="paypalicon" src="../../assets/img/paypalicon.png" alt="Paypal" /></pv-button>

            </div>

          </div>


        </div>
      </template>
    </pv-card>

  </div>

</template>

<style scoped>
.menubar {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto; /* Define columns */
  align-items: center;
  padding: 0.1rem 0.5rem 0.1rem 1.5rem;
  background-color: #D9D9D9;
  border-radius: 1rem;
  /* Additional styling for responsiveness (optional) */
  overflow-x: auto; /* Enable horizontal scrollbar if content overflows */
}

.rideicon,
.profileicon {
  grid-column: 1;
}

.buttonheader,
.buttonsession {
  grid-column: 2;
}
.rideicon{
  width: 4rem;
  height: 4rem;

  margin-right: 1rem;
  margin-left: 1rem;
}

.profileicon{
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
  margin-left: 1rem;
  margin-bottom: 0.7rem;

}


.buttonheader{
  margin-right: 1rem;
  margin-left: 1rem;
  background-color: #D9D9D9;
  color: black;
  border-radius: 1rem;

  border: 0.1rem;
  padding: 0.5rem 4rem 1.5rem 1rem;
}

.buttonsession{
  margin-right: 1rem;

  background-color: #D9D9D9;
  color: black;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.5rem 1rem 1.5rem 0;
}

.inputbutton{
  padding: 0.5rem;

}


.arrowback{
  width: 2.5rem;
  height: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transform: rotate(180deg);
}

.containerplans{
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  display:flex;
  align-items: center;

}

.Order{
  justify-content: center;
  display:flex;
  align-items: center;
  grid-template-columns: 1fr 1fr;


  margin-left:10rem;
  margin-right: 10rem;
}

.containerorder{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  color: black;
}

.profiledescription{

  display: block;
  grid-column: 2/ -1;
  position: relative;


}
.titleinformation h1{
  margin: 2rem;
  text-align: center;
}

.containerv2information{


  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  width: 90%;
  border: solid;
  border-radius: 1rem;

  margin: auto;
  margin-top: 10px
}

.section1containerinformation{

  display: flex;
  grid-column: 1;
  display: block;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.section2containerinformation{

  display: block;
  grid-column: 2;

  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.detailsorder{

  margin-left:1rem;
  margin-right: 1rem;
  padding-top: 0.1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.1rem;
  border-radius: 1rem;
  display: block;
  border: solid;
}

.buttonpaypal{
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 4rem;
  margin-right: 1rem;
  background-color: #454545;
  color: white;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.1rem 1rem 0.1rem 1rem;

}

.paypalicon{
  width:20px;
  height:20px;
  margin:0;
  padding:0;
}


</style>