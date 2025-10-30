<template>
   <div class="mailing-block">
    <div class="container">
        <div class="mailing-slide-activ">
            <div class="mailing-slide-text">
                <h1 class="get-30">Get 30% Off</h1>
                <h2 class="Contrary">Contrary to popular belief, Lorem Ipsum is not simply  years old. Richard McClintock, a Latin.</h2>
            </div>
        <div class="Search-bar">             
                <form @submit.prevent="handleSubscribe" class="search">
                <div class="search-input-div">
                    <input 
                      class="search-input" 
                      id="email-input" 
                      type="email" 
                      name="email" 
                      v-model="email" 
                      placeholder="Enter Your Email" 
                      required
                      autocomplete="email"
                    >
                </div>
                <div class="search-button-div">
                    <button class="btn-search" type="submit">Subscribe</button>
                </div>
                </form>
            </div>
        </div>
    </div>
   </div> 
</template>
  
<script>
  export default {
    
    name: 'Mailing',
    data() {
        return {
          // Email пользователя для подписки
          email: '',
          // Массив подписчиков 
          mailingArray: []
        }
    },
    methods: {
      // Обработка отправки формы подписки
      handleSubscribe() {
        // Проверка email
        // .includes('@') - метод строки, который проверяет, содержит ли строка символ '@'
        // Возвращает true, если символ найден, и false, если нет
        // Пример: 'user@mail.com'.includes('@')  true
        //         'username'.includes('@')  false
        if (!this.email || !this.email.includes('@')) {
          alert('Пожалуйста, введите корректный email')
          return
        }
        console.log('Email для подписки:', this.email)
        
        // Пример: добавление в массив
        this.mailingArray.push({
          email: this.email
        })
        
        // Показать сообщение об успехе
        alert(`Спасибо! Вы подписались на рассылку: ${this.email}`)
        
        // Очистить поле ввода
        this.email = ''
        
        // Здесь можно отправить данные на сервер:
        // this.subscribeToNewsletter(this.email)
      }   
    }
  }
  
</script>
  
<style scoped>
  .mailing-block{
    background: url('/src/assets/images//fiveslidebackground.svg');
    height: 554px;
    background-size: 100%;
  }
  .mailing-slide-activ{
    text-align: center;
    width: 460px;
    margin: 0 auto;
    padding-top: 257px;
  }
  .get-30{
    font-size: 46px;
    line-height: 133%;
    color: #264A51;
  }
  .Contrary{
    font-family: 'Mukta';
    padding-top: 15px;
    line-height: 173%;
    font-weight: 400;
    font-size: 15px;
    color: #fff;
    width: 389px;
    margin: 0px 0px 0px 30px;
  }
.Search-bar{
    padding-top: 23px;
}
.search{
    display: flex;
    justify-content: center;
    width: 460px;
    height: 46px;
}
.search-input-div{
    position: relative;
    left: 68px;
}
.search-button-div{
    position: relative;
    left: -68px;
    width: 136px;
    height: 46px;
}
.search-input {
    background: #DAE5EE;
    color: #455E6578;
    border-radius: 50px;
    border: none;
    width: 460px;
    font-family: 'Mukta';
    height: 46px;
    padding-left: 20px; 
}
.search-input:focus{
    outline: none;
}

.search-input::placeholder {
    color: #455E6578; 
    opacity: 1; 
    
}
.btn-search {
    background: #264A51;
    color: #fff;
    border-radius: 50px;
    border: 0;
    width: 136px;
    font-family: 'Mukta';
    height: 46px;
    font-size: 17px;
    line-height: 173%;
    font-weight: 500;
}
.btn-search:hover {
    background: #223d43;
    color: #fff;
    transition: all 500ms ease;
}
</style>
  