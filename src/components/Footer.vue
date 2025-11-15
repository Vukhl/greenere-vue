<template>
    <footer class="footer-block">
        <div class="container">
           <div class="footer-content">
            <div class="footer-block-content">
                <a href=""><img src="/src/assets/images/greenery-footer.svg" alt="Footer Logo"></a>
                <p class="footer-block-content-text">Contrary to popular belief, Lorem Ipsum is not simply  years old Latin.</p>
               <div class="soc">
                    <div v-for="Links in footerLinks" :key="Links.id" class="">
                        <a href="" :class="Links.className" ><img :src="Links.icon" alt="" :class="Footericon(Links.id)"></a>
                    </div>
               </div>
            </div>
            <div class="Investigate">
                <p class="explore">Explore</p>
                <a href="" class="text-exploer">About Us</a>
                <a href="" class="text-exploer">Survices</a>
                <a href="" class="text-exploer">Our Team</a>
                <a href="" class="text-exploer">Trendy</a>
                <a href="" class="text-exploer">Gallery</a>
            </div>
            <div class="Contact">
                <p class="Contact-us">Contact Us</p>
                <p class="Contact-us1">45 Tooring High SL London SA17 United kingdoom</p>
                <p class="Contact-us2">018123456789 petroger456@gmail.com</p>
            </div>
            <div class="Hours">
                <p class="survice-hours">Survice Hours</p>
                <a><img src="/src/assets/images/Hours.svg" alt="" class="hours-img"></a>
            </div>
           </div>
        </div>
        <div class="footer-text">
            <p class="exit">© 2021 Greenery. All Right Reserved</p>
        </div>
    </footer>
</template>
  
<script>
  export default {
    name: 'Footer',
    data() {
        return {
            footerLinks: [
                {id: 0, icon: '/src/assets/images/facebook.svg', href: '#', className: 'Facebook'},
                {id: 1, icon: '/src/assets/images/instagram.svg', href: '#', className: 'Instagram'},
                {id: 2, icon: '/src/assets/images/twetter.svg', href: '#', className: 'Twetter'},
                {id: 3, icon: '/src/assets/images/youtube.svg', href: '#', className: 'Youtube'},
            ]

        }
    },
    methods:{
        Footericon(id) {
            if (id===0) return 'icon-facebook';
            if (id===1) return 'icon-instagram';
            if (id===2) return 'icon-twetter';
            if (id===3) return 'icon-youtube';
        }
    }
  }
 
</script>
  
<style scoped>
.footer-content{
    width: 1086px;
    padding-bottom: 45px;
    display: flex;
    justify-content: space-around;
}
.footer-block{
    padding-top: 116px;
}
.footer-block-content {
    width: 327px;
 }
.footer-block-content-text{
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    color: #335E74;
    line-height: 173%;
    padding-top: 12px;
}
.soc{
    width: 181px;
    display: flex;
    gap: 11px;
    padding-top: 19px;   
}
.Facebook{
    display: block;
    background: #3A5B62;
    width: 37px;
    border-radius: 50%;
    height: 37px;
    text-align: center;
}
.Instagram{
    display: block;
    border: 1px solid #d4dbdd;
    border-radius: 50%;
    height: 37px;
    width: 37px;
    text-align: center;
}
.Twetter{
    display: block;
    border: 1px solid #d4dbdd;
    border-radius: 50%;
    height: 37px;
    width: 37px;
    text-align: center;
}
.Youtube{
    display: block;
    border: 1px solid #d4dbdd;
    border-radius: 50%;
    height: 37px;
    width: 37px;
    text-align: center;
}
.icon-facebook{
    position: relative;
    bottom: -8px;
}
.icon-instagram{
    left: -1px;
    position: relative;
    bottom: -7px;
}
.icon-twetter{
    position: relative;
    bottom: -8px;
}
.icon-youtube{
    left: -1px;
    position: relative;
    bottom: -7px;
}
.Investigate{
    display: flex;
    flex-direction: column;
}
.explore{
    padding-bottom: 19px;
    color: #264A51;
    font-family: 'Mukta';
    font-weight: 700;
    font-size: 25px;
}
.text-exploer{
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #335E74;
    text-decoration: none;
}
.Contact{
    width: 229px
}
.Contact-us{
    font-family: 'Mukta';
    font-weight: 700;
    font-size: 25px;
    color: #264A51;
    padding-bottom: 19px;
}
.Contact-us1{
    font-family: 'Mukta';
    font-weight: 400;
    font-size: 14px;
    color: #335E74;
    padding-bottom: 20px;
}
.Contact-us2{
    font-family: 'Mukta';
    font-weight: 400;
    font-size: 14px;
    color: #335E74;
}
.survice-hours{
    font-family: 'Mukta';
    font-weight: 700;
    font-size: 25px;
    color: #264A51;
    padding-bottom: 25px;
}
.hours-img{
    background: #A0C7EA;
    width: 215px;
    height: 134px;
    border-radius: 7px;
    padding: 0px 0px 2px 19px;
}
.footer-text{
    height: 40px;
    margin: auto;
    text-align: center;
}
.exit{
    text-align: center;
    font-family: 'Open Sans';
    font-size: 10px;
    line-height: 40px;
    height: 40px;
    width: 1860px;
    background: #D3E2EF;
    color: #335E74;
    font-weight: 400;
}
    
</style>
  