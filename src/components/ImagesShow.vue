<template>
     
    <v-app>
       
  <div class="item1">
    <div class="one">
        <h2><img src="pic2.png" style="width: 50px">PICTURESQUE</h2>
        <h4>Explore , Search and Discover the World's<br> Most Stunning Images in the Lense of Picturesque </h4>
    </div>
    <div class="two">
        <img src="land.png" style="width: 600px;">
    </div>
  
  </div>

  <div class="item2">
    <h1 style="margin: 40px;">Easy to Use , Stylish PlaceHolders</h1>
    <p >Just Add your Desired image Size (width & height) and you'll get the random image</p>
    <p style="color: blue;background-color: #fff;width: 300px; margin-top: 20px;padding: 15px;margin-left: 140px">https://picsum.photos/200/300</p>
    <p style="margin-top: 20px;margin-left: 130px;">To get the squared Images just add the size</p>
    <p style="color: blue;background-color: #fff; width: 300px;margin-left: 140px;padding: 15px; margin-top:20px ;">https://picsum.photos/200/300</p>
    
  </div>
  <div class="item3">
    <div class="one " style="width: 350px;">
        <h2>GrayScale</h2>
        <p>To get grayscale append <span style="background-color: rgb(240, 240, 240); padding: 8px;">?grayscale</span> at the end</p>
        <p style="background-color: rgb(240, 240, 240); padding: 12px; color: blue;margin-top: 20px;">https://picsum.photos/200/300?grayscale</p>
        
    </div>
    <div class="two" style="margin-top: -180px;">
        <img src="grey.jpg">
    </div>

  </div>

  <div class="item4">
    
    <div class="two" style="margin-top: -140px; ">
        <img src="blur.jpg">
    </div>
    <div class="three " style="width: 350px;margin-top: -140px; margin-left: 80px; ">
        <h2>Blurred</h2>
        <p>To get blurred append <span style="background-color: rgb(240, 240, 240); padding: 10px; ">?blur</span> at the end</p>
        <p style="color: blue; margin-top: 20px;background-color: rgb(240, 240, 240); padding: 8px;">https://picsum.photos/200/300?blur</p>
        
    </div>

  </div>




    </v-app>
</template>
<script>


</script>
<style scoped>
.item1 {
    display: flex;
    align-items: center; 
    margin-left: 80px;
    margin-top: 80px;
    

}
.one{
    margin-top:-180px;
    margin-right: 140px;
}
.item2{
    background-color: rgb(237, 242, 247);
    padding-left: 350px;
    margin-top: 65px;
    height: 450px;
    padding-top:20px ;
}
.item3{
    display: flex;
    margin-top: 250px;
    margin-left: 150px;
}
.item4{
    display: flex;
    margin-top: 250px;
    margin-left:40px;
    margin-bottom: 100px;
}
</style>
