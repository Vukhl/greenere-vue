<template>
    <div class="blog-section">
      <div class="container">
       <div class="blog-heading-block">
          <div v-for="item in blogHeading" :key="item.id" class="blog-heading">
            <span v-if="item.text" :class="item.className" >{{ item.text }}</span>
            <button v-if="item.button" class="explore-button" >{{ item.button }}</button>
          </div>
       </div>
      </div>
    </div>
  </template>
  
  <script>
 export default {
  data() {
    return {
        blogHeading: [
          {id: 0, text: '50% OFF', className: 'OFF50'},
          {id: 1, text: 'Weekend Trendy Sofa', className: 'TrendySofa'},
          {id: 2, text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.', className: 'Description'},
          {id: 3, button: 'Explore More'},
        ]
    }
  }
}
  </script>
  
  <style scoped>
  .blog-section{
    background: url('/src/assets/images/50OFF.png') no-repeat center center;
    background-size: 100%;
    width: 100%;
    height: 100vh;
   }
  .blog-heading-block{
    width: 577px;
    text-align: center;
    padding-top: 317px;
    height: 384px;
  }

  .OFF50{
    color: #F3B705;
    font-weight: 800;
    font-size: 90px;
    opacity: 50%;
  }
  .TrendySofa{
    font-weight: 600;
    font-size: 60px;
    color: #264A51;
  }
  .Description{
    font-family: 'Mukta';
    font-weight: 400;
    font-size: 15px;
    width: 389px;
    height: 90px;
    margin: 0 auto;
    color: #335E74;
    padding-bottom: 24px;
    line-height: 173%;
    display: block;
  }
  </style>
  