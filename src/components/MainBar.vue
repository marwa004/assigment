<template>
    <v-app-bar
        color="white"
        density="compact"
      >
        <template v-slot:prepend>
          <img src="pic2.png" style="width: 50px; ">
        </template>

        <v-app-bar-title>Picturesque</v-app-bar-title>

       
            <div >
          
            <v-btn to="/">Home </v-btn> 
          
          <v-btn to="/colour">Coloured Images</v-btn>
          <v-btn to="/blur">Blurred Images</v-btn>
          <v-btn to="/gray">GrayScale Images </v-btn>
            
        
    </div>       
      </v-app-bar>
      
  </template>
 
  