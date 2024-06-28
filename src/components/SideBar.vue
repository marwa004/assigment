<template>
   <v-navigation-drawer expand-on-hover rail>
    <v-list>
        <!--This is avatar-->
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            
            title="Nicole"
          ></v-list-item>
        </v-list>
        <!---Contains an underlined item its like hr--> <v-divider></v-divider>
       
     <!--container for  icons --><v-list density="compact" nav>
     <!--icon1-->   <v-list-item
      prepend-icon="mdi-image" 
      title="Coloured gallery " 
      value="gallery"
      @click="selectOption(true)"></v-list-item>
     <!--Icon2-->   <v-list-item
      prepend-icon="mdi-dialpad" 
      title="Grayscale gallery" 
      value="grayscale"
      @click="selectOption(false)"></v-list-item>   



     </v-list>





   </v-navigation-drawer>
</template>
<script setup>
import { defineEmits } from 'vue' 

const emits= defineEmits(['selectOption']) 
//ussed emits instead of vuex 
const selectOption = (isColor)=>{
    emits("selectOption",isColor)
}
</script>
