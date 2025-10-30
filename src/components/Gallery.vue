<template>
<div class="gallery-slide">
    <div class="container">
        <div class="gallery-slide-body">
            <div v-for="galleryroom in gallerytext" :key="galleryroom.id" class="gallery-room" :id="'room-' + galleryroom.id">               
              <div class="text-gallery-block">
                <h1 class="titel-gallery">{{galleryroom.titel}}</h1>
                <p :class="getTextClass(galleryroom.id)">{{galleryroom.text}}</p>
                <button @click="scrollToSectionButton" class="explore-button">{{galleryroom.button}}</button>
              </div>
              <div class="img" :id="'img-'+ galleryroom.id"></div>
              <div class="square-text" :id="'square-text-block-'+ galleryroom.id">
                <a >{{ square[galleryroom.id].text }}</a>
              </div>
            </div>
        </div>
    </div>
</div>
</template>
  
<script>
  export default{
    name:'gallery',
    data() {
        return {
            gallerytext: [
                {
                  id: 0, 
                  titel: 'Living Room ItemsF', 
                  text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.', 
                  button: 'Read More'
                },
                {
                  id: 1, 
                  titel: 'Trendy Dining Table', 
                  text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.', 
                  button: 'View Items'
                },
                {
                  id: 2, 
                  titel: 'Modern Bed', 
                  text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.', 
                  button: 'View Items'
                },
                {
                  id: 3, 
                  titel: 'Populer kitchen Items', 
                  text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.', 
                  button: 'View Items'
                }
        ],
        square: [
            {
                id: 0,
                text: 'Living'
            },
            {
                id: 1,
                text: 'Dining'
            },
            {
                id: 2,
                text: 'Bed'
            },
            {
                id: 3,
                text: 'Kitchen'
            }
        ]
        }
    },
    methods:{
      getTextClass(id) {
        if (id===0) return 'first-text';
        if (id===1) return 'two-text';
        if (id===2) return 'three-text';
        if (id===3) return 'four-text';
        return '';
      }
    }
  }
</script>
  
<style scoped>

#room-0 {
  padding-top: 116px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 41px;
    position: relative;
}
#img-0 {
  background: url('/src/assets/images/fourthslide.svg');
  width: 599px;
  height: 599px;
}
#square-text-block-0{
  text-align: center;
    top: 508px;
    left: 536px;
    width: 129px;
    height: 148px;
    background: #71B3C6D9;
    border-radius: 3px;
    position: absolute;
}
.first-text{
  font-family: 'Mukta';
  font-weight: 400;
  font-size: 15px;
  width: 475px;
  margin: 0 auto;
  color: #335E74;
  padding-bottom: 24px;
}
#room-1{
  display: flex;
  align-items: center;
  padding-top: 116px;
  position: relative;
  gap: 78px;
  padding-bottom: 129px;
}
#img-1{
  background: url('/src/assets/images/four.svg');
    width: 626px;
    height: 416px;
}
#square-text-block-1{
  text-align: center;
    top: 326px;
    left: 416px;
    width: 129px;
    height: 148px;
    background: #71B3C6D9;
    border-radius: 3px;
    position: absolute;
}
.two-text{
  font-family: 'Mukta';
    font-weight: 400;
    font-size: 15px;
    width: 401px;
    margin: 0 auto;
    color: #335E74;
    padding-bottom: 24px;
}
#room-2{
  padding-top: 116px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 41px;
    position: relative;
    width: 1110px;
    height: 416px;
}
#img-2{
  background: url('/src/assets/images/modernbad.svg');
  width: 624px;
  height: 416px;
  background-repeat: no-repeat;
}
#square-text-block-2{
  text-align: center;
  top: 334px;
  left: 563px;
  width: 129px;
  height: 148px;
  background: #71B3C6D9;
  border-radius: 3px;
  position: absolute;
}
.three-text{
  font-family: 'Mukta';
  font-weight: 400;
  font-size: 15px;
  width: 389px;
  margin: 0 auto;
  color: #335E74;
  padding-bottom: 24px;
}
#room-3{
  display: flex;
    align-items: center;
    padding-top: 116px;
    position: relative;
    gap: 78px;
    padding-bottom: 129px;
}
#img-3{
  background: url('/src/assets/images/botomimg.svg');
    width: 612px;
    height: 408px;
    background-repeat: no-repeat;
}
.four-text{
  font-family: 'Mukta';
  font-weight: 400;
  font-size: 15px;
  width: 401px;
  margin: 0 auto;
  color: #335E74;
  padding-bottom: 24px;
}
#square-text-block-3{
  text-align: center;
    top: 326px;
    left: 416px;
    width: 129px;
    height: 148px;
    background: #71B3C6D9;
    border-radius: 3px;
    position: absolute;
}
.square-text a{
  font-size: 25px;
    text-align: center;
    color: #fff;
    padding: 34px 7px 0px 0px;
    line-height: 82px;
    display: block;
}
.text-gallery-block{
  text-align: center;
}
.titel-gallery{
  padding-bottom: 15px;
    font-weight: 600;
    font-size: 39px;
    color: #264A51;
}


</style>
  