<template>
  <!--Блок товаров-->
  <div class="products-block">
    <div class="container">
        <!--Заголовок блока товаров-->
        <div class="heading-products">
          <h1 class="heading">Our Products</h1>
        </div>
        <!--Навигация товаров-->
        <div class="up-selector">
          <div v-for="item in navigation" :key="item.id" class="up-selector-item" >
            <button v-if="item.button" :key="item.id" @click="scrollToSectionButton(item)" class="up-selector-button">
              {{item.button}}
            </button>
          </div>
       </div>
       <div class="card-items-block">
        <!--Карточки товаров-->  
        <div v-for="item in products" :key="item.id" class="card-item">
            <div class="sale">
               <span class="sale-percent">20%</span>
               <span v-if="item.id !== 1" class="sale-new">New</span>
                <span v-if="item.id === 0 || item.id === 3" class="Out">Out of stock</span>
            </div>
            <div class="top">
              <a :data-fancybox="'gallery-' + item.id" :href="item.icon">
                <img :src="item.icon" alt="Product Image" class="product-image"></img>
              </a>
              <div class="bottom">
                <div v-for="action in bottomCard" :key="action.id" class="bottomCard"> 
                  <a href="#" @click.prevent="handleAction(action.id, item.id)">
                    <img :src="action.icon" alt="" class="bottom-icon">
                  </a>
                </div>
              </div>
            </div>
            <!--Цена товара-->
            <div class="price-item">
              <span class="text-item">{{item.name}} {{item.price}}</span>
              <img :src="bottomPrice[0].icon" alt="">
            </div>
          </div>
       </div>
    </div>
</div>
</template>
  
<script>
  export default {
    name: 'Products',
    data() {
        return {
            navigation: [
                {id: 0, button: 'Single Sofa', targetId: '#product-section'},
                {id: 1, button: 'Living Room', targetId: '#room-0'},
                {id: 2, button: 'Kitchen', targetId: '#room-3'},
                {id: 3, button: 'Bed Room', targetId: '#room-2'},
                {id: 4, button: 'Bath Room', targetId: '#product-section'},
                {id: 5, button: 'Decorations', targetId: '#product-section'},
                {id: 6, button: 'Ceramics', targetId: '#product-section'},
                
            ],
            products: [
              {
                id: 0, 
                icon: '/src/assets/images/single-sofa.png',
                name: 'Single Sofa',
                price: '£423.00',
                gallery: [
                  '/src/assets/images/single-sofa.png',
                  '/src/assets/images/single-sofa2.svg',
                  '/src/assets/images/single-sofa3.svg'
                ]
              },
              {
                id: 1, 
                icon: '/src/assets/images/single-sofa2.svg',
                name: 'Living Room Sofa',
                price: '£523.00',
                gallery: [
                  '/src/assets/images/single-sofa2.svg',
                  '/src/assets/images/single-sofa3.svg',
                  '/src/assets/images/single-sofa4.svg'
                ]
              },
              {
                id: 2, 
                icon: '/src/assets/images/single-sofa3.svg',
                name: 'Modern Sofa',
                price: '£623.00',
                gallery: [
                  '/src/assets/images/single-sofa3.svg',
                  '/src/assets/images/single-sofa4.svg',
                  '/src/assets/images/single-sofa5.svg'
                ]
              },
              {
                id: 3, 
                icon: '/src/assets/images/single-sofa4.svg',
                name: 'Luxury Sofa',
                price: '£723.00',
                gallery: [
                  '/src/assets/images/single-sofa4.svg',
                  '/src/assets/images/single-sofa5.svg',
                  '/src/assets/images/single-sofa6.svg'
                ]
              },
              {
                id: 4, 
                icon: '/src/assets/images/single-sofa5.svg',
                name: 'Premium Sofa',
                price: '£823.00',
                gallery: [
                  '/src/assets/images/single-sofa5.svg',
                  '/src/assets/images/single-sofa6.svg',
                  '/src/assets/images/single-sofa.png'
                ]
              },
              {
                id: 5, 
                icon: '/src/assets/images/single-sofa6.svg',
                name: 'Designer Sofa',
                price: '£923.00',
                gallery: [
                  '/src/assets/images/single-sofa6.svg',
                  '/src/assets/images/single-sofa.png',
                  '/src/assets/images/single-sofa2.svg'
                ]
              }
            ],
            bottomCard:[
              {id:0, icon: '/src/assets/images/Lupa.png'},
              {id:1, icon: '/src/assets/images/strelka.svg'},
              {id:2, icon: '/src/assets/images/serdechko.svg'},
              {id:3, icon: '/src/assets/images/korsinka.svg'}
            ],
            bottomPrice: [
              {id:0, text: 'Single Sofa £423.00', icon: '/src/assets/images/star.svg'},
            ]

        }
    },
    methods: {
      // Функция для плавной прокрутки к секции
      scrollToSectionButton(item) {
        // Определяем targetId на основе данных кнопки
        // Используем оператор || (ИЛИ) для выбора первого "истинного" значения:
        // 1. Если item.targetId существует - используем его
        // 2. Если нет - проверяем item.href
        // 3. Если и href нет - используем '#product-section' как значение по умолчанию
        const targetId = item.targetId
        
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        } else {
          console.warn(`Элемент с id "${targetId}" не найден`)
        }
      },
      
      handleAction(actionId, productId) {
        const product = this.products.find(p => p.id === productId);
        
        switch(actionId) {
          case 0: // Лупа - открыть галерею
            this.openGallery(product);
            break;
          case 1: // Стрелка - перейти к товару
            this.viewProduct(product);
            break;
          case 2: // Сердечко - добавить в избранное
            this.addToFavorites(product);
            break;
          case 3: // Корзина - добавить в корзину
            this.addToCart(product);
            break;
        }
      },
      
      openGallery(product) {
        // Создаем элементы для галереи Fancybox
        const galleryElements = product.gallery.map(image => {
          const link = document.createElement('a');
          link.href = image;
          link.setAttribute('data-fancybox', `gallery-${product.id}`);
          link.setAttribute('data-caption', product.name);
          return link;
        });
        
        // Добавляем элементы в DOM временно
        const tempContainer = document.createElement('div');
        tempContainer.style.display = 'none';
        galleryElements.forEach(el => tempContainer.appendChild(el));
        document.body.appendChild(tempContainer);
        
        // Открываем первую картинку
        galleryElements[0].click();
        
        // Удаляем временные элементы после открытия
        setTimeout(() => {
          document.body.removeChild(tempContainer);
        }, 100);
      },
      
      viewProduct(product) {
        console.log('Просмотр товара:', product.name);
        // Здесь можно добавить переход на страницу товара
      },
      
      addToFavorites(product) {
        console.log('Добавлено в избранное:', product.name);
        // Здесь можно добавить логику добавления в избранное
      },
      
      addToCart(product) {
        console.log('Добавлено в корзину:', product.name);
        // Здесь можно добавить логику добавления в корзину
      }
    }
  }
