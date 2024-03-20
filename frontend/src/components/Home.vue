<template>
  <el-containter style="display: flex;height: 100vh;" diraction="column">
    <el-header style="display: flex" diraction="row">
      <router-link active-class="active" to="/" style="width: 100%;height: 100%;align-items:start ;
                  justify-content: start;padding-left: 0;font-size: 22px;text-decoration: none;
                  margin: 0px;padding: 0px;color: rgb(252, 252, 252);">主页面</router-link>
      <router-link active-class="active" to="/Knowledge_Graph" style="width: 100%;height: 100%;font-size: 22px;
                  align-items: flex-start;padding-left: 0;justify-content: start;text-decoration: none;
                  margin: 0px;padding: 0px;color: rgb(252, 252, 252);">知识图谱展示</router-link>
      <router-link active-class="active" to="/entity" style="width: 100%;height: 100%;font-size: 22px;
                  align-items: space-between;padding-left: 0;justify-content: start;text-decoration: none;
                  margin: 0px;padding: 0px;color: rgb(252, 252, 252);">实体抽取</router-link>
      <router-link active-class="active" to="/relationship_extract" style="width: 100%;height: 100%;font-size: 22px;
                  align-items: space-between;padding-left: 0;justify-content: start;text-decoration: none;
                  margin: 0px;padding: 0px;color: rgb(252, 252, 252);">关系抽取</router-link>
      <router-link active-class="active" to="/query" style="width: 100%;height: 100%;font-size: 22px;
                  align-items: space-between;padding-left: 0;justify-content: start;text-decoration: none;
                  margin: 0px;padding: 0px;color: rgb(252, 252, 252);">用户查询</router-link>
    </el-header>
    <el-main id="cesiumContainer">
    </el-main>
  </el-containter>
</template>

<script>
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
export default {
  name: 'Home',
   data () {
    
   },
   mounted(){
     window.CESIUM_BASE_URL = '/static/Cesium/';
     Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NTJjNzU1OC0wZjZiLTQyMWUtOTQ3OC02NDkwMGFlNGM2YTUiLCJpZCI6MTk5NzU2LCJpYXQiOjE3MDk2MzA2NTN9.E4SaSmjx0Q4kh_8jC2jS8OLscGRn2mRh_Kscv-UFKx0';
     const viewer = new Cesium.Viewer("cesiumContainer", {
        fullscreenButton: false,
        baseLayerPicker: false,
        CreditsDisplay: false,
        animation: false, 
        timeline: false,
        homeButton:false,  //home按钮
        geocoder: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        infoBox: false,
        vrButton: false,
        shadows: false,
      });
   } 
}
</script>

<style scoped>

 #cesiumContainer{
  left: 0px;
  right: 0;
  top: 60px;
  bottom: 0;
  margin: 0px;
  padding: 0px;
  
 }
 .el-header{
   width: 100%;
   height: 110% ;
   position: relative;
   background-color:rgb(1, 1, 176);
   opacity: 0.7;
   color: rgb(11, 11, 238);
 }


 .el-main{
  position: absolute;
  left: 0px;
  right: 0;
  top: 60px;
  bottom: 0;
 }
 </style>
