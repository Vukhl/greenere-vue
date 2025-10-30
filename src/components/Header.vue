<template>
   <!-- Левое меню -->
    <header class="main-block_header">
        <!--Логотип левого меню-->
            <div class="left-block_header"> 
                <nav class="logo-block_header">
                    <div v-for="logo in logoItems" :key="logo.id" class="logo-item">
                        <router-link to="/">
                            <img :src="logo.icon" :alt="logo.id" :class="Greenery">
                        </router-link>    
                    </div>
                </nav>
                <!--Динамическое меню-->
                <div class="nav-left-block_header">   
                     <div v-for="item in navItems" :key="item.name" class="nav-item">
                         <router-link v-if="item.href && !item.href.startsWith('#')" :to="item.href" class="nav-link">
                             <img :src="item.icon" :alt="item.name" :class="item.className">
                             <span class="nav-text">{{ item.name }}</span>
                         </router-link>
                         <a v-else-if="item.href && item.href.startsWith('#')" :href="item.href" @click="scrollToSection" class="nav-link">
                             <img :src="item.icon" :alt="item.name" :class="item.className">
                             <span class="nav-text">{{ item.name }}</span>
                         </a>
                         <a v-else href="#" class="nav-link">
                             <img :src="item.icon" :alt="item.name" :class="item.className">
                             <span class="nav-text">{{ item.name }}</span>
                         </a>
                     </div>
                </div>
            </div>

        <!-- Правая часть с фоном -->
      <div class="right-block_header">
          <div class="container">
           <!-- Блок авторизации и регистрации меню -->
             <div class="cont">
                <nav class="onr">
                  <div v-for="item in rightItems" :key="item.name" class="onr-item">
                      <a :href="item.href" class="onr-link">
                        <img :src="item.icon" :alt="item.name" class="onr-icon">
                        {{ item.name }}
                      </a>
                  </div>
                </nav>
               <!-- Блок c почтой и корзиной -->
                <nav class="two-block_header">
                  <div v-for="item in twoItems" :key="item.name" class="two-block_header-item">
                    <a :href="item.href">
                      <img :src="item.icon" :alt="item.name" class="two-block_header-icon">
                      {{ item.name }} 
                    </a>
                    <span class="two-block_header-nambers">
                      {{ item.nambers }}
                    </span>
                  </div>
                </nav>
              </div>
               <!-- Блок с текстом и кнопкой -->
               <div class="text-header">
                 <div v-for="item in textHeader" :key="item.text" class="text-header-item">
                   <span v-if="item.text" :class="item.className">{{ item.text }}</span>
                   <button v-if="item.button" :class="item.className">{{ item.button }}</button>
                 </div>
                <img src="/src/assets/images/gnutay.svg" alt="Image" class="image-header">
               </div>      
           </div>
       </div>
    </header>
    
</template>
  
  <script>
    export default {
        name: 'Header',
        data() {
    return {
      logoItems: [
        {id: 0, href: '/', icon: '/src/assets/images/Greenery.png', className: 'Greenery'},
      ],

      navItems: [
        {name: 'Home', href: '/', icon: '/src/assets/images/Vector.png', className: 'Home'},
        {name: 'Shop', href: '#product-section', icon: '/src/assets/images/Group (1).png', className: 'Shop'},
        {name: 'Blog', href: '#blog-section', icon: '/src/assets/images/Group (2).png', className: 'Blog'},
        {name: 'About us', href: '', icon: '/src/assets/images/Vector (6).png', className: 'About us'},
        {name: 'Gallery', href: '', icon: '/src/assets/images/Vector (7).png', className: 'Gallery'},
        {name: 'Location', href: '', icon: '/src/assets/images/Vector (8).png', className: 'Location'},
      ],
      
      rightItems: [
        {name: 'LOGIN', href: '', icon: '/src/assets/images/Vector (1).png', className: 'LOGIN'},
        {name: 'SIGN UP', href: '', icon: '/src/assets/images/Vector (2).png', className: 'SIGN UP'},              
      ],
      twoItems: [
        {name: 'MALIING LIST', href: '', icon:'/src/assets/images/Vector (3).png', className: 'MALIING LIST'},
        {name: 'SHARE', href: '', icon: '/src/assets/images/Vector (4).png', nambers: '12K', className: 'SHARE'},
        {name: 'CART', href: '', icon: '/src/assets/images/Vector (5).png', nambers: '05', className: 'CART'},
      ],
      textHeader: [
        {text: 'Save The Weekend', className: 'saved-text'},
        {text: 'Awesome design Best Furniture For Your Interior.', className: 'description-text'},
        {button: 'Explore More', className: 'explore-button'},
      ]
    }
  },
  methods: {
    scrollToSection(event) {
      event.preventDefault()
      const targetId = event.target.closest('a').getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}

  </script>
  
  <style scoped>
  .left-block_header  {
    width: 165px;
    display: flex;
    height: 810px;
    flex-direction: column;
    gap: 10px;
    font-family: "Open Sans";
    background: #002A32;
  }
  .logo-item {
    width: 94.56px;
    height: 42.7px;
    text-align: center;
    margin: 15px 15px;
    padding: 15px 15px;
} 
  .nav-left-block_header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #002A32;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 98px;
  }

  .nav-item:hover {
    background-color: #3C6C7F;
    width: 165px;
    height: 98px;
    transition: all 500ms ease;
  }

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #8999A1;
    gap: 5px;
    padding: 10px;
    transition: background-color 0.3s;
  }

  .nav-icon {
    width: 30px;
    height: 31px;  
  }
  .Gallery{
    width: 29.17px;
    height: 23.99px;
  }
  .nav-text {
    font-size: 15px;
    text-align: center;
    white-space: nowrap;
    font-family: Open Sans;
    font-weight: 600;
  }
  .right-block_header {
    background: url('/src/assets/images/MANU.png') no-repeat center center;
    background-size: 100%;
    height: 810px;
    width: 100%;
  }
  .cont {
    padding: 50px 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .onr{
    display: flex;
    gap: 25px;
    color: #3E5860;
    font-size: 16px;
    font-weight: 600;
  }
  .two-block_header {
    display: flex;
      gap: 25px;
      color: #3E5860;
      font-size: 16px;
      font-weight: 600;
  }
  .onr-item a {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #3E5860;
    font-size: 16px;
    font-weight: 600;
    flex-direction: row-reverse;
    text-decoration: none;
  }
  .two-block_header-item a {
    display: flex;
    gap: 12px;
    align-items: baseline;
    color: #3E5860;
    text-decoration: none;
  }
  .two-block_header-item {
    display: flex;
    flex-direction: row;
  }
  .two-block_header-nambers {
    color: #DD6060;
    font-size: 8px;
    position: relative;
    left: 3px;
    bottom: -9px;
  }
  .text-header {
    padding-top: 97px;
    }
  .saved-text {
    font-family: "Dancing Script", cursive;
    color: #4E6E77;
    font-size: 20px;
    width: 155px;
 }
 .description-text {
    font-family: 'Dosis';
    color: #264A51;
    font-size: 50px;
    width: 394px;
    font-weight: 600;
    display: block;
  }
 
  .image-header {
   top: -396px;
   position: relative;
   right: -677px;
  }
  </style>
  

