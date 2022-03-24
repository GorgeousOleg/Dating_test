<template>
        <div class="border">    
            <div v-if="$store.state.step_counter.curr_step==0">            
                <h1>Внимание!</h1>
                <p>Наши девушки прошли проверку модератором и мы<br>действительно хотим, чтобы люди находили друг друга<br>и встречались в реальной жизни, а не бесконечно<br> лайкали друг друга онлайн. </p>
                <p></p>
                <h2>Вы готовы к этому?</h2>
                <button class="buttonNEXT" v-on:click="$store.commit('step_counter/next_step')">Продолжить</button>
                <p class="p2">Мы не берем данных ваших кредитных карт</p>              
            </div>
            <div v-else-if="$store.state.step_counter.curr_step==1">
                <h1>Шаг 1</h1>
                <p>Мы должны быть уверены, что вы ищите серьезные отношения.</p>
                <button class="buttonNEXT" v-on:click="$store.commit('step_counter/next_step')">Продолжить</button>
            </div>
            <div v-else-if="$store.state.step_counter.curr_step==2">
                <h1>Шаг 2</h1>
                <p> Вы действительно готовы к реальным знакомствам?</p>
                <div class="button_container">
                    <button class="buttonY" v-on:click="$store.commit('step_counter/next_step')">да</button>
                    <button class="buttonN">нет</button>
                </div>            
            </div>
            <div v-else-if="$store.state.step_counter.curr_step==3">
                <h1>Шаг 3</h1>
                <p>  Вы не будете оскорблять или писать негативного девушкам, членам нашего клуба, вы согласны?</p>
                <div class="button_container">
                    <button class="buttonY" v-on:click="$store.commit('step_counter/next_step')">да</button>
                    <button class="buttonN">нет</button>
                </div>            
            </div>
            <div v-else-if="$store.state.step_counter.curr_step==4">
                <h1>Шаг 4</h1>
                <p>  Вы несете ответсвенность за информацию, которую размещаете на нашем сайте?</p>
                <div class="button_container">
                    <button class="buttonY" v-on:click="$store.commit('step_counter/next_step')">да</button>
                    <button class="buttonN">нет</button>
                </div>            
            </div>
            <div v-if="$store.state.step_counter.curr_step==5">            
                <h1>Поздравляем!</h1>
                <p>Мы тщательно подходим к подбору девушек<br> 
                и все они проверены нашим модератором </p>
                <hr> 
                <p>Наш сервис абсолютно бесплатен для вас, <br>
                мы не берем данных ваших кредитных карт <br>
                и не устраиваем простой флирт на камеру </p> 
                <hr> 
                <p>Мы даем личные контакты девушек, которые активно ищут <br>
                мужчину, чтобы вам было удобнее связаться друг другом, <br>
                а ваша переписка была действительно тайна без третьих лиц</p> 
                <hr> 
                <p>Мы даем личные контакты девушек, которые активно ищут <br>
                мужчину, чтобы вам было удобнее связаться друг другом, <br>
                а ваша переписка была действительно тайна без третьих лиц</p>
                <hr>  
                <p class="p3">Мы против каких либо оскорблений, унижений и угроз</p>
                <h2>Вы согласны с этим?</h2>
                <button class="buttonNEXT" v-on:click="$store.commit('step_counter/next_step')">я согласен</button>              
            </div>
        </div>
</template>



<style>
    @import url("../CSS/Form.css");
</style>
