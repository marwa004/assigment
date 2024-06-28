<template>
    <div class="one">
    <v-card

    class="mx-5 my-2 pa-2">
    <v-row>
        <v-col  v-for="n in 48" :key="n" cols="3" 
        ><v-hover v-slot="{isHovering,props}">
    <v-card
    :elevation="isHovering ? 12:2"
     v-blind="props"
     
    class="mx-5 my-2 pa-2">
           <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"          
           >
           <!--Displays a circular loader before images load  -->
           <template v-slot:placeholder>
          <v-row
            align="center"
            class="fill-height ma-0"
            justify="center"
          >
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </template><!--End of loader-->
        </v-img>
    </v-card>
</v-hover>
        </v-col>
    </v-row>
</v-card>
</div>
</template>
<script>
import {defineProps} from "vue"
const page= defineProps(["isWithColor"]);

const copyUrl=async(url)=>{
await navigator.clipboard.writeText(url)
}
export default{
    copyUrl,
    page
    
}
</script>
<style scoped>
.one{
    margin-top: 50px;
}
</style>