</script>
  
<style scoped>
.heading-products{
    text-align: center;
    padding: 25px;
    color: #264A51;
}

.up-selector{
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 25px;
    padding-bottom: 34px;
  }
  .up-selector-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 39px;
  }
  .up-selector-button{
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: #748289;
    border-radius: 3px;
    width: 145px;
    height: 39px;
    max-width: 135px;
    max-height: 27px;
    padding: 17px 17px;
    font-size: 17px;
    text-align: center;
    border: 2px solid white;
    background-color: #fff;
    font-family: 'Open Sans';
    font-weight: 400;
  }
  .up-selector-button:hover{
    border: 2px solid #3E5860;
    transition: all 300ms ease;
  }
  .card-items-block{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card-item{
    position: relative;
  }
  .top{
    box-shadow: 0px 0px 23px -6px rgba(34, 60, 80, 0.56);
    position: relative;
    width: 350px;
    height: 316px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
   .bottom{
    display: flex;
    gap: 16px;
  }
  .bottomCard{
    width: 38px;
    height: 38px;
    background: #71B3C6;
    border-radius: 2px;
  }
  .bottom-icon{
    position: relative;
    bottom: -9px;
    right: -8px;
  }
  .sale{
    position: absolute;
    right: 18px;
    top: 12px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
  }
  .sale-percent{
    background: #264A51;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-family: "Mukta";
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    color: #fff;
    text-indent: 1px;
    text-align: center;
    line-height: 38px;
  }
  .sale-new{
    background: #71B3C6;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-family: "Mukta";
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    color: #fff;
    text-indent: 1px;
    text-align: center;
    line-height: 38px;
  }
   .Out{
     width: 85px;
     height: 30px;
     line-height: 235%;
     font-family: 'Mukta';
     font-weight: 500;
     font-size: 12px;
     color: #fff;
     text-align: center;
     background: #264A51;
     border-top-left-radius: 2px;
     border-bottom-left-radius: 2px;
   }
  .price-item{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 12px;
    padding-bottom: 17px;
  }
  .text-item{
    font-family: "Mukta";
    color: #264A51;
    font-weight: 400;
    padding: 12px px;
    width: 111px;
    height: 40px;
    text-align: center;
    font-size: 15px;
    line-height: 133%;
  }
  
  .product-image {
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .product-image:hover {
    transform: scale(1.05);
  }
  
  .top a {
    display: block;
    overflow: hidden;
  }
</style>
  