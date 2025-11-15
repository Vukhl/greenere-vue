<template>
   <div class="mailing-block">
    <div class="container">
        <div class="mailing-slide-activ">
            <div class="mailing-slide-text">
                <p class="get-30">Get 30% Off</p>
                <p class="Contrary">Contrary to popular belief, Lorem Ipsum is not simply  years old. Richard McClintock, a Latin.</p>
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
                      v-on:input="inputChangeHandler"
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
            <p v-if="inputValue.length !== 0" class="binding">Вы ввели: {{inputValue}}</p>
            <ul class="list">
              <li v-for="(array, idx) in mailingArray" class="list-item">
                {{ array }}
                <button class="delete" @click="deleteItem(idx)">Delete</button>
              </li>
            </ul>
            <p v-if="inputValue.length === 0 && mailingArray.length === 0" class="listText">Почты пока нет. Добавте первую</p>
            <hr/>
            <li class="listText">
              <strong>Общее колличество почты: {{mailingArray.length}}</strong> | Удвоенное: {{ doublemailing }}
            </li>
        </div>
    </div>
   </div> 
</template>
  
<script>
  export default {
    
    name: 'Mailing',
    data() {
        return {
          inputValue: '',
          // Email пользователя для подписки
          email: '',
          // Массив подписчиков 
          mailingArray: []
        }
    },
    methods: {
      inputChangeHandler(event) {
        this.inputValue = event.target.value || ''
      },
     deleteItem(idx) {
      this.mailingArray.splice(idx, 1)
     },
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
        
        // Добавление email в массив (как строку, а не объект)
        this.mailingArray.push(this.email)
        
        // Показать сообщение об успехе
        alert(`Спасибо! Вы подписались на рассылку: ${this.email}`)
        
        // Очистить поле ввода
        this.email = ''
        this.inputValue = ''
        
        // Здесь можно отправить данные на сервер:
        // this.subscribeToNewsletter(this.email)
      }   
    },
    computed: {
      doublemailing() {
        return this.mailingArray.length * 2
      }
    }
  }
  
</script>
  
<style scoped>
  .mailing-block{
    background: url('/src/assets/images//fiveslidebackground.svg');
    height: 554px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .mailing-slide-activ{
    text-align: center;
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
    padding: 257px 20px 20px;
    box-sizing: border-box;
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
    width: 100%;
    max-width: 389px;
    margin: 0 auto;
  }
.Search-bar{
    padding-top: 23px;
}
.search{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 460px;
    height: 46px;
    margin: 0 auto;
    position: relative;
}
.search-input-div{
    position: relative;
    flex: 1;
    width: 100%;
}
.search-button-div{
    position: absolute;
    right: 0;
    width: 136px;
    height: 46px;
    z-index: 1;
}
.search-input {
    background: #DAE5EE;
    color: #455E6578;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-family: 'Mukta';
    height: 46px;
    padding-left: 20px;
    padding-right: 150px;
    box-sizing: border-box;
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
    width: 100%;
    font-family: 'Mukta';
    height: 46px;
    font-size: 17px;
    line-height: 173%;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
}
.btn-search:hover {
    background: #223d43;
    color: #fff;
    transition: all 500ms ease;
}
.binding{
  color: #fff;
  text-align: justify;
  width: 100%;
  max-width: 500px;
  display: block;
  padding-top: 13px;
  margin: 0 auto;
  word-wrap: break-word;
}
.list{
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
}
.list-item{
  color: #fff;
  text-align: justify;
  width: 100%;
  display: block;
  padding-top: 13px;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.delete{
  background: #264A51;
  color: #fff;
  border-radius: 50px;
  border: 0;
  width: 100%;
  max-width: 136px;
  font-family: 'Mukta';
  height: 46px;
  font-size: 17px;
  line-height: 173%;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
}
.listText{
  color: #fff;
  text-align: justify;
  width: 100%;
  max-width: 500px;
  display: block;
  padding-top: 13px;
  margin: 0 auto;
  word-wrap: break-word;
}

/* Планшеты */
@media (max-width: 768px) {
  .mailing-block {
    height: auto;
    min-height: 400px;
    padding: 20px 0;
  }
  .mailing-slide-activ {
    padding-top: 100px;
    padding-bottom: 40px;
  }
  .get-30 {
    font-size: 36px;
  }
  .Contrary {
    font-size: 14px;
    padding-top: 12px;
  }
  .search {
    flex-direction: column;
    height: auto;
    gap: 15px;
    position: relative;
  }
  .search-input-div {
    width: 100%;
  }
  .search-button-div {
    position: relative;
    right: auto;
    width: 100%;
  }
  .search-input {
    width: 100%;
    padding-right: 20px;
  }
  .btn-search {
    width: 100%;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  .mailing-block {
    height: auto;
    min-height: 350px;
    padding: 15px 0;
  }
  .mailing-slide-activ {
    padding-top: 60px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;
  }
  .get-30 {
    font-size: 28px;
    line-height: 120%;
  }
  .Contrary {
    font-size: 13px;
    padding-top: 10px;
    line-height: 160%;
  }
  .Search-bar {
    padding-top: 20px;
  }
  .search {
    width: 100%;
    gap: 12px;
    position: relative;
  }
  .search-button-div {
    position: relative;
    right: auto;
    width: 100%;
  }
  .search-input {
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .btn-search {
    font-size: 15px;
    height: 44px;
  }
  .binding,
  .list-item,
  .listText {
    font-size: 14px;
    padding-top: 10px;
  }
  .delete {
    font-size: 14px;
    height: 42px;
    max-width: 120px;
  }
  .list {
    padding: 0 10px;
  }
}
</style>
  