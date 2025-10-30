<template>
    <div class="brands-block">
        <div class="main-brand-block container" >
            <div v-for="item in brands" :key="item.id" class="brand-item">
                <img :src="item.icon" alt="brand">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Brands',
    data() {
        return {
            brands: [
             {id: 0, icon: '/src/assets/images/Group.png' },
             {id: 1, icon: '/src/assets/images/Desing.png' },
             {id: 2, icon: '/src/assets/images/greenery2.png' },
             {id: 3, icon: '/src/assets/images/Natural.png'},
             {id: 4, icon: '/src/assets/images/Nature.png'},
             {id: 5, icon: '/src/assets/images/Your company.png'}
            ]
        }
    }
}
</script>

<style scoped>
.brands-block{
    background: #D2E2EE;
    width: 100%;
    height: 100%;
}

.main-brand-block{
    display: flex;
    justify-content: space-between;
    padding: 25px;
    align-items: center;
    gap: 100px;
}
</style>